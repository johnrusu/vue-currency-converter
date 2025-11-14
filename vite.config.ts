import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from "vite-plugin-html";

// App metadata configuration
const appMetadata = {
  title: "Currency Converter - Vue.js 3 & TypeScript",
  author: "Rusu Ionut",
  description:
    "A simple and fast currency converter application built with Vue.js 3 and TypeScript. Convert currencies with ease and get real-time exchange rates.",
  keywords:
    "currency converter, vue, typescript, ionut rusu, exchange rates, finance, money, conversion",
};

// https://vite.dev/config/
export default defineConfig({
  base: "/vue-currency-converter/",
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          ...appMetadata,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
