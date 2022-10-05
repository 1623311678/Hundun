import React,{Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "@src/pages/Home";
import About from "@src/pages/About";
import Users from "@src/pages/Users";
import Users1 from "@src/pages/Users1";
import Users2 from "@src/pages/Users2";

const routes = [
  { path: "/", compoment: Home },
  { path: "/about", compoment: About },
  { path: "/users", compoment: Users },
  { path: "/users/app1", compoment: Users1 },
  { path: "/users/app2", compoment: Users2},
];
function AppRouter() {
  return (
    <Fragment>
      {routes.map((item, index) => (
        <Route path={item.path} component={item.compoment} key={index} exact />
      ))}
    </Fragment>
  );
}

export default AppRouter;
