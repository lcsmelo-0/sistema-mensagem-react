import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { generateRoute } from "../../helpers/RoutingHelper";
import Dashboard from "./Dashboard/Dashboard";
import MessageRegister from "./MessageRegister/MessageRegister";
import Header from "../common/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { routingRequestDone } from "../../actions/action-creators/routing";

const Main = ({ history }) => {
  const newRoute = useSelector(state => state.routing.pushTo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newRoute) {
      history.push(newRoute);
      dispatch(routingRequestDone());
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [newRoute, dispatch, history]);

  const routes = [
    generateRoute("/dashboard", true, () => <Dashboard />),
    generateRoute("/cadastrar-mensagem", true, () => <MessageRegister />)
  ];

  return (
    <>
      <Header />
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
