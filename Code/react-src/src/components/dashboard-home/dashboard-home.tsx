import React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface DashboardHomeProps {}

const DashboardHome: FunctionComponent<DashboardHomeProps> = () => {
  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Case Constants</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-5 mx-5 flex-auto my-5">
        <div className="h-auto w-screen/2 text-3xl dashboard-home-grid-item row-span-2">
          <div className="grid h-full content-between">
            <label className="font-bold m-2">Ethical Issue</label>
            <div className="text-lg flex justify-center">
              <Link
                to="/Issues"
                className="font-bold mb-2 w-64"
              >
                <p className="mx-2 my-2 py-2 rounded-md w-full bg-primary">View Page</p>
              </Link>
            </div>
            <div className="text-lg">
              <p className="mx-2 my-2 py-2 rounded-md bg-secondary">Option 1: The maximum is 26 characters</p>
              <p className="mx-2 my-2 py-2 rounded-md bg-secondary">Option 2: ##########################</p>
              <p className="mx-2 my-2 py-2 rounded-md bg-secondary">Option 3: Test</p>
            </div>
            <p className="mx-2 my-2 py-2 font-bold text-xl rounded-md bg-secondary">Progress: Complete</p>
          </div>
        </div>

        <div className="h-auto w-screen/2 text-3xl dashboard-home-grid-item row-span-2">
          <div className="grid h-full content-between">
            <label className="font-bold m-2">Stakeholders</label>
            <div className="text-lg flex justify-center">
              <Link
                to="/Stakeholders"
                className="font-bold mb-2 w-64"
              >
                <p className="mx-2 my-2 py-2 rounded-md w-full bg-primary">View Page</p>
              </Link>
            </div>
            <div className="text-lg max-h-40 overflow-y-auto">
              <p className="mx-2 my-2 py-2 rounded-md bg-secondary">Stakeholder 1: The maximum is 20 characters</p>
              <p className="mx-2 my-2 py-2 rounded-md bg-secondary">Stakeholder 2: ####################</p>
              <p className="mx-2 my-2 py-2 rounded-md bg-gray-200">Stakeholder 3: Incomplete</p>
              <p className="mx-2 my-2 py-2 rounded-md bg-gray-200">Stakeholder 4: Incomplete</p>
              <p className="mx-2 my-2 py-2 rounded-md bg-gray-200">Stakeholder 5: Incomplete</p>
              <p className="mx-2 my-2 py-2 rounded-md bg-gray-200">Stakeholder 6: Incomplete</p>
            </div>
            <p className="mx-2 my-2 py-2 font-bold text-xl rounded-md bg-gray-200">Progress: Incomplete</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mx-5 my-10 h-48">
        <div className="dashboard-home-grid-item">
          <div className="grid h-full content-between">
            <label className="text-3xl font-bold m-2">Utilitarianism</label>
            <div className="text-lg flex justify-center">
              <Link
                to="/utilitarianism-options"
                className="font-bold mb-2 w-40"
              >
                <p className="my-2 py-2 rounded-md w-full bg-primary">View Page</p>
              </Link>
            </div>
            <p className="mx-2 my-2 py-2 font-bold text-xl rounded-md bg-gray-200">Progress: Incomplete</p>
          </div>
        </div>
        <div className="dashboard-home-grid-item">
          <div className="grid h-full content-between">
            <label className="text-3xl font-bold m-2">Deontology</label>
            <div className="text-lg flex justify-center">
              <Link
                to="/deontology-options"
                className="font-bold mb-2 w-40"
              >
                <p className="my-2 py-2 rounded-md w-full bg-primary">View Page</p>
              </Link>
            </div>
            <p className="mx-2 my-2 py-2 font-bold text-xl rounded-md bg-gray-200">Progress: Incomplete</p>
          </div>
        </div>
        <div className="dashboard-home-grid-item">
          <div className="grid h-full content-between">
            <label className="text-3xl font-bold m-2">Virtue Ethics</label>
            <div className="text-lg flex justify-center">
              <Link
                to="/virtueEthics-Ball"
                className="font-bold mb-2 w-40"
              >
                <p className="my-2 py-2 rounded-md w-full bg-primary">View Page</p>
              </Link>
            </div>
            <p className="mx-2 my-2 py-2 font-bold text-xl rounded-md bg-gray-200">Progress: Incomplete</p>
          </div>
        </div>
        <div className="dashboard-home-grid-item">
          <div className="grid h-full content-between">
            <label className="text-3xl font-bold m-2">Care Ethics</label>
            <div className="text-lg flex justify-center">
              <Link
                to="/care-ethics"
                className="font-bold mb-2 w-40"
              >
                <p className="my-2 py-2 rounded-md w-full bg-primary">View Page</p>
              </Link>
            </div>
            <p className="mx-2 my-2 py-2 font-bold text-xl rounded-md bg-gray-200">Progress: Incomplete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
