import { FunctionComponent, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useStoreActions, useStoreState } from "../../stores/index.store"

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const register = useStoreActions((actions) => actions.accounts.register);
  const isLoggedIn = useStoreState((state) => state.accounts.isLoggedIn);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [classCode, setClassCode] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [wasSuccess, setWasSuccess] = useState(false);

  useEffect(() => {
    setErrorMessage("");
  }, []);

  const attemptRegister = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (
      !username ||
      !password ||
      !email ||
      !firstName ||
      !lastName ||
      !classCode
    ) {
      return;
    }

    setIsLoading(true);
    const data = await register({
      username: username,
      password: password,
      email: email,
      first_name: firstName,
      last_name: lastName,
      class_code: classCode,
    });
    setIsLoading(false);
    setErrorMessage(data.message);
    setWasSuccess(data.success);
  };

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
              attemptRegister();
            }}
            noValidate
          >
            {errorMessage &&
              !isLoading &&
              (wasSuccess ? (
                <div className="text-green-500 text-center italic font-bold">
                  {errorMessage}
                  <div className="flex items-center justify-around">
                    <Link to="/login">
                      <button
                        className="btn"
                        type="button"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-red-500 text-center italic font-bold">
                  {errorMessage}
                </div>
              ))}
            {isLoading && (
              <div className="flex justify-center">
                <div className="loading-spinner w-16 h-16"></div>
              </div>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="classCode"
              >
                Class Code
              </label>
              <input
                className={`form-input-general ${
                  !classCode && "border-red-700"
                }`}
                id="classcode"
                type="text"
                placeholder="ABCDE"
                value={classCode}
                maxLength={5}
                onChange={(e) => setClassCode(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className={`form-input-general ${
                  !username && "border-red-700"
                }`}
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`form-input-general ${!email && "border-red-700"}`}
                id="email"
                type="email"
                placeholder="email@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className={`form-input-general ${
                  !firstName && "border-red-700"
                }`}
                id="firstname"
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className={`form-input-general ${
                  !lastName && "border-red-700"
                }`}
                id="lastname"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                className={`form-input-general ${
                  !password && "border-red-700"
                }`}
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmpassword"
              >
                Confirm Password
              </label>
              <input
                className={`form-input-general ${
                  (confirmPassword !== password || !confirmPassword) &&
                  "border-red-700"
                }`}
                id="confirmpassword"
                type="password"
                placeholder="******************"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-around">
                <button
                  className="btn"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
