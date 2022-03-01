import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import VirtueEthicsCharacterInput from "./virtueEthicsProps/virtueEthics-characterInputs";

interface VirtueEthicsProps {}

const VirtueEthicsCharacter: FunctionComponent<VirtueEthicsProps> = () => {
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Virtue Ethics</h1>
                </div>
                <div className="dashboard-title-description">
                    <p>
                    Virtue ethics is a theory that focuses on the character of the 
                    decision maker. Building a virtuous character requires 
                    practicing the virtues until the moral agent knows the right 
                    thing to do in the right time in the right place in the right 
                    way. To begin, identify the relevant virtues and vices and 
                    indicate where each action falls on the virtue continuum.
                    </p>
                </div>
            </div>
           
            <div className="md:flex">

            <div className="dashboard-character">
                    <label className="text-4xl font-bold">
                        Virtue of character
                        <p className="text-2xl font-bold text-blue-500">
                            Move slider to align with option prompt
                        </p>
                        <VirtueEthicsCharacterInput character={{id: 1, prompt: "I can put loyalty into the company...", excess: "Blind Devotion", mean: "Loyalty", deficiency: "Disloyalty"}} />
                        <VirtueEthicsCharacterInput character={{id: 2, prompt: "I can betray the company, go to the press...", excess: "Over-sharing", mean: "Honesty", deficiency: "Dishonesty"}} />
                        <VirtueEthicsCharacterInput character={{id: 3, prompt: "I can stand up to my superiors, say no and organize...", excess: "Rashness", mean: "Courage", deficiency: "Cowardice"}} />
                    </label>
                </div>


                <div className="dashboard-virtueRank">
                    <header className="text-4xl font-bold">Options ranked by most virtuous</header>
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                            Option 3
                            <p className="text-2xl font-bold text-blue-700">
                                Courage
                            </p>
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Virtue</p>
                                <input type="range" min="1" max="10" value="2"></input>
                                <p className="inline mx-3">Vice</p>
                            </div>
                        </label>
                    </div>
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                            Option 2
                            <p className="text-2xl font-bold text-blue-700">
                                Over-Sharing
                            </p>
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Virtue</p>
                                <input type="range" min="1" max="10" value="8"></input>
                                <p className="inline mx-3">Vice</p>
                            </div>
                        </label>
                    </div>
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                            Option 1
                            <p className="text-2xl font-bold text-blue-700">
                                Blind Devotion
                            </p>
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
                    <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/virtueEthics-BallBalanced">Go Back</Link>
                    </button>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/virtueEthics-Stakeholders">Submit</Link>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default VirtueEthicsCharacter;

