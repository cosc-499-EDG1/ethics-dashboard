import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import DeontologyOptionsInput from "./deontology-options-input";

interface DeontologyOptionsProps {}

const DeontologyOptions: FunctionComponent<DeontologyOptionsProps> = () => {
  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Deontology</h1>
        </div>
        <div className="dashboard-title-description">
          <p>
            A deontological approach to ethical decision making begins with
            reasoning our way to understanding the moral law that should govern
            the decision. Kant called these moral laws categorical (universal,
            timeless) imperatives (must do’s that are not optional). To begin,
            consider the reasons supporting each option.
          </p>
        </div>
      </div>
      <div className="pt-30">
        <p></p>
      </div>
      <div className="dashboard-page md:flex">
        <div className="dashboard-block w-2/3 mr-2 min-w-512px justify-center overflow-x-auto">
          <div className="md:flex">
            <DeontologyOptionsInput
              option={{
                id: 1,
                desc: "I can put loyalty to the company...",
                yourInterests: false,
                someonesInterests: false,
                lookGood: false,
                longRun: false,
                everybodyWins: false,
                revenge: false,
                other: false,
                rightThing: false,
              }}
            />
            <DeontologyOptionsInput
              option={{
                id: 2,
                desc: "I can betray the company, go to the...",
                yourInterests: false,
                someonesInterests: false,
                lookGood: false,
                longRun: false,
                everybodyWins: false,
                revenge: false,
                other: false,
                rightThing: false,
              }}
            />
            <DeontologyOptionsInput
              option={{
                id: 3,
                desc: "I can betray the company, go to the...",
                yourInterests: false,
                someonesInterests: false,
                lookGood: false,
                longRun: false,
                everybodyWins: false,
                revenge: false,
                other: false,
                rightThing: false,
              }}
            />
          </div>
        </div>
        <div className="dashboard-block-1 w-1/3 ml-2">
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Option 1
              <p className="dashboard-block-description">
                This reasoning is consistent with [HYPOTHETICAL/CATEGORICAL]
                reasoning and therefore [CANNOT/MAY] support a moral action.
              </p>
            </label>
          </div>
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Option 2
              <p className="dashboard-block-description">
                This reasoning is consistent with [HYPOTHETICAL/CATEGORICAL]
                reasoning and therefore [CANNOT/MAY] support a moral action.
              </p>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-6">
        <Link to="/deontology-hypothetical">
          <button className="bg-primary hover:brightness-125 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeontologyOptions;
