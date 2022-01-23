import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface DeontologyOptionsProps {}

const DeontologyOptions: FunctionComponent<DeontologyOptionsProps> = () => {
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Deontology</h1>
                </div>
                <div className="dashboard-title-description">
                    <p>
                    A deontological approach to ethical decision making begins with reasoning our way to understanding the 
                    moral law that should govern the decision. Kant called these moral laws categorical (universal, timeless) 
                    imperatives (must do’s that are not optional). To begin, consider the reasons supporting each option. 
                    </p>
                </div>
            </div>
            <div className="pt-30">
                <p>
                    
                </p>
            </div>
            <div className="md:flex">
                <div className="dashboard-optionsblock">
                    <div className="md:flex">
                        <div className="md:block">
                            <div className="dashboard-options">
                                <label className="text-3xl font-bold">
                                    Option 1
                                    <p className="text-xl font-bold text-blue-500">
                                        I can put loyalty to the company...
                                    </p>
                                </label>
                            </div>
                            <div className="dashboard-motivation">
                                <div className="text-3xl font-bold">
                                    What is your motivation?
                                    <br></br>
                                    <input type="checkbox" value="your-interests"></input>
                                    <label className="mx-4 text-lg">Serves your interests</label><br></br>
                                    <input type="checkbox" value="someones-interests"></input>
                                    <label className="mx-4 text-lg">Serves the interests of someone else you want to impress</label><br></br>
                                    <input type="checkbox" value="look-good"></input>
                                    <label className="mx-4 text-lg">It will look good</label><br></br>
                                    <input type="checkbox" value="long-run"></input>
                                    <label className="mx-4 text-lg">It will pay off in the long run</label><br></br>
                                    <input type="checkbox" value="everybody-wins"></input>
                                    <label className="mx-4 text-lg">Everybody wins</label><br></br>
                                    <input type="checkbox" value="revenge"></input>
                                    <label className="mx-4 text-lg">Revenge</label><br></br>
                                    <input type="checkbox" value="other"></input>
                                    <label className="mx-4 text-lg">Other</label>
                                    <input type="text"></input><br></br>
                                    <input type="checkbox" value="right-thing"></input>
                                    <label className="mx-4 text-lg">It's the right thing to do</label><br></br>
                                </div>
                            </div>
                        </div>
                        <div className="md:block">
                            <div className="dashboard-options">
                                <label className="text-3xl font-bold">
                                    Option 2
                                    <p className="text-xl font-bold text-blue-500">
                                        I can betray the company, go to the...
                                    </p>
                                </label>
                            </div>
                            <div className="dashboard-motivation">
                                <div className="text-3xl font-bold">
                                    What is your motivation?
                                    <br></br>
                                    <input type="checkbox" value="your-interests"></input>
                                    <label className="mx-4 text-lg">Serves your interests</label><br></br>
                                    <input type="checkbox" value="someones-interests"></input>
                                    <label className="mx-4 text-lg">Serves the interests of someone else you want to impress</label><br></br>
                                    <input type="checkbox" value="look-good"></input>
                                    <label className="mx-4 text-lg">It will look good</label><br></br>
                                    <input type="checkbox" value="long-run"></input>
                                    <label className="mx-4 text-lg">It will pay off in the long run</label><br></br>
                                    <input type="checkbox" value="everybody-wins"></input>
                                    <label className="mx-4 text-lg">Everybody wins</label><br></br>
                                    <input type="checkbox" value="revenge"></input>
                                    <label className="mx-4 text-lg">Revenge</label><br></br>
                                    <input type="checkbox" value="other"></input>
                                    <label className="mx-4 text-lg">Other</label>
                                    <input type="text"></input><br></br>
                                    <input type="checkbox" value="right-thing"></input>
                                    <label className="mx-4 text-lg">It's the right thing to do</label><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-aggregate">
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                            Option 1
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3 text-lg text-gray-300">This reasoning is consistent with [hypothetical/categorical] reasoning and 
                                therefore [cannot/may] support a moral action.</p>
                            </div>
                        </label>
                    </div>
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                            Option 2
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3 text-lg text-gray-300">This reasoning is consistent with [hypothetical/categorical] reasoning and 
                                therefore [cannot/may] support a moral action.</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center m-6">
                <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold w-1/12 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/">Next</Link>
                </button>
            </div>
        </div>
    );

};

export default DeontologyOptions;