import React, { Fragment } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import Home from "@src/pages/pageA/Home"
import NotFound from "@src/pages/pageA/404"

const routes = [
  { path: "/", compoment: Home },
  { path: "/404", compoment: NotFound }
]
function AppRouter() {
  return (
    <Fragment>
      <Switch>
        {routes.map((item, index) => (
          <Route
            path={item.path}
            component={item.compoment}
            key={index}
            exact
          />
        ))}
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default AppRouter
