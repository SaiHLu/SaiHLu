import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: "https://sai-hlaing.github.io",
	base: "sai-hlaing",
})