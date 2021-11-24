import { Redirect, Route, RouteProps } from "react-router";
import { useStoreState } from "../../stores/index.store";

export default function ProtectedRoute({ ...routeProps }: RouteProps) {
  const isLoggedIn = useStoreState((state) => state.accounts.isLoggedIn);
  if (isLoggedIn) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: "/Login" }} />;
  }
}
