const STORAGE_KEY = "oauth-playground.configs";
const SESSION_KEY = "oauth-playground.session";
const PREFERENCES_KEY = "oauth-playground.preferences";
const DEFAULT_REDIRECT_URI = "http://localhost:5173/";

const messages = {
  fr: {
    close: "Fermer",
    settings: "Paramètres",
    play: "Play",
    brandSubtitle: "Authorization code, générique",
    configuration: "Configuration",
    requestsResponses: "Requêtes / réponses",
    clear: "Vider",
    language: "Langue",
    languageAuto: "Langue automatique",
    languageFr: "Français",
    languageEn: "English",
    themeAuto: "Thème automatique",
    themeLight: "Thème clair",
    themeDark: "Thème sombre",
    noRequests: "Aucune requête pour le moment. Les appels d'autorisation, d'échange de tokens et d'API apparaîtront ici.",
    request: "Requête",
    response: "Réponse",
    settingsLead: "Enregistrez une configuration nommée. Elle est stockée uniquement dans le localStorage de ce navigateur.",
    proxyNotice: "Enregistrez l'URL de redirection ci-dessous auprès de votre authorization server. Les appels token et API passent par un proxy local (pas de CORS côté navigateur). Le secret client transite par ce proxy.",
    originNotice: "Cette page est ouverte sur <strong>{current}</strong> mais la redirect URI pointe vers <strong>{target}</strong>. Le stockage local étant isolé par origine, la configuration serait perdue au retour. Ouvrez le playground sur <a href=\"{href}\">{target}</a>.",
    configName: "Nom de la configuration",
    configNamePlaceholder: "Mon AS de labo",
    extraParams: "Paramètres d'autorisation additionnels (une ligne clé=valeur)",
    clientAuth: "Authentification du client (token)",
    clientAuthBody: "client_id / client_secret dans le body",
    usePkce: "Utiliser PKCE (S256)",
    save: "Enregistrer",
    newConfig: "Nouvelle configuration",
    deleteConfig: "Supprimer cette config",
    deleteAll: "Tout supprimer",
    noActiveConfig: "Aucune configuration active. Créez-en une dans l'onglet Paramètres.",
    resetSteps: "Réinitialiser les étapes",
    activeConfig: "Configuration active :",
    authorization: "Autorisation",
    authorizationHelp: "Redirige vers l'authorization server avec response_type=code{pkce}.",
    andPkce: " et PKCE",
    startAuthentication: "Lancer l'authentification",
    codeExchange: "Échange du code",
    codeExchangeHelp: "Le code d'autorisation ne suffit pas : les tokens sont obtenus par un <strong>POST</strong> vers l'endpoint token (via le proxy local).",
    getTokens: "Récupérer les tokens",
    refreshToken: "Rafraîchir l'access token",
    apiCall: "Appel API",
    apiHelp: "L'access token est ajouté en <code>Authorization: Bearer</code>.",
    method: "Méthode",
    sendRequest: "Envoyer la requête",
    missingName: "Donnez un nom à la configuration.",
    configUpdated: "Configuration « {name} » mise à jour.",
    configSaved: "Configuration « {name} » enregistrée.",
    confirmDelete: "Supprimer « {name} » ?",
    confirmDeleteAll: "Supprimer toutes les configurations et vider le stockage local ?",
    jwt: "JWT",
    jwtTitle: "Parser JWT",
    jwtLead: "Collez un JSON Web Token pour afficher le header, le payload et la signature. La signature n'est pas vérifiée.",
    jwtEncoded: "Token encodé",
    jwtHeader: "Header décodé",
    jwtPayload: "Payload décodé",
    jwtSignature: "Signature",
    jwtEmpty: "Collez un JWT pour voir son contenu.",
    jwtInvalidFormat: "Ce n'est pas un JWT compact (trois segments séparés par des points).",
    jwtInvalidHeader: "Impossible de décoder le header.",
    jwtInvalidPayload: "Impossible de décoder le payload.",
    jwtDecoded: "JWT décodé",
    jwtUnverified: "Signature non vérifiée",
    jwtUseAccess: "Access token",
    jwtUseId: "ID token",
    jwtClaims: "Claims temporels",
    jwtExpired: "expiré",
    jwtNotBefore: "pas encore valide",
    jwtNoSessionJwt: "Aucun JWT dans la session Play.",
    copy: "Copier",
    copied: "Copié",
    copyFailed: "Impossible de copier dans le presse-papiers.",
    missingTokenUrl: "Renseignez la Token URL dans Paramètres.",
    stateMismatch: "Le paramètre state ne correspond pas.",
    callbackReceived: "authorization code reçu",
    redirecting: "redirection vers l'authorization server",
    originAlert: "Cette page est ouverte sur {current} alors que la redirect URI pointe vers {target}.\nLe navigateur isole le stockage par origine : la configuration serait perdue au retour.\nOuvrez le playground sur {target} avant de lancer le flux.",
    invalidUrl: "URL HTTP(S) invalide",
  },
  en: {
    close: "Close",
    settings: "Settings",
    play: "Play",
    brandSubtitle: "Generic authorization code",
    configuration: "Configuration",
    requestsResponses: "Requests / responses",
    clear: "Clear",
    language: "Language",
    languageAuto: "Automatic language",
    languageFr: "Français",
    languageEn: "English",
    themeAuto: "Automatic theme",
    themeLight: "Light theme",
    themeDark: "Dark theme",
    noRequests: "No requests yet. Authorization, token exchange, and API calls will appear here.",
    request: "Request",
    response: "Response",
    settingsLead: "Save a named configuration. It is stored only in this browser's localStorage.",
    proxyNotice: "Register the redirect URL below with your authorization server. Token and API calls go through a local proxy (no browser-side CORS). The client secret passes through this proxy.",
    originNotice: "This page is open on <strong>{current}</strong>, but the redirect URI points to <strong>{target}</strong>. Since local storage is isolated by origin, the configuration would be lost on return. Open the playground on <a href=\"{href}\">{target}</a>.",
    configName: "Configuration name",
    configNamePlaceholder: "My lab authorization server",
    extraParams: "Additional authorization parameters (one key=value per line)",
    clientAuth: "Client authentication (token)",
    clientAuthBody: "client_id / client_secret in the body",
    usePkce: "Use PKCE (S256)",
    save: "Save",
    newConfig: "New configuration",
    deleteConfig: "Delete this configuration",
    deleteAll: "Delete all",
    noActiveConfig: "No active configuration. Create one in the Settings tab.",
    resetSteps: "Reset steps",
    activeConfig: "Active configuration:",
    authorization: "Authorization",
    authorizationHelp: "Redirects to the authorization server with response_type=code{pkce}.",
    andPkce: " and PKCE",
    startAuthentication: "Start authentication",
    codeExchange: "Code exchange",
    codeExchangeHelp: "The authorization code is not enough: tokens are obtained with a <strong>POST</strong> to the token endpoint (through the local proxy).",
    getTokens: "Get tokens",
    refreshToken: "Refresh access token",
    apiCall: "API call",
    apiHelp: "The access token is added as <code>Authorization: Bearer</code>.",
    method: "Method",
    sendRequest: "Send request",
    missingName: "Give the configuration a name.",
    configUpdated: "Configuration “{name}” updated.",
    configSaved: "Configuration “{name}” saved.",
    confirmDelete: "Delete “{name}”?",
    confirmDeleteAll: "Delete all configurations and clear local storage?",
    jwt: "JWT",
    jwtTitle: "JWT parser",
    jwtLead: "Paste a JSON Web Token to inspect its header, payload, and signature. The signature is not verified.",
    jwtEncoded: "Encoded token",
    jwtHeader: "Decoded header",
    jwtPayload: "Decoded payload",
    jwtSignature: "Signature",
    jwtEmpty: "Paste a JWT to see its contents.",
    jwtInvalidFormat: "This is not a compact JWT (three segments separated by dots).",
    jwtInvalidHeader: "Could not decode the header.",
    jwtInvalidPayload: "Could not decode the payload.",
    jwtDecoded: "JWT decoded",
    jwtUnverified: "Signature not verified",
    jwtUseAccess: "Access token",
    jwtUseId: "ID token",
    jwtClaims: "Time claims",
    jwtExpired: "expired",
    jwtNotBefore: "not yet valid",
    jwtNoSessionJwt: "No JWT in the Play session.",
    copy: "Copy",
    copied: "Copied",
    copyFailed: "Could not copy to the clipboard.",
    missingTokenUrl: "Enter the Token URL in Settings.",
    stateMismatch: "The state parameter does not match.",
    callbackReceived: "authorization code received",
    redirecting: "redirecting to the authorization server",
    originAlert: "This page is open on {current}, but the redirect URI points to {target}.\nThe browser isolates storage by origin, so the configuration would be lost on return.\nOpen the playground on {target} before starting the flow.",
    invalidUrl: "Invalid HTTP(S) URL",
  },
};

function loadPreferences() {
  try {
    return { language: "auto", theme: "auto", ...JSON.parse(localStorage.getItem(PREFERENCES_KEY) || "{}") };
  } catch {
    return { language: "auto", theme: "auto" };
  }
}

function currentLanguage() {
  if (state?.preferences?.language === "en" || state?.preferences?.language === "fr") {
    return state.preferences.language;
  }
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

function t(key, values = {}) {
  return (messages[currentLanguage()][key] || messages.en[key] || key).replace(
    /\{(\w+)\}/g,
    (_, name) => values[name] ?? "",
  );
}

function applyPreferences() {
  const language = currentLanguage();
  const theme = state.preferences.theme;
  document.documentElement.lang = language;
  document.documentElement.dataset.theme =
    theme === "auto"
      ? window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
      : theme;
  localStorage.setItem(PREFERENCES_KEY, JSON.stringify(state.preferences));
}

const emptyConfig = () => ({
  id: crypto.randomUUID(),
  name: "",
  authorizationUrl: "",
  tokenUrl: "",
  clientId: "",
  clientSecret: "",
  redirectUri: DEFAULT_REDIRECT_URI,
  scope: "",
  extraAuthParams: "",
  usePkce: true,
  clientAuth: "body",
});

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { configs: [], activeId: null };
    const parsed = JSON.parse(raw);
    return {
      configs: Array.isArray(parsed.configs) ? parsed.configs : [],
      activeId: parsed.activeId ?? null,
    };
  } catch {
    return { configs: [], activeId: null };
  }
}

function saveStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function loadSession() {
  try {
    const raw =
      localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  sessionStorage.removeItem(SESSION_KEY);
}

function b64url(bytes) {
  let str = "";
  bytes.forEach((b) => {
    str += String.fromCharCode(b);
  });
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function randomUrlSafe(size = 32) {
  const bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);
  return b64url(bytes);
}

async function pkceChallenge(verifier) {
  const data = new TextEncoder().encode(verifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return b64url(new Uint8Array(digest));
}

function parseExtraParams(text) {
  const params = new URLSearchParams();
  for (const line of (text || "").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    params.set(trimmed.slice(0, eq).trim(), trimmed.slice(eq + 1).trim());
  }
  return params;
}

function pretty(value) {
  if (value == null) return "";
  if (typeof value !== "string") {
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return String(value);
    }
  }
  try {
    return JSON.stringify(JSON.parse(value), null, 2);
  } catch {
    return value;
  }
}

function normalizeJwtInput(value) {
  return String(value || "")
    .trim()
    .replace(/^Bearer\s+/i, "")
    .replace(/\s+/g, "");
}

function looksLikeJwt(value) {
  const token = normalizeJwtInput(value);
  const parts = token.split(".");
  return parts.length === 3 && parts[0] && parts[1];
}

function sessionJwtTokens() {
  const tokens = state.session.tokens || {};
  return {
    access: looksLikeJwt(tokens.access_token) ? tokens.access_token : "",
    id: looksLikeJwt(tokens.id_token) ? tokens.id_token : "",
  };
}

function ensureJwtPrefill() {
  if (state.jwt.input.trim()) return;
  const fromSession = sessionJwtTokens();
  state.jwt.input = fromSession.access || fromSession.id || "";
}

function b64urlToBytes(segment) {
  const padded =
    segment.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (segment.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function decodeJwtPart(segment) {
  const text = new TextDecoder().decode(b64urlToBytes(segment));
  return { text, json: JSON.parse(text) };
}

function parseJwt(raw) {
  const token = normalizeJwtInput(raw);
  if (!token) return { empty: true };
  const parts = token.split(".");
  if (parts.length !== 3 || !parts[0] || !parts[1]) {
    return { empty: false, error: "invalidFormat", parts };
  }
  let header = null;
  let payload = null;
  try {
    header = decodeJwtPart(parts[0]).json;
  } catch {
    return { empty: false, error: "invalidHeader", parts };
  }
  try {
    payload = decodeJwtPart(parts[1]).json;
  } catch {
    return { empty: false, error: "invalidPayload", parts, header };
  }
  return {
    empty: false,
    error: null,
    parts,
    header,
    payload,
    signature: parts[2] || "",
  };
}

function highlightJson(value) {
  const json = JSON.stringify(value, null, 2);
  return escapeHtml(json)
    .replace(/("(?:\\.|[^"\\])*")(\s*:)?/g, (match, str, colon) => {
      if (colon) return `<span class="json-key">${str}</span>${colon}`;
      return `<span class="json-string">${str}</span>`;
    })
    .replace(/\b(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/g, '<span class="json-number">$1</span>')
    .replace(/\b(true|false)\b/g, '<span class="json-bool">$1</span>')
    .replace(/\bnull\b/g, '<span class="json-null">null</span>');
}

function formatJwtDate(seconds) {
  const date = new Date(Number(seconds) * 1000);
  if (Number.isNaN(date.getTime())) return String(seconds);
  const locale = currentLanguage() === "fr" ? "fr-FR" : "en-US";
  return date.toLocaleString(locale, { timeZoneName: "short" });
}

function jwtTimeClaims(payload) {
  if (!payload || typeof payload !== "object") return [];
  const now = Date.now() / 1000;
  return ["iat", "nbf", "exp", "auth_time"]
    .filter((claim) => payload[claim] != null && payload[claim] !== "")
    .map((claim) => {
      const value = Number(payload[claim]);
      let status = "";
      if (claim === "exp" && value < now) status = "expired";
      if (claim === "nbf" && value > now) status = "notBefore";
      return { claim, value, status };
    });
}

function formatHeaders(headers) {
  return Object.entries(headers || {})
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

const app = document.getElementById("app");
const state = {
  tab: "settings",
  preferences: loadPreferences(),
  store: loadStore(),
  draft: emptyConfig(),
  session: loadSession(),
  traces: [],
  api: {
    method: "GET",
    endpoint: "",
    contentType: "application/json",
    body: "",
  },
  jwt: {
    input: "",
  },
};

state.traces = Array.isArray(state.session.traces) ? state.session.traces : [];

function activeConfig() {
  return state.store.configs.find((c) => c.id === state.store.activeId) || null;
}

function persistSession() {
  state.session.traces = state.traces;
  saveSession(state.session);
}

function addTrace(entry) {
  state.traces = [
    {
      id: crypto.randomUUID(),
      at: new Date().toISOString(),
      open: true,
      ...entry,
    },
    ...state.traces,
  ].slice(0, 40);
  persistSession();
  render();
}

function syncDraftFromActive() {
  const current = activeConfig();
  state.draft = current ? { ...current } : emptyConfig();
}

function redirectOriginMismatch(config) {
  try {
    return new URL(config.redirectUri).origin !== window.location.origin;
  } catch {
    return false;
  }
}

function consumeCallback() {
  const url = new URL(window.location.href);
  const error = url.searchParams.get("error");
  const code = url.searchParams.get("code");
  const returnedState = url.searchParams.get("state");
  if (!error && !code) return;

  const flow = state.session.flow || {};
  if (flow.configId && state.store.configs.some((c) => c.id === flow.configId)) {
    state.store.activeId = flow.configId;
    saveStore(state.store);
    syncDraftFromActive();
  }

  const expected = flow.oauthState;
  const query = Object.fromEntries(url.searchParams.entries());

  addTrace({
    kind: "callback",
    title: "GET callback",
    request: {
      method: "GET",
      url: window.location.href,
      headers: {},
      body: "",
    },
    response: {
      status: error ? 400 : 302,
      statusText: error ? error : t("callbackReceived"),
      headers: {},
      body: pretty(query),
    },
  });

  if (returnedState && expected && returnedState !== expected) {
    state.session.authError = t("stateMismatch");
  } else if (error) {
    state.session.authError =
      url.searchParams.get("error_description") || error;
  } else {
    state.session.authorizationCode = code;
    state.session.authError = null;
    state.tab = "play";
  }

  url.search = "";
  url.hash = "";
  history.replaceState({}, "", url.toString());
  persistSession();
}

async function startAuthorize() {
  const config = activeConfig();
  if (!config) return;

  if (redirectOriginMismatch(config)) {
    const target = new URL(config.redirectUri).origin;
    alert(t("originAlert", { current: window.location.origin, target }));
    return;
  }

  const oauthState = randomUrlSafe(16);
  state.session.authorizationCode = null;
  state.session.tokens = null;
  state.session.authError = null;

  const params = new URLSearchParams({
    response_type: "code",
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    state: oauthState,
  });
  if (config.scope) params.set("scope", config.scope);

  let verifier = null;
  if (config.usePkce) {
    verifier = randomUrlSafe(32);
    params.set("code_challenge", await pkceChallenge(verifier));
    params.set("code_challenge_method", "S256");
  }

  state.session.flow = {
    configId: config.id,
    oauthState,
    codeVerifier: verifier,
    redirectUri: config.redirectUri,
  };

  const extra = parseExtraParams(config.extraAuthParams);
  extra.forEach((value, key) => params.set(key, value));

  const authorizeUrl = `${config.authorizationUrl}${config.authorizationUrl.includes("?") ? "&" : "?"}${params.toString()}`;

  addTrace({
    kind: "authorize",
    title: "GET authorization",
    request: {
      method: "GET",
      url: authorizeUrl,
      headers: {},
      body: "",
    },
    response: {
      status: 302,
      statusText: t("redirecting"),
      headers: { Location: authorizeUrl },
      body: "",
    },
  });

  persistSession();
  window.location.assign(authorizeUrl);
}

function tokenHeadersAndBody(config, extraFields) {
  const body = new URLSearchParams({
    ...extraFields,
    redirect_uri: config.redirectUri,
  });
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  if (config.clientAuth === "basic") {
    headers.Authorization = `Basic ${btoa(`${config.clientId}:${config.clientSecret}`)}`;
  } else {
    body.set("client_id", config.clientId);
    if (config.clientSecret) body.set("client_secret", config.clientSecret);
  }

  return { headers, body: body.toString() };
}

async function proxyForward({ url, method, headers, body, title }) {
  const request = { method, url, headers, body: body || "" };
  const started = await fetch("/proxy/forward", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, method, headers, body }),
  });
  const payload = await started.json();
  if (!started.ok && payload.error) {
    const errorMessage = payload.errorCode ? t(payload.errorCode) : payload.error;
    addTrace({
      kind: "error",
      title,
      request,
      response: {
        status: started.status,
        statusText: started.statusText,
        headers: {},
        body: errorMessage,
      },
    });
    throw new Error(errorMessage);
  }
  addTrace({
    kind: "http",
    title,
    request,
    response: {
      status: payload.status,
      statusText: payload.statusText,
      headers: payload.headers || {},
      body: payload.body || "",
    },
  });
  return payload;
}

async function exchangeCode() {
  const config = activeConfig();
  const code = state.session.authorizationCode;
  if (!config || !code) return;
  if (!config.tokenUrl) {
    alert(t("missingTokenUrl"));
    return;
  }

  const fields = { grant_type: "authorization_code", code };
  const verifier = state.session.flow?.codeVerifier;
  if (config.usePkce && verifier) {
    fields.code_verifier = verifier;
  }
  const { headers, body } = tokenHeadersAndBody(config, fields);
  const payload = await proxyForward({
    url: config.tokenUrl,
    method: "POST",
    headers,
    body,
    title: "POST token (authorization_code)",
  });
  try {
    state.session.tokens = JSON.parse(payload.body);
  } catch {
    state.session.tokens = { raw: payload.body };
  }
  persistSession();
  render();
}

async function refreshTokens() {
  const config = activeConfig();
  const refresh = state.session.tokens?.refresh_token;
  if (!config || !refresh) return;
  if (!config.tokenUrl) {
    alert(t("missingTokenUrl"));
    return;
  }
  const { headers, body } = tokenHeadersAndBody(config, {
    grant_type: "refresh_token",
    refresh_token: refresh,
  });
  const payload = await proxyForward({
    url: config.tokenUrl,
    method: "POST",
    headers,
    body,
    title: "POST token (refresh_token)",
  });
  try {
    const next = JSON.parse(payload.body);
    state.session.tokens = {
      ...state.session.tokens,
      ...next,
      refresh_token: next.refresh_token || refresh,
    };
  } catch {
    state.session.tokens = { raw: payload.body };
  }
  persistSession();
  render();
}

async function sendApi() {
  const access = state.session.tokens?.access_token;
  const headers = {};
  if (access) headers.Authorization = `Bearer ${access}`;
  const method = state.api.method;
  if (method !== "GET" && method !== "HEAD" && state.api.contentType) {
    headers["Content-Type"] = state.api.contentType;
  }
  await proxyForward({
    url: state.api.endpoint,
    method,
    headers,
    body: method === "GET" || method === "HEAD" ? "" : state.api.body,
    title: `${method} API`,
  });
}

const flashRoot = document.getElementById("flash");

function showFlash(kind, message) {
  if (!flashRoot) return;
  const item = document.createElement("div");
  item.className = `flash ${kind}`;
  item.setAttribute("role", kind === "err" ? "alert" : "status");
  const text = document.createElement("span");
  text.textContent = message;
  const close = document.createElement("button");
  close.type = "button";
  close.setAttribute("aria-label", t("close"));
  close.textContent = "×";
  const dismiss = () => {
    if (item.classList.contains("out")) return;
    item.classList.add("out");
    window.setTimeout(() => item.remove(), 180);
  };
  close.addEventListener("click", dismiss);
  item.append(text, close);
  flashRoot.append(item);
  window.setTimeout(dismiss, 3500);
}

function saveDraft() {
  const name = state.draft.name.trim();
  if (!name) {
    showFlash("err", t("missingName"));
    return;
  }
  const existing = state.store.configs.findIndex((c) => c.id === state.draft.id);
  const saved = { ...state.draft, name };
  if (existing >= 0) state.store.configs[existing] = saved;
  else state.store.configs.push(saved);
  state.store.activeId = saved.id;
  saveStore(state.store);
  render();
  showFlash(
    "ok",
    t(existing >= 0 ? "configUpdated" : "configSaved", { name }),
  );
}

function deleteActive() {
  const current = activeConfig();
  if (!current) return;
  if (!confirm(t("confirmDelete", { name: current.name }))) return;
  state.store.configs = state.store.configs.filter((c) => c.id !== current.id);
  state.store.activeId = state.store.configs[0]?.id ?? null;
  saveStore(state.store);
  syncDraftFromActive();
  render();
}

function resetSteps() {
  state.session.authorizationCode = null;
  state.session.tokens = null;
  state.session.authError = null;
  state.session.flow = null;
  persistSession();
  render();
}

function deleteAll() {
  if (!confirm(t("confirmDeleteAll"))) {
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  state.store = { configs: [], activeId: null };
  state.draft = emptyConfig();
  state.session = {};
  state.traces = [];
  render();
}

function el(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderTraces() {
  if (!state.traces.length) {
    return `<div class="trace-empty">${t("noRequests")}</div>`;
  }
  return state.traces
    .map((trace) => {
      const ok = Number(trace.response?.status) < 400;
      const badge = trace.kind === "authorize" || trace.kind === "callback" ? "info" : ok ? "ok" : "err";
      return `
        <article class="trace-item ${trace.open ? "open" : ""}" data-trace="${trace.id}">
          <header>
            <span class="badge ${badge}">${escapeHtml(trace.response?.status ?? "")}</span>
            <span>${escapeHtml(trace.title)}</span>
            <span style="margin-left:auto;color:var(--muted)">${escapeHtml(trace.at.replace("T", " ").slice(11, 19))}</span>
          </header>
          <div class="trace-body">
            <h4>${t("request")}</h4>
            <pre>${escapeHtml(`${trace.request.method} ${trace.request.url}\n${formatHeaders(trace.request.headers)}\n\n${pretty(trace.request.body)}`)}</pre>
            <h4>${t("response")}</h4>
            <pre>${escapeHtml(`${trace.response.status} ${trace.response.statusText}\n${formatHeaders(trace.response.headers)}\n\n${pretty(trace.response.body)}`)}</pre>
          </div>
        </article>`;
    })
    .join("");
}

function settingsView() {
  const d = state.draft;
  const redirectOrigin = redirectOriginMismatch(d)
    ? escapeHtml(new URL(d.redirectUri).origin)
    : "";
  return `
    <h2>${t("settings")}</h2>
    <p class="lead">${t("settingsLead")}</p>
    <div class="notice">${t("proxyNotice")}</div>
    ${
      redirectOrigin
        ? `<div class="notice">${t("originNotice", {
            current: escapeHtml(window.location.origin),
            target: redirectOrigin,
            href: `${redirectOrigin}/`,
          })}</div>`
        : ""
    }
    <div class="card">
      <label>${t("configName")}</label>
      <input id="f-name" type="text" value="${escapeHtml(d.name)}" placeholder="${t("configNamePlaceholder")}" />
      <div class="row">
        <div>
          <label>Authorization URL</label>
          <input id="f-auth" type="url" value="${escapeHtml(d.authorizationUrl)}" placeholder="https://as.example.com/authorize" />
        </div>
        <div>
          <label>Token URL</label>
          <input id="f-token" type="url" value="${escapeHtml(d.tokenUrl)}" placeholder="https://as.example.com/token" />
        </div>
      </div>
      <div class="row">
        <div>
          <label>Client ID</label>
          <input id="f-cid" type="text" value="${escapeHtml(d.clientId)}" />
        </div>
        <div>
          <label>Client secret</label>
          <input id="f-csec" type="password" value="${escapeHtml(d.clientSecret)}" />
        </div>
      </div>
      <label>Redirect URI</label>
      <input id="f-redir" type="url" value="${escapeHtml(d.redirectUri)}" />
      <label>Scope</label>
      <input id="f-scope" type="text" value="${escapeHtml(d.scope)}" placeholder="openid profile" />
      <label>${t("extraParams")}</label>
      <textarea id="f-extra" placeholder="audience=api\nprompt=consent">${escapeHtml(d.extraAuthParams)}</textarea>
      <div class="row">
        <div>
          <label>${t("clientAuth")}</label>
          <select id="f-cauth">
            <option value="body" ${d.clientAuth === "body" ? "selected" : ""}>${t("clientAuthBody")}</option>
            <option value="basic" ${d.clientAuth === "basic" ? "selected" : ""}>HTTP Basic</option>
          </select>
        </div>
        <div class="check" style="align-self:end;margin-bottom:0.2rem">
          <input id="f-pkce" type="checkbox" ${d.usePkce ? "checked" : ""} />
          <span>${t("usePkce")}</span>
        </div>
      </div>
      <div class="actions">
        <button class="primary" id="btn-save">${t("save")}</button>
        <button class="ghost" id="btn-new">${t("newConfig")}</button>
        <button class="danger" id="btn-del" ${activeConfig() ? "" : "disabled"}>${t("deleteConfig")}</button>
        <button class="danger" id="btn-del-all">${t("deleteAll")}</button>
      </div>
    </div>
  `;
}

const COPY_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
const COPIED_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

function tokenBox(value, copyKey) {
  const hasValue = Boolean(value);
  return `
    <div class="token-box-wrap">
      <div class="token-box">${escapeHtml(value || "—")}</div>
      <button type="button" class="copy-button" data-copy-key="${copyKey}" ${hasValue ? "" : "disabled"} title="${t("copy")}" aria-label="${t("copy")}">${COPY_ICON}</button>
    </div>
  `;
}

async function copyText(value) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }
  } catch {
    /* fallback below */
  }
  const area = document.createElement("textarea");
  area.value = value;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.append(area);
  area.select();
  const ok = document.execCommand("copy");
  area.remove();
  if (!ok) throw new Error("copy failed");
}

function copyValueFor(key) {
  const parsed = parseJwt(state.jwt.input);
  return {
    authorization_code: state.session.authorizationCode,
    access_token: state.session.tokens?.access_token,
    refresh_token: state.session.tokens?.refresh_token,
    jwt_token: normalizeJwtInput(state.jwt.input),
    jwt_header: parsed.header ? JSON.stringify(parsed.header, null, 2) : "",
    jwt_payload: parsed.payload ? JSON.stringify(parsed.payload, null, 2) : "",
    jwt_signature: parsed.signature || "",
  }[key];
}

function playView() {
  const config = activeConfig();
  const code = state.session.authorizationCode;
  const tokens = state.session.tokens;
  const step1 = code || tokens ? "done" : "active";
  const step2 = tokens ? "done" : code ? "active" : "";
  const step3 = tokens ? "active" : "";
  if (!config) {
    return `
      <h2>${t("play")}</h2>
      <p class="lead">${t("noActiveConfig")}</p>
    `;
  }
  const canReset = Boolean(code || tokens || state.session.authError || state.session.flow);
  return `
    <div class="play-head">
      <h2>${t("play")}</h2>
      <button class="ghost" id="btn-reset-steps" ${canReset ? "" : "disabled"}>${t("resetSteps")}</button>
    </div>
    <p class="lead">${t("activeConfig")} <strong>${escapeHtml(config.name)}</strong></p>
    ${state.session.authError ? `<div class="notice">${escapeHtml(state.session.authError)}</div>` : ""}
    <section class="step ${step1}">
      <h3>1. ${t("authorization")}</h3>
      <p>${t("authorizationHelp", { pkce: config.usePkce ? t("andPkce") : "" })}</p>
      <button class="primary" id="btn-auth">${t("startAuthentication")}</button>
    </section>
    <section class="step ${step2}">
      <h3>2. ${t("codeExchange")}</h3>
      <p>${t("codeExchangeHelp")}</p>
      <label>Token URL</label>
      <div class="token-box">${escapeHtml(config.tokenUrl || "—")}</div>
      <label>Authorization code</label>
      ${tokenBox(code, "authorization_code")}
      <div class="actions">
        <button class="primary" id="btn-exchange" ${code && config.tokenUrl ? "" : "disabled"}>${t("getTokens")}</button>
        <button class="ghost" id="btn-refresh" ${tokens?.refresh_token && config.tokenUrl ? "" : "disabled"}>${t("refreshToken")}</button>
      </div>
      <div class="token-grid" style="margin-top:0.8rem">
        <div>
          <label>Access token</label>
          ${tokenBox(tokens?.access_token, "access_token")}
        </div>
        <div>
          <label>Refresh token</label>
          ${tokenBox(tokens?.refresh_token, "refresh_token")}
        </div>
      </div>
    </section>
    <section class="step ${step3}">
      <h3>3. ${t("apiCall")}</h3>
      <p>${t("apiHelp")}</p>
      <div class="row">
        <div>
          <label>${t("method")}</label>
          <select id="api-method">
            ${["GET", "POST", "PUT", "PATCH", "DELETE"].map((m) => `<option ${state.api.method === m ? "selected" : ""}>${m}</option>`).join("")}
          </select>
        </div>
        <div>
          <label>Content-Type</label>
          <input id="api-ct" type="text" value="${escapeHtml(state.api.contentType)}" />
        </div>
      </div>
      <label>Endpoint</label>
      <input id="api-url" type="url" value="${escapeHtml(state.api.endpoint)}" placeholder="https://api.example.com/resource" />
      <label>Body</label>
      <textarea id="api-body" placeholder='{"hello":"world"}'>${escapeHtml(state.api.body)}</textarea>
      <div class="actions">
        <button class="primary" id="btn-api" ${tokens?.access_token && state.api.endpoint ? "" : "disabled"}>${t("sendRequest")}</button>
      </div>
    </section>
  `;
}

function jwtEncodedPreviewHtml(parsed) {
  if (parsed.empty) return "";
  const parts = parsed.parts || [];
  const names = ["header", "payload", "signature"];
  return parts
    .map(
      (part, index) =>
        `<span class="jwt-seg jwt-seg-${names[index] || "extra"}">${escapeHtml(part)}</span>`,
    )
    .join('<span class="jwt-dot">.</span>');
}

function jwtStatusHtml(parsed) {
  if (parsed.empty) {
    return `<span class="badge">${escapeHtml(t("jwtEmpty"))}</span>`;
  }
  if (parsed.error === "invalidFormat") {
    return `<span class="badge err">${escapeHtml(t("jwtInvalidFormat"))}</span>`;
  }
  if (parsed.error === "invalidHeader") {
    return `<span class="badge err">${escapeHtml(t("jwtInvalidHeader"))}</span>`;
  }
  if (parsed.error === "invalidPayload") {
    return `<span class="badge err">${escapeHtml(t("jwtInvalidPayload"))}</span>`;
  }
  return `
    <span class="badge ok">${escapeHtml(t("jwtDecoded"))}</span>
    <span class="badge">${escapeHtml(t("jwtUnverified"))}</span>
  `;
}

function jwtJsonPanel(title, json, copyKey, extraClass = "") {
  const hasValue = json != null;
  return `
    <section class="jwt-card ${extraClass}">
      <div class="jwt-card-head">
        <h3>${escapeHtml(title)}</h3>
        <button type="button" class="copy-button" data-copy-key="${copyKey}" ${hasValue ? "" : "disabled"} title="${t("copy")}" aria-label="${t("copy")}">${COPY_ICON}</button>
      </div>
      <pre class="jwt-json">${hasValue ? highlightJson(json) : "—"}</pre>
    </section>
  `;
}

function jwtClaimsHtml(payload) {
  const claims = jwtTimeClaims(payload);
  if (!claims.length) return "";
  return `
    <section class="jwt-card">
      <div class="jwt-card-head">
        <h3>${escapeHtml(t("jwtClaims"))}</h3>
      </div>
      <ul class="jwt-claims">
        ${claims
          .map((item) => {
            const badge =
              item.status === "expired"
                ? `<span class="badge err">${escapeHtml(t("jwtExpired"))}</span>`
                : item.status === "notBefore"
                  ? `<span class="badge err">${escapeHtml(t("jwtNotBefore"))}</span>`
                  : "";
            return `<li><code>${escapeHtml(item.claim)}</code> <span>${escapeHtml(String(item.value))}</span> <span class="jwt-claim-date">${escapeHtml(formatJwtDate(item.value))}</span> ${badge}</li>`;
          })
          .join("")}
      </ul>
    </section>
  `;
}

function jwtDecodedInnerHtml() {
  const parsed = parseJwt(state.jwt.input);
  if (parsed.empty) {
    return `<p class="lead">${t("jwtEmpty")}</p>`;
  }
  return `
    ${jwtJsonPanel(t("jwtHeader"), parsed.header, "jwt_header", "jwt-card-header")}
    ${jwtJsonPanel(t("jwtPayload"), parsed.payload, "jwt_payload", "jwt-card-payload")}
    <section class="jwt-card jwt-card-signature">
      <div class="jwt-card-head">
        <h3>${escapeHtml(t("jwtSignature"))}</h3>
        <button type="button" class="copy-button" data-copy-key="jwt_signature" ${parsed.signature ? "" : "disabled"} title="${t("copy")}" aria-label="${t("copy")}">${COPY_ICON}</button>
      </div>
      <pre class="jwt-json jwt-signature">${parsed.signature ? escapeHtml(parsed.signature) : "—"}</pre>
    </section>
    ${jwtClaimsHtml(parsed.payload)}
  `;
}

function jwtEncodedView() {
  const parsed = parseJwt(state.jwt.input);
  const fromSession = sessionJwtTokens();
  return `
    <div class="play-head">
      <h2>${t("jwtTitle")}</h2>
    </div>
    <p class="lead">${t("jwtLead")}</p>
    <div class="jwt-status" id="jwt-status">${jwtStatusHtml(parsed)}</div>
    <label>${t("jwtEncoded")}</label>
    <div class="token-box-wrap jwt-input-wrap">
      <textarea id="jwt-input" class="jwt-input" spellcheck="false" placeholder="xxxxx.yyyyy.zzzzz">${escapeHtml(state.jwt.input)}</textarea>
      <button type="button" class="copy-button" data-copy-key="jwt_token" ${normalizeJwtInput(state.jwt.input) ? "" : "disabled"} title="${t("copy")}" aria-label="${t("copy")}">${COPY_ICON}</button>
    </div>
    <pre class="jwt-encoded" id="jwt-encoded-preview">${jwtEncodedPreviewHtml(parsed)}</pre>
    <div class="actions">
      <button class="ghost" id="btn-jwt-access" ${fromSession.access ? "" : "disabled"}>${t("jwtUseAccess")}</button>
      <button class="ghost" id="btn-jwt-id" ${fromSession.id ? "" : "disabled"}>${t("jwtUseId")}</button>
      <button class="small" id="btn-jwt-clear">${t("clear")}</button>
    </div>
    ${!fromSession.access && !fromSession.id ? `<p class="hint">${t("jwtNoSessionJwt")}</p>` : ""}
  `;
}

function jwtDecodedView() {
  return `<div id="jwt-decoded">${jwtDecodedInnerHtml()}</div>`;
}

function refreshJwtPanels() {
  const parsed = parseJwt(state.jwt.input);
  const status = app.querySelector("#jwt-status");
  const preview = app.querySelector("#jwt-encoded-preview");
  const decoded = app.querySelector("#jwt-decoded");
  const copyToken = app.querySelector('[data-copy-key="jwt_token"]');
  if (status) status.innerHTML = jwtStatusHtml(parsed);
  if (preview) preview.innerHTML = jwtEncodedPreviewHtml(parsed);
  if (decoded) decoded.innerHTML = jwtDecodedInnerHtml();
  if (copyToken) copyToken.disabled = !normalizeJwtInput(state.jwt.input);
}

function bindJwtEvents() {
  app.querySelector("#jwt-input")?.addEventListener("input", (e) => {
    state.jwt.input = e.target.value;
    refreshJwtPanels();
  });
  app.querySelector("#btn-jwt-access")?.addEventListener("click", () => {
    const { access } = sessionJwtTokens();
    if (!access) return;
    state.jwt.input = access;
    const input = app.querySelector("#jwt-input");
    if (input) input.value = access;
    refreshJwtPanels();
  });
  app.querySelector("#btn-jwt-id")?.addEventListener("click", () => {
    const { id } = sessionJwtTokens();
    if (!id) return;
    state.jwt.input = id;
    const input = app.querySelector("#jwt-input");
    if (input) input.value = id;
    refreshJwtPanels();
  });
  app.querySelector("#btn-jwt-clear")?.addEventListener("click", () => {
    state.jwt.input = "";
    const input = app.querySelector("#jwt-input");
    if (input) input.value = "";
    refreshJwtPanels();
  });
}

function render() {
  const configs = state.store.configs;
  const themeIcon = { auto: "◐", light: "☀", dark: "☾" }[state.preferences.theme];
  const themeLabel = t(
    state.preferences.theme === "auto"
      ? "themeAuto"
      : state.preferences.theme === "light"
        ? "themeLight"
        : "themeDark",
  );
  app.innerHTML = `
    <header class="topbar">
      <div class="brand">
        <strong>OAuth Playground</strong>
        <span>${t("brandSubtitle")}</span>
      </div>
      <nav class="tabs">
        <button data-tab="settings" class="${state.tab === "settings" ? "active" : ""}">${t("settings")}</button>
        <button data-tab="play" class="${state.tab === "play" ? "active" : ""}">${t("play")}</button>
        <button data-tab="jwt" class="${state.tab === "jwt" ? "active" : ""}">${t("jwt")}</button>
      </nav>
      <div class="topbar-right">
        <select class="config-select" id="config-select">
          <option value="">— ${t("configuration")} —</option>
          ${configs.map((c) => `<option value="${c.id}" ${c.id === state.store.activeId ? "selected" : ""}>${escapeHtml(c.name)}</option>`).join("")}
        </select>
        <select class="language-select" id="language-select" aria-label="${t("language")}">
          <option value="auto" ${state.preferences.language === "auto" ? "selected" : ""}>${t("languageAuto")}</option>
          <option value="fr" ${state.preferences.language === "fr" ? "selected" : ""}>${t("languageFr")}</option>
          <option value="en" ${state.preferences.language === "en" ? "selected" : ""}>${t("languageEn")}</option>
        </select>
        <button class="icon-button" id="theme-toggle" type="button" title="${themeLabel}" aria-label="${themeLabel}">${themeIcon}</button>
      </div>
    </header>
    <div class="layout">
      <section class="panel">${state.tab === "settings" ? settingsView() : state.tab === "jwt" ? jwtEncodedView() : playView()}</section>
      <aside class="panel ${state.tab === "jwt" ? "jwt-panel" : "trace-panel"}">
        ${
          state.tab === "jwt"
            ? jwtDecodedView()
            : `
        <div class="trace-head">
          <h2>${t("requestsResponses")}</h2>
          <button class="small" id="btn-clear-traces">${t("clear")}</button>
        </div>
        ${renderTraces()}
        `
        }
      </aside>
    </div>
  `;

  app.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      readForm();
      state.tab = btn.dataset.tab;
      if (state.tab === "settings") syncDraftFromActive();
      if (state.tab === "jwt") ensureJwtPrefill();
      render();
    });
  });

  app.querySelector("#config-select").addEventListener("change", (e) => {
    readForm();
    state.store.activeId = e.target.value || null;
    saveStore(state.store);
    syncDraftFromActive();
    render();
  });

  app.querySelector("#language-select").addEventListener("change", (e) => {
    readForm();
    state.preferences.language = e.target.value;
    applyPreferences();
    render();
  });

  app.querySelector("#theme-toggle").addEventListener("click", () => {
    const themes = ["auto", "light", "dark"];
    state.preferences.theme =
      themes[(themes.indexOf(state.preferences.theme) + 1) % themes.length];
    applyPreferences();
    render();
  });

  app.querySelector("#btn-clear-traces")?.addEventListener("click", () => {
    state.traces = [];
    persistSession();
    render();
  });

  app.querySelectorAll(".trace-item header").forEach((header) => {
    header.addEventListener("click", () => {
      const id = header.parentElement.dataset.trace;
      const item = state.traces.find((t) => t.id === id);
      if (item) item.open = !item.open;
      header.parentElement.classList.toggle("open");
    });
  });

  bindTabEvents();
}

function readForm() {
  if (state.tab === "settings") {
    const g = (id) => app.querySelector(id);
    if (!g("#f-name")) return;
    state.draft = {
      ...state.draft,
      name: g("#f-name").value,
      authorizationUrl: g("#f-auth").value,
      tokenUrl: g("#f-token").value,
      clientId: g("#f-cid").value,
      clientSecret: g("#f-csec").value,
      redirectUri: g("#f-redir").value,
      scope: g("#f-scope").value,
      extraAuthParams: g("#f-extra").value,
      clientAuth: g("#f-cauth").value,
      usePkce: g("#f-pkce").checked,
    };
    return;
  }
  if (state.tab === "jwt") {
    const input = app.querySelector("#jwt-input");
    if (input) state.jwt.input = input.value;
    return;
  }
  const method = app.querySelector("#api-method");
  if (!method) return;
  state.api = {
    method: method.value,
    endpoint: app.querySelector("#api-url").value,
    contentType: app.querySelector("#api-ct").value,
    body: app.querySelector("#api-body").value,
  };
}

function bindTabEvents() {
  if (state.tab === "settings") {
    ["#f-name", "#f-auth", "#f-token", "#f-cid", "#f-csec", "#f-redir", "#f-scope", "#f-extra", "#f-cauth", "#f-pkce"].forEach((sel) => {
      app.querySelector(sel)?.addEventListener("input", readForm);
      app.querySelector(sel)?.addEventListener("change", readForm);
    });
    app.querySelector("#btn-save").addEventListener("click", () => {
      readForm();
      saveDraft();
    });
    app.querySelector("#btn-new").addEventListener("click", () => {
      state.store.activeId = null;
      state.draft = emptyConfig();
      render();
    });
    app.querySelector("#btn-del").addEventListener("click", deleteActive);
    app.querySelector("#btn-del-all").addEventListener("click", deleteAll);
    return;
  }

  if (state.tab === "jwt") {
    bindJwtEvents();
    return;
  }

  app.querySelector("#btn-reset-steps")?.addEventListener("click", resetSteps);
  app.querySelector("#btn-auth")?.addEventListener("click", startAuthorize);
  app.querySelector("#btn-exchange")?.addEventListener("click", () => {
    exchangeCode().catch((err) => alert(err.message));
  });
  app.querySelector("#btn-refresh")?.addEventListener("click", () => {
    refreshTokens().catch((err) => alert(err.message));
  });
  ["#api-method", "#api-url", "#api-ct", "#api-body"].forEach((sel) => {
    app.querySelector(sel)?.addEventListener("input", () => {
      readForm();
      const btn = app.querySelector("#btn-api");
      if (btn) {
        btn.disabled = !(state.session.tokens?.access_token && state.api.endpoint);
      }
    });
  });
  app.querySelector("#btn-api")?.addEventListener("click", () => {
    readForm();
    sendApi().catch((err) => alert(err.message));
  });
}

applyPreferences();
syncDraftFromActive();
consumeCallback();
if (!state.store.activeId && state.store.configs[0]) {
  state.store.activeId = state.store.configs[0].id;
  syncDraftFromActive();
}
if (state.store.configs.length && !state.session.authorizationCode && !state.session.authError) {
  state.tab = "play";
}
render();

app.addEventListener("click", async (event) => {
  const btn = event.target.closest(".copy-button[data-copy-key]");
  if (!btn || btn.disabled) return;
  const value = copyValueFor(btn.dataset.copyKey);
  if (!value) return;
  try {
    await copyText(value);
    btn.innerHTML = COPIED_ICON;
    btn.title = t("copied");
    btn.setAttribute("aria-label", t("copied"));
    btn.classList.add("copied");
    window.setTimeout(() => {
      if (!btn.isConnected) return;
      btn.innerHTML = COPY_ICON;
      btn.title = t("copy");
      btn.setAttribute("aria-label", t("copy"));
      btn.classList.remove("copied");
    }, 1500);
  } catch {
    showFlash("err", t("copyFailed"));
  }
});

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
  if (state.preferences.theme === "auto") applyPreferences();
});
window.addEventListener("languagechange", () => {
  if (state.preferences.language === "auto") {
    applyPreferences();
    render();
  }
});
