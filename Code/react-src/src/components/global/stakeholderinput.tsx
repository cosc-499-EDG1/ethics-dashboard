import { FunctionComponent } from "react";

interface StakeholderInputProps {
  stakeholder: {
    key: string;
    label: string;
    type: string;
    placeholder: string;
    value?: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
    maxLength?: number;
  }
}

const StakeholderInput: FunctionComponent<StakeholderInputProps> =
  ({stakeholder}) => {
  return (
    <div className="dashboard-block">
      <div className="mt-1">
        <label
          className="dashboard-block-title"
          htmlFor={`formInput-${stakeholder.label}`}
        >
          {stakeholder.label}
        </label>
        {stakeholder.type === "textarea" ? (
          <textarea
            className="dashboard-block-text-input mt-4"
            id={`formInput-${stakeholder.label}`}
            placeholder={stakeholder.placeholder}
            value={stakeholder.value}
            onChange={stakeholder.onChange}
            maxLength={stakeholder.maxLength}
            rows={3}
          />
        ) : (
          <input
            className="dashboard-block-text-input mt-4"
            id={`formInput-${stakeholder.label}`}
            type={stakeholder.type}
            placeholder={stakeholder.placeholder}
            value={stakeholder.value}
            onChange={stakeholder.onChange}
            maxLength={stakeholder.maxLength}
          />
        )}
      </div>
    </div>
  );
};

export default StakeholderInput;