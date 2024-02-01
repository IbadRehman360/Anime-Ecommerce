import { useForm, Controller } from "react-hook-form";
import styles from "../SignResgister/styles.module.css";

const FormFields = ({
  label,
  name,
  type,
  autoComplete,
  rules,
  control,
  id,
  children,  
}) => {
  return (
    <div className={`${styles.root} ${styles.box} w-full`}>
      <div className={styles.input__wrapper}>
        {type !== "select" ? (
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
              <input
                {...field}
                id={id}
                type={type}
                title="Minimum 6 characters, at least 1 Alphabet and 1 Number"
                placeholder={label}
                value={field.value}
                autoComplete={autoComplete}
                className={`${styles.input__field} block w-full py-3 px-3`}
              />
            )}
          />
        ) : (
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
              <select
                {...field}
                id={id}
                autoComplete={autoComplete}
                className={`${styles.input__field} block w-full py-3 px-3`}
              >
                {children}
              </select>
            )}
          />
        )}

        <label
          htmlFor={id}
          className={`  ${styles.input__label} font-poppins   -mt-3.5  `}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default FormFields;
