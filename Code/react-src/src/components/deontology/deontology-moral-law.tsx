import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface DeontologyMoralLawProps {}

const DeontologyMoralLaw: FunctionComponent<DeontologyMoralLawProps> = () => {
    return(
        <div className="site-dashboard">
            <div className="pt-20 px-20 flex justify-between">
                <div className="font-bold text-7xl mr-8">
                    <h1>Deontology</h1>
                </div>
                <div className="text-3xl text-center font-bold bg-white rounded-lg w-256 py-4 px-2">
                    <p>TESTING CATEGORICAL IMPERATIVES</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="md:block w-6/12">
                    <div className="ml-20 mr-10 mt-10 h-auto justify-center bg-gray-300">
                        <div className="p-4 justify-between">
                            <label className="text-4xl font-bold">
                                Moral Law 1: Cheating is wrong
                            </label>
                        </div>
                    </div>
                    <div className="ml-20 mr-10 mt-5 h-auto justify-center bg-gray-300">
                        <div className="p-4 justify-between">
                            <label className="text-2xl font-bold">
                                TEST IT'S UNIVERSALIZABILITY: Can this law be a universal law of moral action?
                            </label>
                            <br></br>
                            <div className="text-2xl mt-2 font-bold flex justify-center">
                                <label className="px-6">
                                    YES
                                    <input type="radio" name="moralAction" value="yes" className="mx-2"></input>
                                </label>
                                <label className="px-6">
                                    NO
                                    <input type="radio" name="moralAction" value="no" className="mx-2"></input>
                                </label>
                            </div>
                            <div className="mt-6 justify-center">
                                <textarea rows={3} className="w-full border-none" placeholder="Explain...">
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="ml-20 mr-10 mt-2 h-auto justify-center">
                        <p className="text-2xl font-bold">*If the moral law is not a universal law of moral action, it fails the universalizability test.</p>
                    </div>
                    <div className="ml-20 mr-10 mt-2 h-auto justify-center bg-gray-300">
                        <div className="p-4 justify-between">
                            <label className="text-2xl font-bold">
                                TEST IT'S CONSISTENCY: Could you live in a world where everyone followed this law?
                            </label>
                            <br></br>
                            <div className="text-2xl mt-2 font-bold flex justify-center">
                                <label className="px-6">
                                    YES
                                    <input type="radio" name="moralAction" value="yes" className="mx-2"></input>
                                </label>
                                <label className="px-6">
                                    NO
                                    <input type="radio" name="moralAction" value="no" className="mx-2"></input>
                                </label>
                            </div>
                            <div className="mt-6 justify-center">
                                <textarea rows={3} className="w-full border-none" placeholder="Explain...">
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="ml-20 mr-10 mt-2 h-auto justify-center">
                        <p className="text-2xl font-bold">*If you could not live in a world where everyone (including you) followed this law,
                        it fails the consistency test.</p>
                    </div>
                </div>
                <div className="md:block w-6/12">
                    <div className="ml-10 mr-20 mt-10 pb-4 justify-center bg-gray-300">
                        <div className="p-4 justify-center">
                            <p className="text-4xl font-bold text-center">
                                Option 2
                            </p>
                        </div>
                        <div className="my-2 min-h-64 max-h-128 overflow-y-auto">
                            <div className="mx-4 mt-4 h-32 bg-white text-black">
                                <p className="mx-2 pt-2 font-bold text-xl">Moral Law 1: Cheating is wrong</p>
                                <br></br>
                                <p className="mx-2 font-bold text-xl">Universal - YES</p>
                                <p className="mx-2 font-bold text-xl">Consistent - NO</p>
                            </div>
                            <div className="mx-4 mt-4 h-32 bg-white text-gray-300">
                                <p className="mx-2 pt-2 font-bold text-xl">Moral Law 2: Revealing the truth is right</p>
                                <br></br>
                                <p className="mx-2 font-bold text-xl">Universal - YES/NO</p>
                                <p className="mx-2 font-bold text-xl">Consistent - YES/NO</p>
                            </div>
                            <div className="mx-4 mt-4 h-32 bg-white text-gray-300">
                                <p className="mx-2 pt-2 font-bold text-xl">Moral Law 3: Honesty is right</p>
                                <br></br>
                                <p className="mx-2 font-bold text-xl">Universal - YES/NO</p>
                                <p className="mx-2 font-bold text-xl">Consistent - YES/NO</p>
                            </div>
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

export default DeontologyMoralLaw;