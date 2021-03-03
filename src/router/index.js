import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

import routes from "./config";
import GlobalStyles from "../globalStyles";

import Redirect from '../pages/Home/redirect'

const Router = () => {
  return (
    <Suspense fallback={null}>
      <GlobalStyles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
        <Route
          path='/admin'
          component={Redirect}
          loc="https://konsultasi-setc.herokuapp.com/admin/auth/login"
        />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
