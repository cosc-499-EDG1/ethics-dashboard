import React, { FunctionComponent } from "react";

interface StakeholderCareEthicsInputProps {
    stakeholder: {
        id: number;
        data: string;
        desc: string;
        attentivenessValue: string;
        competenceValue: string;
        responsivenessValue: string;
        onChange: (change: number, index: number, value: string) => void;
        onAttentivenessChange: (index: number, value: string) => void;
        onCompetenceChange: (index: number, value: string) => void;
        onResponsivenessChange: (index: number, value: string) => void;
    }
}

const StakeholderCareEthicsInput: FunctionComponent<StakeholderCareEthicsInputProps> =
  ({stakeholder}) => {
    const handleAttentivenessChange = (change: number, id: number, value: string) => {
        stakeholder.onChange(change, id, value); 
        stakeholder.onAttentivenessChange(id, value);
    };
    const handleCompetenceChange = (change: number,  id: number, value: string) => {
        stakeholder.onChange(change, id, value); 
        stakeholder.onCompetenceChange(id, value);
    };
    const handleResponsivenessChange = (change: number,  id: number, value: string) => {
        stakeholder.onChange(change, id, value); 
        stakeholder.onResponsivenessChange(id, value);
    };
    return (
      <div className="dashboard-block-1">
        <p className="dashboard-block-title">
          {stakeholder.data}
        </p>
        <p className="dashboard-block-description">
            {stakeholder.desc}
        </p>
        <div className="pt-1 pb-3 bg-white">
            <div className="md:flex">
                <div className="w-6/12 text-center my-2">
                    <p className="text-3xl font-bold text-black">
                        Attentiveness
                    </p>
                    <p className="inline mx-3 font-bold text-xl">Low</p>
                    <input className="w-6/12" type="range" min="0" max="10" value={stakeholder.attentivenessValue} onChange={(e) => {handleAttentivenessChange(1, stakeholder.id, e.target.value);}} id={stakeholder.id.toString()+"-1"}></input>
                    <p className="inline mx-3 font-bold text-xl">High</p>
                </div>
                <div className="w-6/12 text-center my-2">
                    <p className="text-3xl font-bold text-black">
                        Competence
                    </p>
                    <p className="inline mx-3 font-bold text-xl">Low</p>
                    <input className="w-6/12" type="range" min="0" max="10" value={stakeholder.competenceValue} onChange={(e) => {handleCompetenceChange(2, stakeholder.id, e.target.value);}} id={stakeholder.id.toString()+"-2"}></input>
                    <p className="inline mx-3 font-bold text-xl">High</p>
                </div>
            </div>
            <div className="w-6/12 text-center my-2">
                <p className="text-3xl font-bold text-black">
                    Responsiveness
                </p>
                <p className="inline mx-3 font-bold text-xl">Low</p>
                <input className="w-6/12" type="range" min="0" max="10" value={stakeholder.responsivenessValue} onChange={(e) => {handleResponsivenessChange(3, stakeholder.id, e.target.value);}} id={stakeholder.id.toString()+"-3"}></input>
                <p className="inline mx-3 font-bold text-xl">High</p>
            </div>
        </div>
    </div>
    );
  };

export default StakeholderCareEthicsInput;
