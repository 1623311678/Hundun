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
    canvas: { hidden: true },
  },
  options: {
    storySort: {
      order: [
        "Hundun",
        [
          "混沌建站-前端工程化",
          'AI',
          "脚手架",
          "标准化模版", 
          ["介绍","移动端",["介绍","react-antd-mobile"],"PC端"],
          "react-native",
          ["原生","expo",  ["介绍",'webView','相机','动态化更新'],"taro"],
          'uniapp',
          '鸿蒙',
          'flutter',
          '性能优化',
          "部署",
          "流水线",
          "前后端通信",
          ["Ajax", ["介绍", "xhr", "Axios"], "Fetch", "WebSocket"],
          "监控",
          "八股文",
          "前端适配",
          "服务端渲染",
          ["服务端",['介绍','nodejs']],
          ["前端演进趋势",['2023前端技术演进趋势','2024前端技术演进趋势']]
        ],
      ],
    },
  },
};
