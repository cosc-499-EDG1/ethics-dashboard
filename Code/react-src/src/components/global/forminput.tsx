type FormInputProps = {
  label: string;
  type: string;
  placeholder: string;
  value?: any;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>
  ) => void;
  maxLength?: number;
  options?: any[];
};

export const FormInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  maxLength,
  options,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={`formInput-${label}`}
      >
        {label}
      </label>
      {type === "textarea" && (
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={`formInput-${label}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
      )}
      {type === "select" && (
        <select
          id={`formInput-${label}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option>{placeholder}</option>
          {options}
        </select>
      )}
      {type !== "textarea" && type !== "select" && (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
