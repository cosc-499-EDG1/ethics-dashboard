import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface VirtueEthicsProps {}

const VirtueEthicsRankBal: FunctionComponent<VirtueEthicsProps> = () => {
  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Virtue Ethics</h1>
        </div>
        <div className="dashboard-title-description">
          <p>
            The Virtuous action is the one that balances the interests of the
            stakeholders in light of the relevant virtues. Note: This is just a
            rough approximation of how Virtue Ethics can be applied to a
            particular case. Practicing the virtues is a life- long endeavor –
            meaning that you would evaluate success/failure in consideration of
            the consequences, re- evaluate your decisions and refine your
            understanding of the virtues until virtuous actions flow from your
            character.
          </p>
        </div>
      </div>

      <div className="dashboard-page md:flex">
        <div className="dashboard-block w-1/3 mr-2">
          <header className="dashboard-block-title mb-4">
            Options ranked by most virtuous
          </header>
          <div className="dashboard-block-1">
            <label className="dashboard-block-title">
              Option 3
              <p className="dashboard-block-description">Courage</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="3"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
          <div className="dashboard-block-1">
            <label className="dashboard-block-title">
              Option 2
              <p className="dashboard-block-description">Over-Sharing</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="7"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
          <div className="dashboard-block-1">
            <label className="dashboard-block-title">
              Option 1
              <p className="dashboard-block-description">Blind Devotion</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="8"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
        </div>

        <div className="dashboard-block w-1/3 mr-2 ml-2">
          <header className="dashboard-block-title mb-4">
            Interests ranked by most virtuous
          </header>
          <div className="dashboard-block-1">
            <label className="dashboard-block-title">
              Stakeholder 3
              <p className="dashboard-block-description">Integrity</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="2"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
          <div className="dashboard-block-1">
            <label className="dashboard-block-title">
              Stakeholder 2
              <p className="dashboard-block-description">Prestige</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="3"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
          <div className="dashboard-block-1">
            <label className="dashboard-block-title">
              Stakeholder 1
              <p className="dashboard-block-description">Greed</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="8"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
        </div>

        <div className="dashboard-block-1 w-1/3 ml-2">
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              ETHICAL DECISION/ COURSE OF ACTION <br></br>
            </label>
            <label className="dashboard-block-description">Enter in textbox below</label>
            <textarea
              rows={10}
              className="dashboard-block-text-input mb-4"
              placeholder="Sum up your analysis. Eg. Wealth and prestige were desired by the most stakeholders, but they were not the most virtuous goals. Balancing the options and interests of stakeholders shows that the right thing will be a combination of courage, integrity and self-confidence."
            ></textarea>
            <label className="dashboard-block-title">
              The virtuous option is Option 3.
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/virtueEthics-Stakeholders">
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

export default VirtueEthicsRankBal;
