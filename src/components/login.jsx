import React, { useState } from "react";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown(!passwordShown);

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <h3 className="text-3xl mb-2 text-blue-gray">
          Sign In
        </h3>
        <p className="text-gray-600 mb-16 text-lg font-normal">
          Enter your email and password to sign in
        </p>
        <form className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block font-medium text-gray-900">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-400 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="mb-2 block font-medium text-gray-900">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={passwordShown ? "text" : "password"}
                placeholder="********"
                className="w-full px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-400 border border-gray-300 rounded-lg pr-12"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
              >
                {passwordShown ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M1 10a9 9 0 1118 0 9 9 0 01-18 0zm9-7a7 7 0 00-7 7 1 1 0 102 0 5 5 0 0110 0 1 1 0 102 0 7 7 0 00-7-7z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M2.636 6.364a7 7 0 1014.728 4.728l-1.06-1.06a5 5 0 11-6.248-6.248l-1.06-1.06A7 7 0 002.636 6.364zM9 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button className="bg-gray-700 text-white py-3 px-6 mt-6 w-full rounded-lg hover:bg-gray-600">
            Sign In
          </button>
          <div className="mt-4 flex justify-end">
            <a href="#" className="text-blue-gray font-medium text-sm">Forgot password</a>
          </div>
          <button className="border border-gray-300 text-gray-700 py-3 px-6 mt-6 w-full rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="google"
              className="h-6 w-6"
            />{" "}
            Sign In with Google
          </button>
          <p className="mt-4 text-center text-gray-900 font-normal">
            Not registered?{" "}
            <a href="#" className="font-medium text-gray-900">
              Create account
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
