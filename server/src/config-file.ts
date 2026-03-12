import fs from "node:fs";
import { 100x-pmConfigSchema, type 100X PMConfig } from "@100x-pmai/shared";
import { resolve100X PMConfigPath } from "./paths.js";

export function readConfigFile(): 100X PMConfig | null {
  const configPath = resolve100X PMConfigPath();

  if (!fs.existsSync(configPath)) return null;

  try {
    const raw = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    return 100x-pmConfigSchema.parse(raw);
  } catch {
    return null;
  }
}
