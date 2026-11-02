import { setResponseHeader } from "@tanstack/react-start/server";

import { buildContentSecurityPolicy } from "./lib/security-headers";

export function createCspNonce(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  const nonce = btoa(String.fromCharCode(...bytes));
  setResponseHeader("Content-Security-Policy", buildContentSecurityPolicy(nonce));
  return nonce;
}
