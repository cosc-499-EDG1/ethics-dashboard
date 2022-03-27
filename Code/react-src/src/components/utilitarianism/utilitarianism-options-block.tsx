import { FunctionComponent } from "react";

interface UtilitariansimOptionBlockProps {
    option: {
        id: number;
        data: string;
    }
    onChange: (index: number, value: string) => void;
}

const UtilitarianismOptionBlock: FunctionComponent<UtilitariansimOptionBlockProps> =
  ({option, onChange}) => {
    return (
        <div className="dashboard-block">
            <label className="dashboard-block-title">
            Option {option.id + 1}
            <p className="dashboard-block-description">
               {option.data}
            </p>
                <textarea
                rows={3}
                className="dashboard-block-text-input"
                placeholder={`Option ${option.id + 1} Short-term consequences...`}
                defaultValue={option.data}
                onChange={(e) => {
                onChange(option.id, e.target.value);
                }}
            ></textarea>
            <textarea
            rows={3}
            className="dashboard-block-text-input"
            placeholder={`Option ${option.id +1} Long-term consequences...`}
            defaultValue={option.data}
            onChange={(e) => {
                onChange(option.id, e.target.value);
            }}>
            </textarea>  
            </label>
        </div>
      
    );
  };

export default UtilitarianismOptionBlock;
