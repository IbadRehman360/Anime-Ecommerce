import Link from "next/link";

export default function Example() {
  return (
    <div className="grid grid-cols-1 items-center justify-center    bg-gray-50 py-8 pb-20 md:py-20 md:grid-cols-2">
      <div className="  border-r-2 opacity-90  ">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md md:px-6 px-4 ">
          <h2 className="text-3xl font-extrabold leading-9   uppercase text-center text-gray-900">
            LOGIN
          </h2>
          <p className="text-center mt-6 mb-10 font-medium text-gray-600">
            Please enter your e-mail and password:
          </p>
          <form action="#" method="POST" className="space-y-6">
            <div className="mb-4">
              <div className="mt-2 relative rounded-sm shadow-sm">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="E-mail"
                  className="block w-full py-2.5 px-3 border border-gray-300 rounded-md placeholder-none sm:text-sm"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="mt-2 relative rounded-sm shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  className="block w-full py-2.5 px-3 border border-gray-300 rounded-md placeholder-none sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 text-gray-700 text-[0.85rem] hover:text-gray-500"
                >
                  Remember me
                </label>
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
                className="flex w-full justify-center rounded-md bg-black hover:opacity-90 px-3 py-2.5 text-[0.85rem] font-bold uppercase leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <button className="relative bg-white rounded-lg border p-1.5 gsi-material-button">
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
            <div className="relative py-6 md:hidden">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-black" />
              </div>
              <div className="relative flex justify-center text-sm leading-6">
                <span className="  px-6 text-gray-900 font-bungee">
                  Or continue with
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" opacity-90 mt-4  px-10 2xl:px-20  ">
        <div>
          <h2 className="text-3xl font-extrabold leading-9 uppercase text-center text-gray-900">
            REGISTER
          </h2>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-[0.9rem] md:text-[0.94rem] tracking-wide leading-6">
            Registering up on our website grants you instant access to your
            order status and complete order history. Just provide the requested
            information below, and we'll swiftly establish your new account.
            Rest assured, we'll only request the essential details to expedite
            and simplify your future purchases.
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <Link
            href="/register"
            className="inline-block px-6 py-3.5 text-xs font-bungee tracking-wider bg-black text-white rounded hover:opacity-90 hover:underline"
          >
            <span>New customer?</span> REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
}
