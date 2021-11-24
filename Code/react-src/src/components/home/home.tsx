import React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div className="site-main">
      <div className="bg-yellow-200 p-5 flex items-center justify-center flex-col w-6/12 rounded-lg shadow-lg">
        <div className="w-full max-w-s">
          <h1 className="text-3xl font-bold text-center">
            Welcome to the Ethics Dashboard!
          </h1>
          <p className="text-xl text-center">
            The Ethics Dashboard is a tool for students to create and manage
            ethical case studies.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="bg-white w-1/3 m-5 p-5 rounded-lg shadow-lg flex flex-col text-center">
            <h1 className="text-2xl font-bold">Existing Account</h1>
            <p className="text-xl">
              Login to view your existing case studies and dashboards. Progress will be saved automatically.
            </p>
            <Link to="/login" className="btn m-2">
              Login
            </Link>
          </div>
          <div className="bg-white w-1/3 m-5 p-5 rounded-lg shadow-lg flex flex-col text-center">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-xl">
              A class code is required to create an account. Please obtain one
              from your instructor.
            </p>
            <Link to="/register" className="btn m-2">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
