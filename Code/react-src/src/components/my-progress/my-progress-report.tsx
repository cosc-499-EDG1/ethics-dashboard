import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface MyProgressReportProps {}

const MyProgressReport: FunctionComponent<MyProgressReportProps> = () => {
    return(
        <div className="site-dashboard">
            <div className="pt-20 px-20">
                <div className="font-bold justify-center text-center text-7xl">
                    <h1>My Progress</h1>
                </div>
            </div>
            <div className="mt-12 flex justify-around">
                <div className="h-96 w-144 bg-gray-300">
                    <div className="p-4">
                        <label className="text-4xl flex justify-center font-bold text-black">
                            Ethical Issue &amp; Options
                        </label>
                    </div>
                    <div className="pb-4 flex justify-center">
                        <div className="w-44 p-3 flex justify-center border-4 border-black">
                            <input type="text" className="text-xl font-bold w-12 mr-4"></input>
                            <label className="text-4xl font-bold text-black">
                                / 10
                            </label>
                        </div>
                    </div>
                    <div className="pt-5 px-4">
                        <label className="text-2xl flex justify-center font-bold text-black">
                            Comments &amp; Summary
                        </label>
                    </div>
                    <div className="mt-5 px-5">
                        <textarea rows={4} className="w-full border-none text-lg" placeholder="Comments &amp; Summary...">
                        </textarea>
                    </div>
                </div>
                <div className="h-96 w-144 bg-gray-300">
                    <div className="p-4">
                        <label className="text-4xl flex justify-center font-bold text-black">
                            Stakeholders
                        </label>
                    </div>
                    <div className="pb-4 flex justify-center">
                        <div className="w-44 p-3 flex justify-center border-4 border-black">
                            <input type="text" className="text-xl font-bold w-12 mr-4"></input>
                            <label className="text-4xl font-bold text-black">
                                / 10
                            </label>
                        </div>
                    </div>
                    <div className="pt-5 px-4">
                        <label className="text-2xl flex justify-center font-bold text-black">
                            Comments &amp; Summary
                        </label>
                    </div>
                    <div className="mt-5 px-5">
                        <textarea rows={4} className="w-full border-none text-lg" placeholder="Comments &amp; Summary...">
                        </textarea>
                    </div>
                </div>
                <div className="h-96 w-144 bg-gray-300">
                    <div className="p-4">
                        <label className="text-4xl flex justify-center font-bold text-black">
                            Utilitarianism
                        </label>
                    </div>
                    <div className="pb-4 flex justify-center">
                        <div className="w-44 p-3 flex justify-center border-4 border-black">
                            <input type="text" className="text-xl font-bold w-12 mr-4"></input>
                            <label className="text-4xl font-bold text-black">
                                / 15
                            </label>
                        </div>
                    </div>
                    <div className="pt-5 px-4">
                        <label className="text-2xl flex justify-center font-bold text-black">
                            Comments &amp; Summary
                        </label>
                    </div>
                    <div className="mt-5 px-5">
                        <textarea rows={4} className="w-full border-none text-lg" placeholder="Comments &amp; Summary...">
                        </textarea>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex justify-around">
                <div className="h-96 w-144 bg-gray-300">
                    <div className="p-4">
                        <label className="text-4xl flex justify-center font-bold text-black">
                            Deontology
                        </label>
                    </div>
                    <div className="pb-4 flex justify-center">
                        <div className="w-44 p-3 flex justify-center border-4 border-black">
                            <input type="text" className="text-xl font-bold w-12 mr-4"></input>
                            <label className="text-4xl font-bold text-black">
                                / 15
                            </label>
                        </div>
                    </div>
                    <div className="pt-5 px-4">
                        <label className="text-2xl flex justify-center font-bold text-black">
                            Comments &amp; Summary
                        </label>
                    </div>
                    <div className="mt-5 px-5">
                        <textarea rows={4} className="w-full border-none text-lg" placeholder="Comments &amp; Summary...">
                        </textarea>
                    </div>
                </div>
                <div className="h-96 w-144 bg-gray-300">
                    <div className="p-4">
                        <label className="text-4xl flex justify-center font-bold text-black">
                            Virtue Ethics
                        </label>
                    </div>
                    <div className="pb-4 flex justify-center">
                        <div className="w-44 p-3 flex justify-center border-4 border-black">
                            <input type="text" className="text-xl font-bold w-12 mr-4"></input>
                            <label className="text-4xl font-bold text-black">
                                / 15
                            </label>
                        </div>
                    </div>
                    <div className="pt-5 px-4">
                        <label className="text-2xl flex justify-center font-bold text-black">
                            Comments &amp; Summary
                        </label>
                    </div>
                    <div className="mt-5 px-5">
                        <textarea rows={4} className="w-full border-none text-lg" placeholder="Comments &amp; Summary...">
                        </textarea>
                    </div>
                </div>
                <div className="h-96 w-144 bg-gray-300">
                    <div className="p-4">
                        <label className="text-4xl flex justify-center font-bold text-black">
                            Care Ethics
                        </label>
                    </div>
                    <div className="pb-4 flex justify-center">
                        <div className="w-44 p-3 flex justify-center border-4 border-black">
                            <input type="text" className="text-xl font-bold w-12 mr-4"></input>
                            <label className="text-4xl font-bold text-black">
                                / 15
                            </label>
                        </div>
                    </div>
                    <div className="pt-5 px-4">
                        <label className="text-2xl flex justify-center font-bold text-black">
                            Comments &amp; Summary
                        </label>
                    </div>
                    <div className="mt-5 px-5">
                        <textarea rows={4} className="w-full border-none text-lg" placeholder="Comments &amp; Summary...">
                        </textarea>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex justify-center">
                <div className="md:block">
                    <div className="mb-2 w-144 flex justify-between">
                        <p className="text-4xl font-bold text-black">
                            Issue &amp; Options:
                        </p>
                        <p className="text-4xl font-bold text-black">
                        0 / 10
                        </p>
                    </div>
                    <div className="mb-2 w-144 flex justify-between">
                        <p className="text-4xl font-bold text-black">
                            Stakeholders:
                        </p>
                        <p className="text-4xl font-bold text-black">
                        0 / 10
                        </p>
                    </div>
                    <div className="mb-2 w-144 flex justify-between">
                        <p className="text-4xl font-bold text-black">
                            Utilitarianism:
                        </p>
                        <p className="text-4xl font-bold text-black">
                        0 / 15
                        </p>
                    </div>
                    <div className="mb-2 w-144 flex justify-between">
                        <p className="text-4xl font-bold text-black">
                            Deontology:
                        </p>
                        <p className="text-4xl font-bold text-black">
                        0 / 15
                        </p>
                    </div>
                    <div className="mb-2 w-144 flex justify-between">
                        <p className="text-4xl font-bold text-black">
                            Virtue Ethics:
                        </p>
                        <p className="text-4xl font-bold text-black">
                        0 / 15
                        </p>
                    </div>
                    <div className="mb-2 w-144 flex justify-between">
                        <p className="text-4xl font-bold text-black">
                            Care Ethics:
                        </p>
                        <p className="text-4xl font-bold text-black">
                        0 / 15
                        </p>
                    </div>
                    <div className="mt-4 mb-8 w-144 h-48 bg-gray-300">
                        <div className="p-4 flex justify-between">
                            <p className="text-6xl font-bold text-black">
                                TOTAL:
                            </p>
                            <p className="text-6xl font-bold text-blue-500">
                                0/88
                            </p>
                        </div>
                        <div className="p-4 flex justify-end">
                            <p className="text-6xl font-bold text-blue-500">
                                0.00%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MyProgressReport;