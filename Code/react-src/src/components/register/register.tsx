import { FunctionComponent, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useStoreState } from "../../stores/index.store";
import { Button } from "../global/button";
import { Form } from "../global/form";
import AccountService from "../../services/account.service";
import { FormInput } from "../global/forminput";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const isLoggedIn = useStoreState((state) => state.accounts.isLoggedIn);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [classCode, setClassCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const register = useMutation(AccountService.register, {
    onSuccess: (data) => {
      setErrorMessage(data.data.message ?? "");
    }
  });

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

    register.mutate({
      username: username,
      password: password,
      email: email,
      first_name: firstName,
      last_name: lastName,
      class_code: classCode,
    });
  };

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
      key="classCode"
      label="Class Code"
      type="text"
      placeholder="ABCDE"
      value={classCode}
      maxLength={5}
      onChange={(e) => setClassCode(e.target.value)}
    />,
    <FormInput
      key="username"
      label="Username"
      type="text"
      placeholder="Username"
      value={username}
      maxLength={255}
      onChange={(e) => setUsername(e.target.value)}
    />,
    <FormInput
      key="email"
      label="Email"
      type="email"
      placeholder="email@email.com"
      value={email}
      maxLength={255}
      onChange={(e) => setEmail(e.target.value)}
    />,
    <FormInput
      key="firstName"
      label="First Name"
      type="text"
      placeholder="First Name"
      value={firstName}
      maxLength={255}
      onChange={(e) => setFirstName(e.target.value)}
    />,
    <FormInput
      key="lastName"
      label="Last Name"
      type="text"
      placeholder="Last Name"
      value={lastName}
      maxLength={255}
      onChange={(e) => setLastName(e.target.value)}
    />,
    <FormInput
      key="password"
      label="Password"
      type="password"
      placeholder="******************"
      value={password}
      maxLength={255}
      onChange={(e) => setPassword(e.target.value)}
    />,
    <FormInput
      key="confirmPassword"
      label="Confirm Password"
      type="password"
      placeholder="******************"
      value={confirmPassword}
      maxLength={255}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />,
  ];

  const formActions = [<Button text={"Register"} formSubmit={true} />];

  return (
    <div className="site-main">
      <div className="bg-secondary p-5 flex items-center justify-center flex-col w-6/12 rounded-lg shadow-lg">
        <div className="w-full max-w-s">
          <Form
            inputs={formInputs}
            actions={formActions}
            onSubmit={attemptRegister}
            message={errorMessage}
            wasSuccess={!!register.data?.data.success}
            isLoading={register.isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
