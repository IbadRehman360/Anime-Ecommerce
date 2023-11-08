"use client";

import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

function GoogleProviders() {
  const [providers, setProviders] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await getProviders();
        setProviders(res);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);
  console.log(providers);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mt-4 border-2">
        <button
          type="button"
          onClick={() => signIn(providers.google.id)}
          className="relative bg-white rounded-lg border p-1.5 gsi-material-button"
        >
          <div className="flex items-center gsi-material-button-content-wrapper justify-center">
            <div className="p-2 bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="h-5 w-5 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className=" h-5 w-5 text-white"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </svg>
            </div>
            <span className="ml-2 font-bold text-center uppercase text-[0.85rem]">
              Sign in with Google
            </span>
            <span className="hidden font-bold uppercase text-[0.85rem] text-center">
              Sign in with Google
            </span>
          </div>
        </button>
      </div>
      <div className="relative py-12 md:hidden">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-black" />
        </div>
        <div className="relative flex justify-center text-sm leading-6">
          <span className="   text-gray-900 font-bungee">Or continue with</span>
        </div>
      </div>
    </>
  );
}

export default GoogleProviders;
