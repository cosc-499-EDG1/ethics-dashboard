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

      <div className="grid grid-cols-3 grid-rows-2 gap-5 mx-5 flex-auto my-5">
        <Link
          to="/Issues"
          className="h-auto w-screen/3 text-3xl dashboard-home-grid-item row-span-2"
        >
          <label className="font-bold m-3">Ethical Issue</label>
        </Link>

        <Link
          to="/Stakeholders"
          className="h-auto w-screen/3 text-3xl dashboard-home-grid-item row-span-2"
        >
          <label className="font-bold m-3">Stakeholders</label>
        </Link>
        <div className="h-auto w-screen/3 dashboard-home-grid-item"></div>
        <Link
          to="/Dilemnas"
          className="h-auto w-screen/3 text-3xl dashboard-home-grid-item cursor-not-allowed"
        >
          <label className="text-3xl font-bold m-3">Dilemnas</label>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-5 mx-5 my-10 h-48">
        <Link to="/utilitarianism-options" className="dashboard-home-grid-item cursor-not-allowed">
          <label className="text-3xl font-bold m-3">Utilitarianism</label>
        </Link>
        <Link to="/deontology-options" className="dashboard-home-grid-item">
          <label className="text-3xl font-bold m-3">Deontology</label>
        </Link>
        <Link to="/virtueEthics-Ball" className="dashboard-home-grid-item">
          <label className="text-3xl font-bold m-2">Virtue Ethics</label>
        </Link>
        <Link to="/care-ethics" className="dashboard-home-grid-item">
          <label className="text-3xl font-bold m-2">Care Ethics</label>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
