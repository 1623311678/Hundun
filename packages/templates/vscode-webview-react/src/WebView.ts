import {
  ExtensionContext,
  ViewColumn,
  WebviewPanel,
  window,
  commands,
  Uri,
} from "vscode";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// 创建一个全局变量，类型为：WebviewPanel 或者 undefined
let webviewPanel: WebviewPanel | undefined;

// 创建一个可导出的方法,并且带上参数
export function createWebView(
  context: ExtensionContext, // 上面的代码刚介绍过，可忽略
  viewColumn: ViewColumn, // 窗口编辑器
  label: string // 传递进来的一个 label 值，就是点击树视图项 showInformationMessage 的值
) {
  if (webviewPanel === undefined) {
    // 上面重点讲解了 createWebviewPanel 传递4个参数
    webviewPanel = window.createWebviewPanel(
      "webView", // 标识，随意命名
      label, // 面板标题
      viewColumn, // 展示在哪个面板上
      {
        retainContextWhenHidden: true, // 控制是否保持webview面板的内容（iframe），即使面板不再可见。
        enableScripts: true, // 下面的 html 页可以使用 Scripts
      }
    );

    // 面板嵌入 html getIframeHtml() 方法在下面
    const filePath = Uri.file(
      path.join(context.extensionPath, "./dist", "home/main.js")
    );
    const cssFilePath = Uri.file(
      path.join(context.extensionPath, "./dist", "home/main.css")
    );
    const jsUri = webviewPanel.webview.asWebviewUri(filePath).toString();
    const cssUri = webviewPanel.webview.asWebviewUri(cssFilePath).toString();
    webviewPanel.webview.html = getIframeHtml(label,jsUri,cssUri);
  } else {
    // 如果面板已经存在，重新设置标题
    webviewPanel.title = label;
    webviewPanel.reveal(); // Webview面板一次只能显示在一列中。如果它已经显示，则此方法将其移动到新列。
  }

  // onDidDispose: 如果关闭该面板，将 webviewPanel 置 undefined
  webviewPanel.onDidDispose(() => {
    webviewPanel = undefined;
  });

  return webviewPanel;
}

// 这个方法没什么了，就是一个 最简单的嵌入 iframe 的 html 页面
export function getIframeHtml(label: string,jsUri:string,cssUri:string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
            html,
            body {
                margin: 0 !important;
                padding: 0 !important;
                width: 100%;
                height: 100%;
            }
        </style>
		<link href="${cssUri}" rel="stylesheet"></link>
        </head>
        <body>
		<div id="root"></div>
		<script type="text/javascript" src="${jsUri}">
		</script>
        </body>
    </html>
    `;
}
