import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface DeontologyTestingCategoricalProps {}

const DeontologyTestingCategorical: FunctionComponent<
  DeontologyTestingCategoricalProps
> = () => {
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
        <div className="dashboard-block w-1/2 mr-2">
            <label className="dashboard-block-title">
              Describe the moral issues governing the decision described in
              Option 2.
            </label>
            <textarea
              rows={4}
              className="dashboard-block-text-input mt-4"
              placeholder="Describe the moral issues..."
            ></textarea>
        </div>
        <div className="dashboard-block w-1/2 ml-2">
          <label className="dashboard-block-title">
            Define the moral law(s) that govern the actions you will take if
            you choose Option 2.
          </label>
          <div className="text-center justify-center mt-2">
            <button className="bg-main hover:brightness-110 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add A Moral Law
            </button>
          </div>
          <div className="my-2 min-h-32 max-h-48 overflow-y-auto">
          <div className="dashboard-block-1">
              <p className="inline mx-2 pl-4 font-bold text-xl text-black">
                Moral Law 1:
              </p>
              <input
                className="inline mx-2 font-bold text-lg text-black w-8/12"
                type="text"
              ></input>
            </div>
            <div className="dashboard-block-1">
              <p className="inline mx-2 pl-4 font-bold text-xl text-black">
                Moral Law 2:
              </p>
              <input
                className="inline mx-2 font-bold text-lg text-black w-8/12"
                type="text"
              ></input>
            </div>
            <div className="dashboard-block-1">
              <p className="inline mx-2 pl-4 font-bold text-xl text-black">
                Moral Law 3:
              </p>
              <input
                className="inline mx-2 font-bold text-lg text-black w-8/12"
                type="text"
              ></input>
            </div>
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
          <Link to="/deontology-moral-law">
            <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeontologyTestingCategorical;
