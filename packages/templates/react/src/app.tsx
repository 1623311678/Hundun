import React, { FC } from "react";
import { createRoot } from "react-dom/client";
import LayoutRouter from "@src/router";
import { BrowserRouter } from "react-router-dom";
import LayoutMenu from "./menu";
import "./app.less";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <LayoutMenu />
        <LayoutRouter></LayoutRouter>
      </div>
    </BrowserRouter>
  );
};
const rootDom = document.getElementById("root");
const root = createRoot(rootDom);

root.render(<App />);
