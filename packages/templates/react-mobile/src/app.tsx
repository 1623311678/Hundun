import React, { FC, useEffect } from "react"
import { createRoot } from "react-dom/client"
import LayoutRouter from "@src/router"
import { HashRouter } from "react-router-dom"
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
  // 获取屏幕宽度
  useEffect(() => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    // 将屏幕宽度传递给 Less 变量
    document.documentElement.style.setProperty(
      "--screen-width",
      `${screenWidth}`
    )
  }, [])

  return (
    <HashRouter>
      <div style={{ display: "flex" }}>
        <LayoutRouter></LayoutRouter>
      </div>
    </HashRouter>
  )
}
const rootDom = document.getElementById("root")
const root = createRoot(rootDom)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
