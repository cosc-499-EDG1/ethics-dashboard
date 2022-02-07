import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface DeontologyTestingCategoricalProps {}

const DeontologyTestingCategorical: FunctionComponent<DeontologyTestingCategoricalProps> = () => {
    return(
        <div className="site-dashboard">
            <div className="pt-20 px-20 flex justify-between">
                <div className="font-bold text-7xl w-1/3">
                    <h1>Deontology</h1>
                </div>
                <div className="text-3xl text-center font-bold bg-white rounded-lg w-256 py-4 px-2">
                    <p>TESTING CATEGORICAL IMPERATIVES</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="ml-20 mr-10 mt-10 max-h-80 justify-center w-6/12 bg-gray-300">
                    <div className="p-4 justify-between">
                        <label className="text-3xl font-bold">
                            Describe the moral issues governing the decision described in Option 2.
                        </label>
                    </div>
                    <div className="p-4 justify-center">
                        <textarea rows={4} className="w-full border-none" placeholder="Describe the moral issues...">
                        </textarea>
                    </div>
                </div>
                <div className="ml-10 mr-20 mt-10 pb-4 justify-center w-6/12 bg-gray-300">
                    <div className="p-4 justify-center">
                        <label className="text-3xl font-bold">
                            Define the moral law(s) that govern the actions you will take if you choose Option 2.
                        </label>
                    </div>
                    <div className="text-center justify-center">
                        <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add A Moral Law
                        </button>
                    </div>
                    <div className="my-2 min-h-32 max-h-64 overflow-y-auto">
                        <div className="mx-4 mt-4 h-20 flex justify-center items-center bg-white">
                            <p className="inline mx-2 pl-4 font-bold text-xl text-black">Moral Law 1:</p>
                            <input className="inline mx-2 font-bold text-lg text-black w-8/12" type="text"></input>
                        </div>
                        <div className="mx-4 mt-4 h-20 flex justify-center items-center bg-white">
                            <p className="inline mx-2 pl-4 font-bold text-xl text-black">Moral Law 2:</p>
                            <input className="inline mx-2 font-bold text-lg text-black w-8/12" type="text"></input>
                        </div>
                        <div className="mx-4 mt-4 h-20 flex justify-center items-center bg-white">
                            <p className="inline mx-2 pl-4 font-bold text-xl text-black">Moral Law 3:</p>
                            <input className="inline mx-2 font-bold text-lg text-black w-8/12" type="text"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center m-6">
                <div className="grid grid-cols-2 gap-20">
                    <button className="bg-gray-600 hover:bg-gray-500 text-white text-2xl font-bold py-2 px-4 w-64 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/utilitarianism-stakeholders">Go Back</Link>
                    </button>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-white text-2xl font-bold py-2 px-4 w-64 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/">Next</Link>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default DeontologyTestingCategorical;