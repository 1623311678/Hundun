"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("@src/pages/Home");
var About_1 = require("@src/pages/About");
var Users_1 = require("@src/pages/Users");
var Users1_1 = require("@src/pages/Users1");
var Users2_1 = require("@src/pages/Users2");
var _404_1 = require("@src/pages/404");
var routes = [
    { path: "/", compoment: Home_1.default },
    { path: "/404", compoment: _404_1.default },
    { path: "/about", compoment: About_1.default },
    { path: "/users", compoment: Users_1.default },
    { path: "/users/app1", compoment: Users1_1.default },
    { path: "/users/app2", compoment: Users2_1.default }
];
function AppRouter() {
    return (<react_1.Fragment>
      <react_router_dom_1.Switch>
        {routes.map(function (item, index) { return (<react_router_dom_1.Route path={item.path} component={item.compoment} key={index} exact/>); })}
        <react_router_dom_1.Route path="*">
          <react_router_dom_1.Redirect to="/404"/>
        </react_router_dom_1.Route>
      </react_router_dom_1.Switch>
    </react_1.Fragment>);
}
exports.default = AppRouter;
//# sourceMappingURL=index.js.map