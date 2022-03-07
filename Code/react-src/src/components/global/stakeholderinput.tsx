type StakeholderInputProps = {
  label: string;
  type: string;
  placeholder: string;
  value?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
  maxLength?: number;
};

export const StakeholderInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  maxLength,
}: StakeholderInputProps) => {
  return (
    <div className="mt-1">
      <label
        className="ethical-issues-block-title"
        htmlFor={`formInput-${label}`}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="ethical-issues-block-text-input mt-4"
          id={`formInput-${label}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          rows={3}
        />
      ) : (
        <input
          className="ethical-issues-block-text-input mt-4"
          id={`formInput-${label}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
      )}
    </div>
  );
};
