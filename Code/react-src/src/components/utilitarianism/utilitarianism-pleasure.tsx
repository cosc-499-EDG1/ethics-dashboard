import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface UtilitarianismPleasureProps {}

const UtilitarianismPleasure: FunctionComponent<UtilitarianismPleasureProps> = () => {
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Utilitarianism</h1>
                </div>
                <div className="dashboard-title-description">
                    <p>
                    The Greatest Happiness Principle, actions are right if they promote happiness (pleasure) and wrong if they promote 
                    unhappiness (pain). Consider the relative stakeholder pleasures or pains for the options you identified. Identify 
                    the pleasures as higher or lower by ticking the box.
                    </p>
                </div>
            </div>
            <div className="pt-30">
                <p>
                    
                </p>
            </div>
            <div className="md:flex">
                <div className="dashboard-consequences">
                    <label className="text-3xl font-bold">
                        Option 1
                        <p className="text-4xl font-bold text-blue-500">
                            Short-term Consequences
                        </p>
                        <div className="w-full border-none font-normal bg-gray-300 my-1 p-3">
                            <p className="text-xl">
                                Stakeholder 1
                            </p>
                            <p className="text-sm">
                                Stakeholder 1 (Inputed from Stakeholders page)
                            </p>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-3/6 h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Pleasure</p>
                                <input type="range" min="1" max="10" defaultValue="5"></input>
                                <p className="inline mx-3">Pain</p>
                            </div>
                            <div className="w-3/6 h-24 my-2 grid place-items-center bg-yellow-300">
                                <input type="text" className="w-4/6 h-6 border-2 border-black bg-white" placeholder="Explanation..."></input>
                                <div className="inline-flex text-base">
                                    <p className="inline mx-2">Pleasure: </p>
                                    <label>High
                                    <input type="radio" name="pleasure" value="High" className="mx-2"></input>
                                    </label>
                                    <label>Low
                                    <input type="radio" name="pleasure" value="Low" className="mx-2"></input>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-none font-normal bg-gray-300 my-1 p-3">
                            <p className="text-xl">
                                Stakeholder 2
                            </p>
                            <p className="text-sm">
                                Stakeholder 2 (Inputed from Stakeholders page)
                            </p>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-3/6 h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Pleasure</p>
                                <input type="range" min="1" max="10" defaultValue="5"></input>
                                <p className="inline mx-3">Pain</p>
                            </div>
                            <div className="w-3/6 h-24 my-2 grid place-items-center bg-yellow-300">
                                <input type="text" className="w-4/6 h-6 border-2 border-black bg-white" placeholder="Explanation..."></input>
                                <div className="inline-flex text-base">
                                    <p className="inline mx-2">Pleasure: </p>
                                    <label>High
                                    <input type="radio" name="pleasure" value="High" className="mx-2"></input>
                                    </label>
                                    <label>Low
                                    <input type="radio" name="pleasure" value="Low" className="mx-2"></input>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-none font-normal bg-gray-300 my-1 p-3">
                            <p className="text-xl">
                                Stakeholder 3
                            </p>
                            <p className="text-sm">
                                Stakeholder 3 (Inputed from Stakeholders page)
                            </p>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-3/6 h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Pleasure</p>
                                <input type="range" min="1" max="10" defaultValue="5"></input>
                                <p className="inline mx-3">Pain</p>
                            </div>
                            <div className="w-3/6 h-24 my-2 grid place-items-center bg-yellow-300">
                                <input type="text" className="w-4/6 h-6 border-2 border-black bg-white" placeholder="Explanation..."></input>
                                <div className="inline-flex text-base">
                                    <p className="inline mx-2">Pleasure: </p>
                                    <label>High
                                    <input type="radio" name="pleasure" value="High" className="mx-2"></input>
                                    </label>
                                    <label>Low
                                    <input type="radio" name="pleasure" value="Low" className="mx-2"></input>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="dashboard-aggregate">
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                            Option 1
                            <p className="text-4xl font-bold text-blue-700">
                                Aggregate of short-term outcomes
                            </p>
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Pleasure</p>
                                <input type="range" min="1" max="10" value="5"></input>
                                <p className="inline mx-3">Pain</p>
                            </div>
                            <p className="text-4xl font-bold text-red-700">
                                Aggregate of short-term outcomes
                            </p>
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Pleasure</p>
                                <input type="range" min="1" max="10" value="5"></input>
                                <p className="inline mx-3">Pain</p>
                            </div>
                        </label>
                    </div>
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                            Option 2
                            <p className="text-4xl font-bold text-blue-700">
                                Aggregate of short-term outcomes
                            </p>
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Pleasure</p>
                                <input type="range" min="1" max="10" value="5"></input>
                                <p className="inline mx-3">Pain</p>
                            </div>
                            <p className="text-4xl font-bold text-red-700">
                                Aggregate of short-term outcomes
                            </p>
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3">Pleasure</p>
                                <input type="range" min="1" max="10" value="5"></input>
                                <p className="inline mx-3">Pain</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default UtilitarianismPleasure;