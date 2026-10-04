#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { homedir } from "node:os";

const authPath = resolve(
  homedir(),
  ".cursor/projects/Users-shubhamkhakha-Developer-sleek-portfolio/mcp-auth.json"
);
const auth = JSON.parse(readFileSync(authPath, "utf8"));
const token = auth.figma.tokens.access_token;

const MCP_URL = "https://mcp.figma.com/mcp";

let sessionId = null;

async function rpc(method, params, id = Date.now()) {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json, text/event-stream",
  };
  if (sessionId) headers["mcp-session-id"] = sessionId;

  const res = await fetch(MCP_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ jsonrpc: "2.0", id, method, params }),
  });

  const sid = res.headers.get("mcp-session-id");
  if (sid) sessionId = sid;

  const ctype = res.headers.get("content-type") || "";
  const text = await res.text();

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${ctype}\n${text.slice(0, 4000)}`);
  }

  if (ctype.includes("text/event-stream")) {
    let last = null;
    for (const block of text.split("\n\n")) {
      const dataLine = block
        .split("\n")
        .find((l) => l.startsWith("data:"));
      if (!dataLine) continue;
      const payload = dataLine.slice(5).trim();
      if (payload && payload !== "[DONE]") {
        last = JSON.parse(payload);
      }
    }
    return last;
  }

  return JSON.parse(text);
}

async function callTool(name, args) {
  const result = await rpc("tools/call", { name, arguments: args });
  return result;
}

const [, , cmd, ...rest] = process.argv;

await rpc("initialize", {
  protocolVersion: "2025-03-26",
  capabilities: {},
  clientInfo: { name: "sleek-portfolio-figma", version: "1.0.0" },
});

try {
  await rpc("notifications/initialized", {});
} catch {
  // some servers don't ack this
}

if (cmd === "schema") {
  const out = await rpc("tools/list", {});
  const tools = out?.result?.tools || out?.tools || [];
  const name = rest[0];
  const picked = name ? tools.filter((t) => t.name === name) : tools.map((t) => ({ name: t.name, inputSchema: t.inputSchema }));
  process.stdout.write(JSON.stringify(picked, null, 2) + "\n");
} else if (cmd === "whoami") {
  const out = await callTool("whoami", {});
  process.stdout.write(JSON.stringify(out, null, 2) + "\n");
} else if (cmd === "create") {
  const [fileName, planKey, editorType = "design"] = rest;
  const out = await callTool("create_new_file", {
    fileName,
    planKey,
    editorType,
  });
  process.stdout.write(JSON.stringify(out, null, 2) + "\n");
} else if (cmd === "use") {
  const [fileKey, description, skillNames] = rest;
  const code = readFileSync(0, "utf8");
  const out = await callTool("use_figma", {
    fileKey,
    code,
    description,
    skillNames: skillNames || "figma-use,figma-generate-design",
  });
  process.stdout.write(JSON.stringify(out, null, 2) + "\n");
} else if (cmd === "tool") {
  const [name] = rest;
  const args = JSON.parse(readFileSync(0, "utf8") || "{}");
  const out = await callTool(name, args);
  process.stdout.write(JSON.stringify(out, null, 2) + "\n");
} else {
  process.stderr.write("usage: figma-mcp.mjs whoami | create <name> <planKey> | use <fileKey> <desc> | tool <name>\n");
  process.exit(1);
}
