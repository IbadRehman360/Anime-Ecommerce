"use client";
import { useForm } from "react-hook-form";
import PasswordStrengthBar from "react-password-strength-bar";
import InputField from "./SignResgister/InputField";

function Register() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {};

  return (
    <div>
      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Username"
          id="username"
          name="username"
          control={control}
          error={errors.username}
        />

        <InputField
          label="Email"
          id="email"
          name="email"
          control={control}
          error={errors.email}
        />

        <InputField
          label="Password"
          id="password"
          name="password"
          control={control}
          error={errors.password}
          type="password"
        />

        <InputField
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          control={control}
          error={errors.confirmPassword}
          type="password"
        />

        <PasswordStrengthBar
          password={password}
          scoreWordClassName="capitalize"
        />

        <button
          type="submit"
          className="flex mb-10  lg:mb-0 w-full justify-center rounded-md bg-black hover:opacity-90 px-3 py-2.5 text-[0.85rem] font-bold uppercase leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
