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
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Care Ethics</h1>
        </div>
        <div className="dashboard-title-description">
          <p>
            Care ethics we come to understand the right thing to do by
            considering how we can care for others. There are three main
            features of care. Attentiveness: Being aware of needs in others.
            Competence: The ability to deliver what is needed Responsiveness:
            Empathy for the position of others in need of care.
          </p>
        </div>
      </div>
      <div className="dashboard-page md:flex">
        <div className="dashboard-block w-1/2 mr-2">
          <p className="dashboard-block-title">
            Option 1 -&nbsp;
          </p>
          <p className="dashboard-block-description">
            I can put loyalty to the company...
          </p>
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
          <StakeholderCareEthicsInput
            stakeholder={{
              id: 3,
              data: "Stakeholder 3",
              desc: "Blah, blah, blah...",
              onChange: (e) => changedValue(e.target.value, e.target.id),
            }}
          />
        </div>
        <div className="dashboard-block-1 w-1/2 ml-2">
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
