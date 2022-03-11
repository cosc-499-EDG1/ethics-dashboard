import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import VirtueEthicsCharacterInput from "./virtueEthicsProps/virtueEthics-characterInputs";

interface VirtueEthicsProps {}

const VirtueEthicsCharacter: FunctionComponent<VirtueEthicsProps> = () => {
  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Virtue Ethics</h1>
        </div>
        <div className="dashboard-title-description">
          <p>
            Virtue ethics is a theory that focuses on the character of the
            decision maker. Building a virtuous character requires practicing
            the virtues until the moral agent knows the right thing to do in the
            right time in the right place in the right way. To begin, identify
            the relevant virtues and vices and indicate where each action falls
            on the virtue continuum.
          </p>
        </div>
      </div>

      <div className="dashboard-page md:flex">
        <div className="dashboard-block w-1/2 mr-2">
          <label className="dashboard-block-title">
            Virtue of character
            <p className="dashboard-block-description">
              Move slider to align with option prompt
            </p>
            <VirtueEthicsCharacterInput
              character={{
                id: 1,
                prompt: "I can put loyalty into the company...",
                excess: "Blind Devotion",
                mean: "Loyalty",
                deficiency: "Disloyalty",
              }}
            />
            <VirtueEthicsCharacterInput
              character={{
                id: 2,
                prompt: "I can betray the company, go to the press...",
                excess: "Over-sharing",
                mean: "Honesty",
                deficiency: "Dishonesty",
              }}
            />
            <VirtueEthicsCharacterInput
              character={{
                id: 3,
                prompt:
                  "I can stand up to my superiors, say no and organize...",
                excess: "Rashness",
                mean: "Courage",
                deficiency: "Cowardice",
              }}
            />
          </label>
        </div>

        <div className="dashboard-block-1 w-1/2 ml-2">
          <header className="dashboard-block-title mb-4">
            Options ranked by most virtuous
          </header>
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Option 3
              <p className="dashboard-block-description">Courage</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="2"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Option 2
              <p className="dashboard-block-description">Over-Sharing</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="8"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Option 1
              <p className="dashboard-block-description">Blind Devotion</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="9"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/virtueEthics-BallBalanced">
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back
            </button>
          </Link>
          <Link to="/virtueEthics-Stakeholders">
            <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VirtueEthicsCharacter;
