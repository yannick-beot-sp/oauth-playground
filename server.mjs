import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 5173);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function isAllowedUrl(raw) {
  try {
    const url = new URL(raw);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function headersToObject(headers) {
  const out = {};
  headers.forEach((value, key) => {
    out[key] = value;
  });
  return out;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

async function proxyForward(req, res) {
  try {
    const parsed = JSON.parse((await readBody(req)) || "{}");
    const { url, method = "GET", headers = {}, body } = parsed;
    if (!url || !isAllowedUrl(url)) {
      sendJson(res, 400, {
        error: "Invalid HTTP(S) URL",
        errorCode: "invalidUrl",
      });
      return;
    }

    const init = {
      method,
      headers: { ...headers },
      redirect: "follow",
    };
    const upper = String(method).toUpperCase();
    if (body != null && body !== "" && upper !== "GET" && upper !== "HEAD") {
      init.body = typeof body === "string" ? body : JSON.stringify(body);
    }

    const response = await fetch(url, init);
    const text = await response.text();
    sendJson(res, 200, {
      status: response.status,
      statusText: response.statusText,
      headers: headersToObject(response.headers),
      body: text,
    });
  } catch (error) {
    sendJson(res, 502, {
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

async function serveStatic(req, res) {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  const relative = pathname.replace(/^\/+/, "");

  const filePath = join(root, relative);
  const normalized = normalize(filePath);
  if (!normalized.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const data = await readFile(normalized);
    res.writeHead(200, {
      "Content-Type": mime[extname(normalized)] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    if (pathname !== "/index.html") {
      try {
        const index = await readFile(join(root, "index.html"));
        res.writeHead(200, { "Content-Type": mime[".html"] });
        res.end(index);
        return;
      } catch {
        /* fall through */
      }
    }
    res.writeHead(404);
    res.end("Not found");
  }
}

const server = createServer((req, res) => {
  if (req.method === "POST" && req.url?.startsWith("/proxy/forward")) {
    proxyForward(req, res);
    return;
  }
  if (req.method === "GET" || req.method === "HEAD") {
    serveStatic(req, res);
    return;
  }
  res.writeHead(405);
  res.end("Method not allowed");
});

server.listen(port, "127.0.0.1", () => {
  console.log(`OAuth Playground: http://127.0.0.1:${port}`);
});
