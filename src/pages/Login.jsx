import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../context/auth/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(false);

  const handleLogin = async(e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const isLogin = await login(username, password);

    if(!isLogin){
        return setError(true)
    }

  };

  return (
    <>
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      className=" bg-base overflow-y-auto overflow-x-hidden pl-[30rem] pt-48  fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-primary rounded-lg shadow ">
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-6 text-5xl font-bold  text-center tracking-tighter">
              Login
            </h3>
            <form onSubmit={handleLogin} className="space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium ">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="bg-gray-700  focus:outline-none   text-sm rounded-lg block w-full p-2.5 "
                  placeholder="aditya_pushkar"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className=" bg-gray-700 text-sm focus:outline-none rounded-lg lock w-full p-2.5 "
                  required={true}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 border-2 border-green-800 transition delay-100 ease-in"
              >
                Login to your account
              </button>
              {error ? (
                <div>
                <p className="font-light text-xs text-red-500 -mb-5">Account not found, please put right credentials.</p>
              </div>
              ) : null}
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <Link
                  to="/dashboard"
                  className="text-green-600 hover:underline "
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
