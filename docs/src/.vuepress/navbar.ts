import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指南",
    icon: "lightbulb",
    link: "/guide/"
  },
  {
    text: "脚本",
    icon: "book",
    link: "/list/"
  },
  "/about/",
]);
