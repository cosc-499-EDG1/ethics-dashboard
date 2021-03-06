import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface DeontologyHypotheticalProps {}

const DeontologyHypothetical: FunctionComponent<
  DeontologyHypotheticalProps
> = () => {
  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Deontology</h1>
        </div>
        <div className="dashboard-title-description">
          <p>HYPOTHETICAL IMPERATIVES</p>
          <p>A hypothetical imperative is a command in a conditional form</p>
          <p> • E.g. If you want to do well on the midterm you must study!</p>
          <p>
            You study because you have a goal or a desire – to do well on the
            midterm. Hypothetical imperatives are commands that tell us what we
            should do, but they do not express moral laws.
          </p>
        </div>
      </div>
      <div className="pt-30">
        <p></p>
      </div>
      <div className="dashboard-page md:flex">
        <div className="dashboard-block w-2/3 mr-2">
          <div className="dashboard-block-1">
            <label className="dashboard-block-title">
              You selected the following reasons to support OPTION 1:
            </label>
            <div className="dashboard-block-title mt-4">
              <input type="checkbox" value="your-interests" disabled></input>
              <label className="mx-4 text-2xl font-bold">
                Serves your interests
              </label>
              <br></br>
              <input type="checkbox" value="someones-interests" disabled></input>
              <label className="mx-4 text-2xl font-bold">
                Serves the interests of someone else you want to impress
              </label>
              <br></br>
              <input type="checkbox" value="look-good" disabled></input>
              <label className="mx-4 text-2xl font-bold">It will look good</label>
              <br></br>
              <input type="checkbox" value="long-run" disabled></input>
              <label className="mx-4 text-2xl font-bold">
                It will pay off in the long run
              </label>
              <br></br>
              <input type="checkbox" value="everybody-wins" disabled></input>
              <label className="mx-4 text-2xl font-bold">Everybody wins</label>
              <br></br>
              <input type="checkbox" value="revenge" disabled></input>
              <label className="mx-4 text-2xl font-bold">Revenge</label>
              <br></br>
              <input type="checkbox" value="other" disabled></input>
              <label className="mx-4 text-2xl font-bold">Other</label>
              <input type="text" disabled></input>
              <br></br>
              <input type="checkbox" value="right-thing" disabled></input>
              <label className="mx-4 text-2xl font-bold">
                It's the right thing to do
              </label>
              <br></br>
            </div>
          </div>
          <div className="dashboard-block-1">
            <label className="dashboard-block-title">
              These motivations are consistent with HYPOTHETICAL reasoning and
              therefore CANNOT be a universal law of moral action.
            </label>
          </div>
        </div>
        <div className="dashboard-block-1 w-1/3 ml-2">
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Option 1
              <p className="dashboard-block-description">
                This reasoning is consistent with HYPOTHETICAL
                reasoning and therefore CANNOT support a moral action.
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
        <div className="grid grid-cols-2 gap-4">
          <Link to="/deontology-options">
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back
            </button>
          </Link>
          <Link to="/deontology-categorical">
            <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeontologyHypothetical;
