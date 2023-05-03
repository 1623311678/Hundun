/* eslint-disable @typescript-eslint/no-empty-function */
import * as vscode from 'vscode';

// 引入 TreeViewProvider 的类
import { TreeViewProvider } from './TreeViewProvider';

// 导入 WebView.ts 下的 createWebView 方法
import { createWebView } from './WebView';

export function activate(context: vscode.ExtensionContext) {
	// 实现树视图的初始化
	TreeViewProvider.initTreeViewItem();
	// 还记得我们在 TreeViewProvider.ts 文件下 TreeItemNode 下创建的 command 吗？
	// 创建了 command 就需要注册才能使用
	// label 就是 TreeItemNode->command 里 arguments 传递过来的
	vscode.window.showInformationMessage('小帮手已激活～');
	context.subscriptions.push(
		vscode.commands.registerCommand('itemClick', (label) => {
			vscode.window.showInformationMessage(label);
			// 将 context, vscode.ViewColumn.Active, label 传递进去
			// vscode.ViewColumn.Active: 表示当前选中的面板
			const webView = createWebView(context, vscode.ViewColumn.Active, label);
			context.subscriptions.push(webView);
		})
	);
}
export function deactivate() {}
