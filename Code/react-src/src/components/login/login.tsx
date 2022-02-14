import { FunctionComponent, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useStoreActions, useStoreState } from "../../stores/index.store";
import { Button } from "../global/button";
import { Form } from "../global/form";
import { FormInput } from "../global/forminput";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const login = useStoreActions((actions) => actions.accounts.login);
  const isLoggedIn = useStoreState((state) => state.accounts.isLoggedIn);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrorMessage("");
  }, []);

  const attemptLogin = async () => {
    setIsLoading(true);
    const data = await login({ username: username, password: password });
    setIsLoading(false);
    setErrorMessage(data.message);
    if (data.token) {
      setRedirect("/");
      return;
    }
  };

  if (redirect) {
    return <Redirect to={{ pathname: redirect, state: { from: "/login" } }} />;
  }

  if (isLoggedIn) {
    return (
      <div className="site-main">
        <div className="bg-secondary p-5 flex items-center justify-center flex-col w-6/12 rounded-lg shadow-lg">
          <div className="w-full max-w-s">
            <div className="text-green-500 text-center italic font-bold">
              You are already logged in!
            </div>
          </div>
        </div>
      </div>
    );
  }

  const formInputs = [
    <FormInput
      key="username"
      label="Username"
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />,
    <FormInput
      key="password"
      label="Password"
      type="password"
      placeholder="******************"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />,
  ];

  const formActions = [
    <div className="flex items-center justify-around">
      <Button text={"Sign In"} formSubmit={true} />
      <Link
        to="/register"
        className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800 m-5"
      >
        Don't have an account?{" "}
        <span className="text-primary underline">Sign Up</span>
      </Link>
    </div>,
    <Link
      to="/forgotpassword"
      className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800"
    >
      Forgot Password?
    </Link>,
  ];

  return (
    <div className="site-main">
      <div className="bg-secondary p-5 flex items-center justify-center flex-col w-6/12 rounded-lg shadow-lg">
        <div className="w-full max-w-s">
          <Form
            inputs={formInputs}
            actions={formActions}
            isLoading={isLoading}
            wasSuccess={false}
            onSubmit={attemptLogin}
            message={errorMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
