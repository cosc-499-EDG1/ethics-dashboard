import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface DeontologyMoralLawProps {}

const DeontologyMoralLaw: FunctionComponent<DeontologyMoralLawProps> = () => {
  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Deontology</h1>
        </div>
        <div className="dashboard-title-description text-center">
          <p>
            TESTING CATEGORICAL IMPERATIVES
          </p>
        </div>
      </div>
      <div className="dashboard-page md:flex">
        <div className="md:block w-6/12">
          <div className="dashboard-block h-full mr-2">
            <label className="dashboard-block-title">
              Moral Law 1: Cheating is wrong
            </label>
            <div className="dashboard-block-1 mt-4">
              <label className="text-2xl font-bold">
                TEST IT'S UNIVERSALIZABILITY: Can this law be a universal law of
                moral action?
              </label>
              <br></br>
              <div className="text-2xl mt-2 font-bold flex justify-center">
                <label className="px-6">
                  YES
                  <input
                    type="radio"
                    name="moralAction"
                    value="yes"
                    className="mx-2"
                  ></input>
                </label>
                <label className="px-6">
                  NO
                  <input
                    type="radio"
                    name="moralAction"
                    value="no"
                    className="mx-2"
                  ></input>
                </label>
              </div>
              <textarea
                rows={3}
                className="dashboard-block-text-input mt-4"
                placeholder="Explain..."
              ></textarea>
            </div>
            <div className="dashboard-block-1">
              <p className="text-2xl font-bold">
                *If the moral law is not a universal law of moral action, it fails
                the universalizability test.
              </p>
            </div>
            <div className="dashboard-block-1">
              <label className="text-2xl font-bold">
                TEST IT'S CONSISTENCY: Could you live in a world where everyone
                followed this law?
              </label>
              <br></br>
              <div className="text-2xl mt-2 font-bold flex justify-center">
                <label className="px-6">
                  YES
                  <input
                    type="radio"
                    name="moralAction"
                    value="yes"
                    className="mx-2"
                  ></input>
                </label>
                <label className="px-6">
                  NO
                  <input
                    type="radio"
                    name="moralAction"
                    value="no"
                    className="mx-2"
                  ></input>
                </label>
              </div>
              <div className="mt-6 justify-center">
                <textarea
                  rows={3}
                  className="dashboard-block-text-input"
                  placeholder="Explain..."
                ></textarea>
              </div>
            </div>
            <div className="dashboard-block-1">
              <p className="text-2xl font-bold">
                *If you could not live in a world where everyone (including you)
                followed this law, it fails the consistency test.
              </p>
            </div>
          </div>
        </div>
        <div className="md:block w-6/12">
          <div className="dashboard-block-1 h-full ml-2">
            <p className="dashboard-block-title mb-4">Option 2</p>
            <div className="my-2 min-h-64 max-h-128 overflow-y-auto">
              <div className="dashboard-block">
                <p className="mx-2 pt-2 font-bold text-xl">
                  Moral Law 1: Cheating is wrong
                </p>
                <br></br>
                <p className="mx-2 font-bold text-xl">Universal - YES</p>
                <p className="mx-2 font-bold text-xl">Consistent - NO</p>
              </div>
              <div className="dashboard-block">
                <p className="mx-2 pt-2 font-bold text-xl">
                  Moral Law 2: Revealing the truth is right
                </p>
                <br></br>
                <p className="mx-2 font-bold text-xl">Universal - YES/NO</p>
                <p className="mx-2 font-bold text-xl">Consistent - YES/NO</p>
              </div>
              <div className="dashboard-block">
                <p className="mx-2 pt-2 font-bold text-xl">
                  Moral Law 3: Honesty is right
                </p>
                <br></br>
                <p className="mx-2 font-bold text-xl">Universal - YES/NO</p>
                <p className="mx-2 font-bold text-xl">Consistent - YES/NO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/deontology-testing-categorical">
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeontologyMoralLaw;
