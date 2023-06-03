import React, { FC, useEffect } from "react"
import { createRoot } from "react-dom/client"
import LayoutRouter from "@src/router"
import { BrowserRouter } from "react-router-dom"
import store from "./store"
import { Provider, useSelector } from "react-redux"
import "./app.less"
import VConsole from "vconsole"
const vConsole = new VConsole()
// 接下来即可照常使用 `console` 等方法
console.log("Hello world")
// 结束调试后，可移除掉
vConsole.destroy()

const App: FC = () => {
  // const token = useSelector((state: any) => {
  //   return state.userInfo.token
  // })
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <LayoutRouter></LayoutRouter>
      </div>
    </BrowserRouter>
  )
}
const rootDom = document.getElementById("root")
const root = createRoot(rootDom)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
