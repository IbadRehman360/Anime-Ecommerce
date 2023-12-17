"use client";

import { useForm, Controller } from "react-hook-form";
import InputField from "../SignResgister/InputField";
import GoogleProviders from "./GoogleProviders";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res.ok) {
        router.push("/");
      } else {
        setError("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          name="email"
          label="E-mail"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
          placeholder="E-mail"
          type="email"
        />

        <InputField
          name="password"
          control={control}
          label="Password"
          rules={{ required: "Password is required" }}
          error={errors.password}
          type="password"
        />
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Controller
              name="rememberMe"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 text-gray-700 text-[0.85rem] hover:text-gray-500"
                  >
                    Remember me
                  </label>
                </>
              )}
            />
          </div>
          <div className="text-sm leading-6">
            <a
              href="#"
              className="text-gray-700 text-[0.85rem] hover:text-gray-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex mt-6 w-full justify-center rounded-md bg-black hover:opacity-90 px-3 py-2.5 text-[0.85rem] font-bold uppercase leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
      <GoogleProviders formData={getValues()} />
    </div>
  );
}
