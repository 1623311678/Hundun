import React, { FC, useEffect } from "react"
import { createRoot } from "react-dom/client"
import LayoutRouter from "@src/router"
import { BrowserRouter } from "react-router-dom"
import store from "./store"
import { Provider, useSelector } from "react-redux"
import "./app.less"
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
