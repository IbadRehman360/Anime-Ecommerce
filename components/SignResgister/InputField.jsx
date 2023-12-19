import React from "react";
import { Controller } from "react-hook-form";
import styles from "./styles.module.css";

const InputField = ({ label, id, name, control, error, type = "text" }) => {
  return (
    <div className={`${styles.root} ${styles.box} w-full`}>
      <div className={styles.input__wrapper}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id={id}
              type={type}
              title="Minimum 6 characters, at least 1 Alphabet and 1 Number"
              placeholder={label}
              className={`${styles.input__field}    block w-full  py-3 px-3 `}
            />
          )}
        />
        <label
          htmlFor={id}
          className={`  ${styles.input__label} font-poppins   -mt-3.5  `}
        >
          {label}
        </label>
      </div>
      {error && <p className={styles["text-red-600"]}>{error.message}</p>}
    </div>
  );
};

export default InputField;
