import { useForm, Controller } from "react-hook-form";

const FormFields = ({ label, name, type, autoComplete, rules, control }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-2.5 tracking-wide">
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <input
              {...field}
              type={type}
              id={name}
              autoComplete={autoComplete}
              className="block w-full py-3 pl-2  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
      </div>
    </div>
  );
};

export default FormFields;
