import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  describeLocalInstancePaths,
  expandHomePrefix,
  resolve100X PMHomeDir,
  resolve100X PMInstanceId,
} from "../config/home.js";

const ORIGINAL_ENV = { ...process.env };

describe("home path resolution", () => {
  afterEach(() => {
    process.env = { ...ORIGINAL_ENV };
  });

  it("defaults to ~/.100x-pm and default instance", () => {
    delete process.env.PAPERCLIP_HOME;
    delete process.env.PAPERCLIP_INSTANCE_ID;

    const paths = describeLocalInstancePaths();
    expect(paths.homeDir).toBe(path.resolve(os.homedir(), ".100x-pm"));
    expect(paths.instanceId).toBe("default");
    expect(paths.configPath).toBe(path.resolve(os.homedir(), ".100x-pm", "instances", "default", "config.json"));
  });

  it("supports PAPERCLIP_HOME and explicit instance ids", () => {
    process.env.PAPERCLIP_HOME = "~/100x-pm-home";

    const home = resolve100X PMHomeDir();
    expect(home).toBe(path.resolve(os.homedir(), "100x-pm-home"));
    expect(resolve100X PMInstanceId("dev_1")).toBe("dev_1");
  });

  it("rejects invalid instance ids", () => {
    expect(() => resolve100X PMInstanceId("bad/id")).toThrow(/Invalid instance id/);
  });

  it("expands ~ prefixes", () => {
    expect(expandHomePrefix("~")).toBe(os.homedir());
    expect(expandHomePrefix("~/x/y")).toBe(path.resolve(os.homedir(), "x/y"));
  });
});
