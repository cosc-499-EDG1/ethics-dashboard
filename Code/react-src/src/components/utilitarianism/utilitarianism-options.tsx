import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface UtilitarianismOptionsProps {}

const UtilitarianismOptions: FunctionComponent<UtilitarianismOptionsProps> = () => {
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Utilitarianism</h1>
                </div>
                <div className="dashboard-title-description">
                    <p>
                    Utilitarianism is a consequentialist theory – meaning that the moral worth of an action is determined by the consequences 
                    of the action. The first step is to consider the consequences, both short-term and long-term, for the options you’ve identified. 
                    </p>
                </div>
            </div>
            <div className="pt-30">
                <p>
                    
                </p>
            </div>
            <div className="dashboard-entry">
                <label className="text-3xl font-bold">
                    Option 1
                    <p className="w-full border-none font-normal text-xl bg-gray-300 my-1 p-3">
                        Option 1 (Inputed from Ethical Issues page)
                    </p>
                    <textarea rows={5} className="w-full border-none" placeholder="Short-term consequences...">
                    </textarea>
                    <textarea rows={5} className="w-full border-none" placeholder="Long-term consequences...">
                    </textarea>
                </label>
            </div>
            <div className="dashboard-entry">
                <label className="text-3xl font-bold">
                    Option 2
                    <p className="w-full border-none font-normal text-xl bg-gray-300 my-1 p-3">
                        Option 2 (Inputed from Ethical Issues page)
                    </p>
                    <textarea rows={5} className="w-full border-none" placeholder="Short-term consequences...">
                    </textarea>
                    <textarea rows={5} className="w-full border-none" placeholder="Long-term consequences...">
                    </textarea>
                </label>
            </div>
            <div className="flex justify-center items-center m-6">
                <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold w-1/12 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/utilitarianism-stakeholders">Submit</Link>
                </button>
            </div>
        </div>
    );

};

export default UtilitarianismOptions;