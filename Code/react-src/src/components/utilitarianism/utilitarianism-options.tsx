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
            <div className="dashboard-page">
                <div className="dashboard-block">
                    <label className="dashboard-block-title">
                        Option 1
                        <p className="dashboard-block-description">
                            Option 1 (Inputed from Ethical Issues page)
                        </p>
                        <textarea
                        className="dashboard-block-text-input"
                        placeholder="Short-term consequences..."
                        ></textarea>
                        <textarea
                        className="dashboard-block-text-input"
                        placeholder="Long-term consequences..."
                        ></textarea>
                    </label>
                </div>
                <div className="dashboard-block">
                    <label className="dashboard-block-title">
                        Option 2
                        <p className="dashboard-block-description">
                            Option 2 (Inputed from Ethical Issues page)
                        </p>
                        <textarea
                        className="dashboard-block-text-input"
                        placeholder="Short-term consequences..."
                        ></textarea>
                        <textarea
                        className="dashboard-block-text-input"
                        placeholder="Long-term consequences..."
                        ></textarea>
                    </label>
                </div>
            </div>
            <div className="flex justify-center items-center m-6">
                <button className="bg-primary hover:brightness-125 text-white font-bold w-1/12 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/utilitarianism-stakeholders">Submit</Link>
                </button>
            </div>
        </div>
    );

};

export default UtilitarianismOptions;