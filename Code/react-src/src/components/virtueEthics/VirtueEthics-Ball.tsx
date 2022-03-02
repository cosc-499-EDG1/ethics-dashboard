import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import VirtueEthicsBallInput from "./virtueEthicsProps/virtueEthics-ballProps";
import Draggable from "react-draggable";

interface VirtueEthicsProps {}

const VirtueEthicsBall: FunctionComponent<VirtueEthicsProps> = () => {
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

      <div className="dashboard-character h-29">
        <label className="text-4xl font-bold">
          Virtuous Balancing Excercise
          <p className="text-2xl font-bold text-blue-500">
            Move the spheres around the unbalance circle and submit when
            balanced
          </p>
        </label>
      </div>

      <div className="mx-20 my-5 px-5 pt-5 py-4 justify-center border-black border-2 flex items-center justify-center">
        <Draggable>
          <div className="bg-blue-400 w-28 h-28 rounded-full relative right-6 bottom-36">
            <div className="text-sm text-center py-10">Conventions</div>
          </div>
        </Draggable>

        <Draggable>
          <div className="bg-green-900 w-28 h-28 rounded-full relative right-6 bottom-30">
            <div className="text-sm text-center py-10">Expectations</div>
          </div>
        </Draggable>

        <Draggable>
          <div className="bg-green-400 w-28 h-28 rounded-full relative right-8 top-32">
            <div className="text-sm text-center py-10">Attachments</div>
          </div>
        </Draggable>

        <div className="bg-gray-400 w-96 h-96 rounded-full text-center font-bold py-4">
          Your soul
        </div>

        <Draggable>
          <div className="bg-orange-400 w-28 h-28 rounded-full relative bottom-36">
            <div className="text-sm text-center py-10">Traditions</div>
          </div>
        </Draggable>

        <Draggable>
          <div className="bg-blue-800 w-28 h-28 rounded-full">
            <div className="text-sm text-center py-10">Impulses</div>
          </div>
        </Draggable>

        <Draggable>
          <div className="bg-red-400 w-28 h-28 rounded-full relative right-60 top-36">
            <div className="text-sm text-center py-10">Desires</div>
          </div>
        </Draggable>
      </div>

      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/dashboard">
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back
            </button>
          </Link>
          <Link to="/virtueEthics-BallBalanced">
            <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VirtueEthicsBall;
