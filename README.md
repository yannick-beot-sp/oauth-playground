# OAuth Playground

A small local tool for trying the OAuth 2.0 **Authorization Code** flow (optionally with **PKCE**) against any authorization server.

It lets you:

- save named configurations (endpoints, client, redirect URI, scopes, extra authorization parameters);
- walk through the steps: authorization redirect → exchange the code for tokens → call an API with `Authorization: Bearer`;
- inspect requests and responses (authorization, callback, token, API) in the trace panel.

Configurations and the session stay in the browser’s **localStorage**. Token and API calls go through a **local HTTP proxy** (`POST /proxy/forward`) to avoid CORS; the client secret therefore passes through this server.

This playground is meant for lab / debugging use on your machine, not for a public deployment.

## Prerequisites

- [Node.js](https://nodejs.org/) (no npm dependencies to install)

## Getting started

From the repository root:

```bash
npm start
```

Equivalent: `node server.mjs`.

The server listens on **http://127.0.0.1:5173/** (default port `5173`, overridable with `PORT`).

Open that URL in the browser. The default redirect URI is `http://localhost:5173/`: register it with your authorization server, and open the playground on the same origin as that URI (otherwise local storage would be isolated when the callback returns).

## Quick start

1. **Settings** tab: fill in Authorization URL, Token URL, client ID / secret, redirect URI, scopes, PKCE, and client authentication (body or HTTP Basic), then save.
2. **Play** tab: start authentication, exchange the code, optionally refresh the access token, then call an API endpoint.
3. Use the **Requests / responses** panel to inspect each step.
