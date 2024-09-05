import type { AstroIntegration } from "astro";
import { fileURLToPath } from "url";
import path from "path";
import { promises as fs } from "fs";

// Convert `import.meta.url` to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function starlightNutshellIntegration(): AstroIntegration {
  return {
    name: "starlight-nutshell-integration",
    hooks: {
      "astro:config:setup": async ({ injectScript, logger }) => {
        try {
          const scriptPath = path.resolve(__dirname, "./nutshell.js");

          const scriptContent = await fs.readFile(scriptPath, "utf-8");

          injectScript("page", scriptContent);

          logger.info(
            `Successfully injected contents of nutshell.js into the page.`
          );
        } catch (error: any) {
          logger.error(`Failed to inject nutshell.js: ${error.message}`);
        }
      },
    },
  };
}
