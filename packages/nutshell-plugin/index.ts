import type { StarlightPlugin } from "@astrojs/starlight/types";

import { starlightNutshellIntegration } from "./lib/integration";

export default function starlightHeadingBadgesPlugin(): StarlightPlugin {
  return {
    name: "starlight-heading-badges-plugin",
    hooks: {
      setup({ addIntegration}) {
        addIntegration(starlightNutshellIntegration());
      },
    },
  };
}
