import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const projectRoot = process.cwd();
const nextDir = join(projectRoot, ".next");
const standaloneDir = join(nextDir, "standalone");

function replaceDir(source, target) {
  if (!existsSync(source)) {
    return;
  }

  rmSync(target, { recursive: true, force: true });
  cpSync(source, target, { recursive: true });
}

if (!existsSync(standaloneDir)) {
  throw new Error("Standalone build output was not found. Run next build first.");
}

mkdirSync(join(standaloneDir, ".next"), { recursive: true });

replaceDir(join(projectRoot, "public"), join(standaloneDir, "public"));
replaceDir(join(nextDir, "static"), join(standaloneDir, ".next", "static"));
