import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface Issues {}

const Issue: FunctionComponent<Issues> = () => {
  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Ethical Issues</h1>
        </div>
        <div className="dashboard-title-description">
          <p>
            Describe the ethical issue or dilemma you would like to analyze.
            Remember, ethical values are things that are important because they
            are right or wrong – lying, courage, loyalty, theft, etc.
          </p>
        </div>
      </div>

      <div className="user-entry">
        <label className="text-3xl font-bold">
          Ethical Issue
          <textarea
            className="w-full border-none my-2"
            placeholder="Describe ethical issue..."
          ></textarea>
          <textarea
            rows={5}
            className="w-full border-none"
            placeholder="Option 1..."
          ></textarea>
          <textarea
            rows={5}
            className="w-full border-none"
            placeholder="Option 2..."
          ></textarea>
        </label>

        <label className="text-3xl font-bold"></label>
      </div>
      <div className="flex justify-center items-center m-6">
        <Link to="/dashboard">
          <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Issue;
