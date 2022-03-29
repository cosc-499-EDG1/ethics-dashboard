import { FunctionComponent } from "react";
import { FormInput } from "../global/forminput";
import { StakeholderInputData } from "./stakeholders";

interface StakeholderInputProps {
  stakeholder: {
    id: number;
    data: StakeholderInputData;
  };
  onChange: (index: number, value: StakeholderInputData) => void;
}

const StakeholderInput: FunctionComponent<StakeholderInputProps> = ({
  stakeholder,
  onChange,
}) => {
  const onInputChanged = (title?: string, description?: string) => {
    if (title != null) stakeholder.data.title = title;
    if (description != null) stakeholder.data.description = description;
    onChange(stakeholder.id, stakeholder.data);
  };

  return (
    <div className="mt-1">
      <label className="dashboard-block-title">
        Stakeholder {stakeholder.id + 1}
      </label>
      <FormInput
        placeholder={`Stakeholder ${stakeholder.id + 1} title...`}
        value={stakeholder.data.title}
        onChange={(e) => {
          onInputChanged(e.target.value, stakeholder.data.description);
        }}
        maxLength={255}
        label={""}
        type={"input"}
      />
      <FormInput
        placeholder={`Stakeholder ${stakeholder.id + 1} description...`}
        value={stakeholder.data.description}
        onChange={(e) => {
          onInputChanged(stakeholder.data.title, e.target.value);
        }}
        maxLength={10000}
        label={""}
        type={"textarea"}
      />
    </div>
  );
};

export default StakeholderInput;
