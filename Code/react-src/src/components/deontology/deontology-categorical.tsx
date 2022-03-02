import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface DeontologyCategoricalProps {}

const DeontologyCategorical: FunctionComponent<
  DeontologyCategoricalProps
> = () => {
  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Deontology</h1>
        </div>
        <div className="dashboard-title-description">
          <p>CATEGORIACAL IMPERATIVES</p>
          <p>
            The fundamental principle of our moral duties is a categorical
            imperative.
          </p>
          <p>
            {" "}
            • It is an imperative because it is a command addressed to agents
            who could follow it but might not
          </p>
          <p>
            {" "}
            • It is categorical in virtue of applying to us unconditionally – in
            all times and all places
          </p>
          <p>
            Unlike hypothetical imperatives, categorical imperatives are not
            relative to a desire or goal
          </p>
        </div>
      </div>
      <div className="md:flex">
        <div className="dashboard-hypotheticalblock">
          <div className="dashboard-options">
            <label className="text-3xl font-bold">
              You selected the following reasons to support OPTION 1:
            </label>
          </div>
          <div className="dashboard-motivation">
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
          <div className="dashboard-hypothetical">
            <label className="text-3xl font-bold">
              This motivation is consistent with categorical reasoning and
              therefore may support a universal law of moral action; however,
              the law must be defined, universal and consistent.
            </label>
          </div>
        </div>
        <div className="dashboard-aggregate">
          <div className="bg-gray-300 p-6 my-6 rounded shadow-lg">
            <label className="text-3xl font-bold">
              Option 1
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3 text-lg text-black">
                  This reasoning is consistent with categorical reasoning and
                  therefore may support a moral action.
                </p>
              </div>
            </label>
          </div>
          <div className="bg-gray-300 p-6 my-6 rounded shadow-lg">
            <label className="text-3xl font-bold">
              Option 2
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3 text-lg text-gray-300">
                  This reasoning is consistent with [hypothetical/categorical]
                  reasoning and therefore [cannot/may] support a moral action.
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/deontology-hypothetical">
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back
            </button>
          </Link>
          <Link to="/deontology-testing-categorical">
            <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeontologyCategorical;
