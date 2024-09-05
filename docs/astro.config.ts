import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import nutshellPlugin from "nutshell-plugin";

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl:
          "https://github.com/jojokcreator/nutshell-plugin/edit/main/docs/",
      },
      plugins: [nutshellPlugin()],
      sidebar: [
        {
          label: "Start Here",
          items: [{ slug: "getting-started" }],
        },
      ],
      social: {
        github: "https://github.com/jojokcreator/nutshell-plugin",
      },
      title: "nutshell-plugin",
    }),
  ],
});
