import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Trrrrw/UserScript",
  description: "Trrrrw/UserScript",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
