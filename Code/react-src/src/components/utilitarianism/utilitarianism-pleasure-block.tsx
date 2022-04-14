import { FunctionComponent } from "react";
import Stakeholders from "../stakeholders/stakeholders";
import StakeholderPleasureInput from "./stakeholder-pleasure-input";

interface UtilitarianismPleasureBlockProps {
    data: {
        optionId: number;
        optionTitle: string;
        short: boolean;
        stakeholders: string[];
        values: number[];
        explanations: string[];
        pleasure: boolean[];

    }
    changePleasure: (optindex: number, stkindex: number, value: string) => void;
    changeExplanation: (optindex: number, stkindex: number, value: string) => void;
    changeValue: (optindex: number, stkindex: number, value: string) => void;

}


const UtilitarianismPleasureBlock: FunctionComponent<UtilitarianismPleasureBlockProps> = ({data, changeValue, changeExplanation, changePleasure}) =>{
    return (
        <div className="dashboard-block mr-2">
                    <label className="dashboard-block-title">
                        Option {data.optionId + 1}
                            <p className="dashboard-block-title text-primary my-4">
                            Short-term Consequences
                                
                            </p>  
                            <p>
                               Option: {data.optionTitle} 
                            </p>
                                  {data.stakeholders.map((text: string, idx: number) => (
                            <StakeholderPleasureInput
                            stakeholder={{id: idx, data: data.stakeholders[idx], value: 5, optionId: data.optionId, explanation: data.explanations[idx]}}
                            ValueChange={changeValue}
                            PleasureChange={changePleasure}
                            explanationChange={changeExplanation}
                            />
                        ))}
                    </label>
                </div>
    );
};


export default UtilitarianismPleasureBlock;