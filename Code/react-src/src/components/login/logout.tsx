import { FunctionComponent, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useStoreActions, useStoreState } from "../../stores/index.store";

interface LogoutProps {}

const Logout: FunctionComponent<LogoutProps> = () => {
  const logout = useStoreActions((actions) => actions.accounts.logout);
  const setCurrentDashboard = useStoreActions((actions) => actions.dashboard.setDashboardId);

  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    logout(true);
    setCurrentDashboard(0);
    setTimeout(() => {
      setRedirect("/login");
    }, 5000);
  }, [logout, setCurrentDashboard]);

  if (redirect) {
    return <Redirect to={{ pathname: redirect, state: { from: "/login" } }} />;
  }

  return (
    <div className="site-main">
      <div className="bg-secondary p-5 flex items-center justify-center flex-col w-6/12 rounded-lg shadow-lg">
        <div className="w-full max-w-s">
          You have been logged out. You will be redirected to the login page in
          5 seconds.
        </div>
      </div>
    </div>
  );
};

export default Logout;
