import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { generateRoute } from "../../helpers/RoutingHelper";
import Dashboard from "./Dashboard/Dashboard";
import MessageRegister from "./MessageRegister/MessageRegister";

const Main = () => {
  const routes = [
    generateRoute("/dashboard", true, () => <Dashboard />),
    generateRoute("/cadastrar-mensagem", true, () => <MessageRegister />)
  ];

  return (
    <>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </>
  );
};

export default withRouter(Main);
