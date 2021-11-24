import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface Issues {}

const Issue: FunctionComponent<Issues> = () => {
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Issues</h1>
                </div>
            </div>
            

            <div className="user-entry">
                <label className="text-3xl font-bold">
                    Report Issue
                    <textarea className="w-full border-none">
                        Title
                    </textarea>
                    <textarea rows={5} className="w-full border-none" >
                        Issue description:
                    </textarea>
                </label>

                <label className="text-3xl font-bold"> 
                
                </label>
                
            </div>
        
        </div>
        
    );

};

export default Issue;