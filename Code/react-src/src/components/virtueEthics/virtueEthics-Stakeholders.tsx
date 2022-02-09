import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import VirtueEthicsStakeholderInput from "./virtueEthicsProps/virtueEthics-stakeholderInputs";

interface VirtueEthicsProps {}

const VirtueEthicsStakeholders: FunctionComponent<VirtueEthicsProps> = () => {
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Virtue Ethics</h1>
                </div>
                <div className="dashboard-title-description">
                    <p>
                    Consider the context.  The virtues are practiced (and 
                    understood) in the context of a community.  Identify the 
                    relevant virtues and vices relevant to the stakeholder 
                    interests you’ve listed
                    </p>
                </div>
            </div>
           
            <div className="md:flex">

            <div className="dashboard-character">
                    <label className="text-4xl font-bold">
                        Stakeholders
                        <p className="text-2xl font-bold text-blue-500">
                            Move slider to align with option prompt
                        </p>
                        <VirtueEthicsStakeholderInput stakeholder={{id: 1, prompt: "Wealth (10)", excess: "Greed", mean: "Frugality", deficiency: "Generosity"}} />
                        <VirtueEthicsStakeholderInput stakeholder={{id: 2, prompt: "Prestige (7)", excess: "Vanity", mean: "Self Confidence", deficiency: "Modesty"}} />
                        <VirtueEthicsStakeholderInput stakeholder={{id: 3, prompt: "Integrity (3)", excess: "Righteous Indignation", mean: "Integrity", deficiency: "Wickedness"}} />
                    </label>
                </div>


                <div className="dashboard-virtueRank">
                    <header className="text-4xl font-bold">Options ranked by most virtuos</header>
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                            Stakeholder 2
                            <p className="text-4xl font-bold text-blue-700">
                                Integrity
                            </p>
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Virtue</p>
                                <input type="range" min="1" max="10" value="5"></input>
                                <p className="inline mx-3">Vice</p>
                            </div>
                        </label>
                    </div>
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                        Stakeholder 2
                            <p className="text-4xl font-bold text-blue-700">
                                Prestige
                            </p>
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Virtue</p>
                                <input type="range" min="1" max="10" value="5"></input>
                                <p className="inline mx-3">Vice</p>
                            </div>
                        </label>
                    </div>
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                        Stakeholder 1
                            <p className="text-4xl font-bold text-blue-700">
                                Greed
                            </p>
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Virtue</p>
                                <input type="range" min="1" max="10" value="5"></input>
                                <p className="inline mx-3">Vice</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center m-6">
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/virtueEthics-Character">Go Back</Link>
                    </button>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/virtueEthics-RankBalance">Submit</Link>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default VirtueEthicsStakeholders;

