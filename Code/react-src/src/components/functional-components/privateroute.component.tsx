import { Component, FunctionComponent } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  authed: boolean;
  component: FunctionComponent;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  component,
  authed,
  ...rest
}) => {
  console.log(authed);
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(!authed);
        if (!authed) {
          console.log("Redirect");
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
