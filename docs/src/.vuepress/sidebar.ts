import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "/guide/",
    {
      text: "脚本",
      prefix: "/list/",
      icon: "book",
      children: [
        "/list/",
        "B站搜索页美化",
        "虎扑网页端优化",
      ],
    },
  ],
});
