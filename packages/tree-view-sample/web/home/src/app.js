"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var router_1 = require("@src/router");
var react_router_dom_1 = require("react-router-dom");
var menu_1 = require("./menu");
var Header_1 = require("@src/components/Header");
var store_1 = require("./store");
var react_redux_1 = require("react-redux");
var Login_1 = require("./pages/Login");
require("./app.less");
var App = function () {
    var token = (0, react_redux_1.useSelector)(function (state) {
        return state.userInfo.token;
    });
    if (token) {
        return (<react_router_dom_1.BrowserRouter>
        <Header_1.default />
        <div style={{ display: "flex" }}>
          <menu_1.default />
          <router_1.default></router_1.default>
        </div>
      </react_router_dom_1.BrowserRouter>);
    }
    return <Login_1.default></Login_1.default>;
};
var rootDom = document.getElementById("root");
var root = (0, client_1.createRoot)(rootDom);
root.render(<react_redux_1.Provider store={store_1.default}>
    <App />
  </react_redux_1.Provider>);
//# sourceMappingURL=app.js.map