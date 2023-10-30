import React, { useRef, useState } from "react";
import { Controller } from "react-hook-form";

const InputField = ({ label, id, name, control, error, type = "text" }) => {
  const [isLabelUp, setIsLabelUp] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setIsLabelUp(true);
  };

  const handleInputBlur = () => {
    if (inputRef.current) {
      if (!inputRef.current.value) {
        setIsLabelUp(false);
      }
    }
  };

  return (
    <div className="mt-2">
      <div className="relative">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id={id}
              ref={(el) => {
                field.ref(el);
                inputRef.current = el;
              }}
              onClick={handleInputClick}
              onBlur={handleInputBlur}
              type={type}
              autocomplete="false"
              readonly
              className="block w-full py-3 px-3 border border-gray-300 rounded-md placeholder-none sm:text-sm"
            />
          )}
        />
        <label
          htmlFor={id}
          autocomplete="autocomplete_off_randString"
          className={`absolute left-3 transform ${
            isLabelUp
              ? "-top-2 text-xs tracking-wider bg-white px-1"
              : "bottom-3 block text-sm tracking-wider leading-6 text-gray-900"
          }`}
        >
          {label}
        </label>
      </div>
      {error && <p className="text-red-600">{error.message}</p>}
    </div>
  );
};

export default InputField;
