import { FunctionComponent } from "react";

interface IssuesOptionProps {
    option: {
        id: number;
        data: string;
    }
    onChange: (index: number, value: string) => void;
}

const IssuesOption: FunctionComponent<IssuesOptionProps> =
  ({option, onChange}) => {
    return (
      <textarea
        rows={3}
        className="dashboard-block-text-input"
        placeholder={`Option ${option.id + 1}...`}
        defaultValue={option.data}
        onChange={(e) => {
          onChange(option.id, e.target.value);
        }}
      ></textarea>
    );
  };

export default IssuesOption;
