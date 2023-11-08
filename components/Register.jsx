"use client";
import { useForm } from "react-hook-form";
import PasswordStrengthBar from "react-password-strength-bar";
import InputField from "./SignResgister/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Register() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  watch();
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    if (!data.password || !data.username || !data.email) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      const { user } = await resUserExists.json();
      console.log(user);
      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

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
        <pre> {JSON.stringify(watch(), null, 2)} </pre>
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
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
