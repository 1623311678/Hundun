export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "docs",
  previewTabs: {
    canvas: { hidden: true,},
  },
  options: {
    storySort: {
      order: [
        "Hundun",
        [
          "前端工程化",
          "脚手架",
          "部署",
          "流水线",
          "前后端通信",
          ["Ajax", ["介绍", "xhr", "Axios"], "Fetch", "WebSocket"],
          "监控",
          "八股文",
          "前端适配",
        ],
      ],
    },
  },
};
