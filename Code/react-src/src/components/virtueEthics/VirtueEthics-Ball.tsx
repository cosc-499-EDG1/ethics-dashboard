import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface VirtueEthicsProps {}

const VirtueEthicsBall: FunctionComponent<VirtueEthicsProps> = () => {
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Virtue Ethics</h1>
                </div>
                <div className="dashboard-title-description">
                    <p>
                    The Virtuous action is the one that balances the interests of 
                    the stakeholders in light of the relevant virtues.  Note:  This 
                    is just a rough approximation of how Virtue Ethics can be 
                    applied to a particular case.  Practicing the virtues is a life-
                    long endeavor – meaning that you would evaluate 
                    success/failure in consideration of the consequences, re-
                    evaluate your decisions and refine your understanding of 
                    the virtues until virtuous actions flow from your character.
                    </p>
                </div>
            </div>
           
            
            <div className="flex justify-center items-center m-6">
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/home">Go Back</Link>
                    </button>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/virtueEthics-Character">Submit</Link>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default VirtueEthicsBall;
