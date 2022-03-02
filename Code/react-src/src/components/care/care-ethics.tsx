import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import StakeholderCareEthicsInput from "./stakeholder-care-ethics-input";
import OptionCareEthicsInput from "./option-care-ethics-input";

interface CareEthicsProps {}

const numStakeholder = 2;
var stakeholderValues = new Array(numStakeholder);
for (let value = 0; value < stakeholderValues.length; value++) {
  stakeholderValues[value] = new Array(3);
  for (let value1 = 0; value1 < stakeholderValues[value].length; value1++) {
    stakeholderValues[value][value1] = 50;
  }
}

const CareEthics: FunctionComponent<CareEthicsProps> = () => {
  const [valueChanged, setValue] = useState(50);

  const changedValue = async (value: string, id: string) => {
    const cValue = parseInt(value) * 10;
    var idString = id.split("-");
    const cID = parseInt(idString[0]);
    const docID = parseInt(idString[1]);
    var average = 0;
    for (let i = 0; i < stakeholderValues.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === cID - 1) {
          if (j === docID - 1) {
            stakeholderValues[i][j] = cValue;
          }
        }
        average = average + stakeholderValues[i][j];
      }
    }
    average = average / (numStakeholder * 3);
    setValue(average);
  };
  return (
    <div className="site-dashboard">
      <div className="pt-20 px-20 flex justify-between">
        <div className="font-bold text-7xl w-1/3">
          <h1>Care Ethics</h1>
        </div>
        <div className="text-2xl font-bold bg-white rounded-lg w-256 py-4 px-2">
          <p>
            Care ethics we come to understand the right thing to do by
            considering how we can care for others. There are three main
            features of care. Attentiveness: Being aware of needs in others.
            Competence: The ability to deliver what is needed Responsiveness:
            Empathy for the position of others in need of care.
          </p>
        </div>
      </div>
      <div className="md:flex">
        <div className="ml-20 mr-10 mt-10 min-h-128 max-h-144 justify-center w-8/12 bg-gray-300">
          <div className="p-4 justify-between">
            <label className="text-3xl font-bold text-black">
              Option 1 -&nbsp;
            </label>
            <label className="text-3xl font-bold text-gray-500">
              I can put loyalty to the company...
            </label>
          </div>
          <div className="mb-4 max-h-128 overflow-y-auto">
            <StakeholderCareEthicsInput
              stakeholder={{
                id: 1,
                data: "Stakeholder 1",
                desc: "The engineer asked to design the VW defeat...",
                onChange: (e) => changedValue(e.target.value, e.target.id),
              }}
            />
            <StakeholderCareEthicsInput
              stakeholder={{
                id: 2,
                data: "Stakeholder 2",
                desc: "The decision makers at VW who asked...",
                onChange: (e) => changedValue(e.target.value, e.target.id),
              }}
            />
          </div>
        </div>
        <div className="ml-10 mr-20 mt-10 pb-4 justify-center w-4/12 bg-gray-300">
          <div className="p-4 max-h-128 overflow-y-auto justify-center">
            <OptionCareEthicsInput
              option={{
                id: 1,
                data: "Option 1",
                color: "text-black",
                value: valueChanged,
              }}
            />
            <OptionCareEthicsInput
              option={{
                id: 2,
                data: "Option 2",
                color: "text-gray-400",
                value: 50,
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-2 gap-20">
          <Link to="/dashboard">
            <button className="bg-gray-600 hover:bg-gray-500 text-white text-2xl font-bold py-2 px-4 w-64 rounded focus:outline-none focus:shadow-outline">
              Go Back
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="bg-primary hover:brightness-125 text-white text-2xl font-bold py-2 px-4 w-64 rounded focus:outline-none focus:shadow-outline">
              Finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareEthics;
