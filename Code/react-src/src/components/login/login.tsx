import { FunctionComponent, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useStoreActions, useStoreState } from "../../stores/main.store";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const login = useStoreActions((actions) => actions.login);
  const isLoggedIn = useStoreState((state) => state.isLoggedIn);

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
        <div className="bg-yellow-200 p-5 flex items-center justify-center flex-col w-6/12 rounded-lg shadow-lg">
          <div className="w-full max-w-s">
            <div className="text-green-500 text-center italic font-bold">
              You are already logged in!
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="site-main">
      <div className="bg-yellow-200 p-5 flex items-center justify-center flex-col w-6/12 rounded-lg shadow-lg">
        <div className="w-full max-w-s">
          <form
            id="loginForm"
            onSubmit={(e) => {
              e.preventDefault();
              attemptLogin();
            }}
            noValidate
          >
            {errorMessage && !isLoading && (
              <div className="text-red-500 text-center italic font-bold">
                {errorMessage}
              </div>
            )}
            {isLoading && (
              <div className="flex justify-center">
                <div className="loading-spinner w-16 h-16"></div>
              </div>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-around">
                <button
                  className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                <Link
                  to="/register"
                  className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800 m-5"
                >
                  Don't have an account?{" "}
                  <span className="text-yellow-600 underline">Sign Up</span>
                </Link>
              </div>
              <Link
                to="/forgotpassword"
                className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
