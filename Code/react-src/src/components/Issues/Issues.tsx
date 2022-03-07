import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface Issues {}

const Issue: FunctionComponent<Issues> = () => {
  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Ethical Issue</h1>
        </div>
        <div className="dashboard-title-description">
          <p>
            Describe the dilemma you would like to analyze.
            Remember, ethical values are things that are important because they
            are right or wrong – lying, courage, loyalty, theft, etc.
          </p>
        </div>
      </div>

      <div className="px-4 pt-10 w-full justify-center border-none">
        <div className="ethical-issues-block">
          <label className="ethical-issues-block-title">
            Case Summary
            <p className="ethical-issues-block-description">
              Briefly describe the key features of the case — the who, what, where, when and why.
            </p>
            <textarea
              className="ethical-issues-block-text-input"
              placeholder="Describe the case summary..."
            ></textarea>
          </label>
        </div>
        <div className="ethical-issues-block">
          <label className="ethical-issues-block-title">
            Identify The Dilemmas
            <p className="ethical-issues-block-description">
              What are the ethical dilemmas you are facing? Describe the dilemmas in ethical terms, eg. honesty, 
              deception, loyalty, betrayal, beneficence, malfeasance, autonomy, paternalism, confidentiality, 
              transparency, integrity, etc.
            </p>
            <textarea
              className="ethical-issues-block-text-input"
              placeholder="Describe the dilemmas..."
            ></textarea>
          </label>
        </div>
        <div className="ethical-issues-block">
          <label className="ethical-issues-block-title">
            Choose Your Role
            <p className="ethical-issues-block-description">
              Put yourself in the position of a key decision maker in the case.
            </p>
            <textarea
              className="ethical-issues-block-text-input"
              placeholder="Your role..."
            ></textarea>
          </label>
        </div>
        <div className="ethical-issues-block">
          <label className="ethical-issues-block-title">
            Identify Your Options
            <p className="ethical-issues-block-description">
              Consider 2 or 3 options you will analyze.
            </p>
            <textarea
              rows={3}
              className="ethical-issues-block-text-input"
              placeholder="Option 1..."
            ></textarea>
            <textarea
              rows={3}
              className="ethical-issues-block-text-input"
              placeholder="Option 2..."
            ></textarea>
            <div className="text-center justify-center">
              <button className="bg-main hover:brightness-110 text-white text-lg font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Add Option
              </button>
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center m-6">
        <Link to="/dashboard">
          <button className="bg-primary hover:brightness-125 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Issue;
