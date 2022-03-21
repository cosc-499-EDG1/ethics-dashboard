import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import IssuesOption from "./issues-option";

interface Issues {}

const Issue: FunctionComponent<Issues> = () => {
  const [numOptions, setNumOptions] = useState(2);
  var options = new Array(numOptions).fill(0);
  for (let i = 0; i < options.length; i++) {
    options[i] = i+1;
  }
  const changeNumOptions = async (increase: boolean) => {
    if (increase === true) {
      if (options.length < 3) {
        setNumOptions(options.length+1);
      }
    } else {
      if (options.length > 2) {
        setNumOptions(options.length-1);
      }
    }
  };

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

      <div className="dashboard-page">
        <div className="dashboard-block">
          <label className="dashboard-block-title">
            Case Summary
            <p className="dashboard-block-description">
              Briefly describe the key features of the case — the who, what, where, when and why.
            </p>
            <textarea
              className="dashboard-block-text-input"
              placeholder="Describe the case summary..."
            ></textarea>
          </label>
        </div>
        <div className="dashboard-block">
          <label className="dashboard-block-title">
            Identify The Dilemmas
            <p className="dashboard-block-description">
              What are the ethical dilemmas you are facing? Describe the dilemmas in ethical terms, eg. honesty, 
              deception, loyalty, betrayal, beneficence, malfeasance, autonomy, paternalism, confidentiality, 
              transparency, integrity, etc.
            </p>
            <textarea
              className="dashboard-block-text-input"
              placeholder="Describe the dilemmas..."
            ></textarea>
          </label>
        </div>
        <div className="dashboard-block">
          <label className="ethical-issues-block-title">
            Choose Your Role
            <p className="dashboard-block-description">
              Put yourself in the position of a key decision maker in the case.
            </p>
            <textarea
              className="dashboard-block-text-input"
              placeholder="Your role..."
            ></textarea>
          </label>
        </div>
        <div className="dashboard-block">
          <label className="dashboard-block-title">
            Identify Your Options
            <p className="dashboard-block-description">
              Consider 2 or 3 options you will analyze.
            </p>
            {options.map(optionNum => (
              <IssuesOption option={{id: optionNum, data: ""}} />
            ))}
            <div className="text-center justify-center">
              <button className="bg-main hover:brightness-110 text-white text-lg font-bold py-2 mx-2 w-40 rounded-md focus:outline-none focus:shadow-outline"
              onClick={(e) => changeNumOptions(true)}>
                Add Option
              </button>
              <button className="bg-main hover:brightness-110 text-white text-lg font-bold py-2 mx-2 w-40 rounded-md focus:outline-none focus:shadow-outline"
              onClick={(e) => changeNumOptions(false)}>
                Remove Option
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
