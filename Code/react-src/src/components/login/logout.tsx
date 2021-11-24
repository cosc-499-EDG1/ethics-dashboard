import { FunctionComponent, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useStoreActions, useStoreState } from "../../stores/index.store";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const logout = useStoreActions((actions) => actions.accounts.logout);

  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    logout(true);
    setTimeout(() => {
      setRedirect("/login");
    }, 5000);
  }, [logout]);

  if (redirect) {
    return <Redirect to={{ pathname: redirect, state: { from: "/login" } }} />;
  }

  return (
    <div className="site-main">
      <div className="bg-yellow-200 p-5 flex items-center justify-center flex-col w-6/12 rounded-lg shadow-lg">
        <div className="w-full max-w-s">
          You have been logged out. You will be redirected to the login page in
          5 seconds.
        </div>
      </div>
    </div>
  );
};

export default Home;
