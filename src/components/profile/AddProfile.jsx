import React from "react";

const AddProfile = ({ handleModalFunction }) => {
  return (
    <div>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden  fixed  z-50 pl-[36rem] w-full md:inset-0 md:h-full justify-center items-center"
      >
        <div className="relative p-10 w-fit max-w-md h-full md:h-auto bg-secondary-100 mt-40">
          <div className=" bg-secondary-100 shadow-lg">
            <button
              onClick={handleModalFunction}
              type="button"
              className="absolute top-3 right-2.5 bg-transparent hover:bg-hover rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition delay-100 ease-in"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form>
            {/* <h3 className="mb-4 text-3xl font-semibold  tracking-tighter -mt-2">
              Add Profile
            </h3> */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="title"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required="true"
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span className="text-red-500">* </span>Friendly Title
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="email"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required="true"
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span className="text-red-500">* </span> Email
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="first_name"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required="true"
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span className="text-red-500">* </span> First name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="last_name"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required=""
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Last name
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  min="0"
                  name="phone_number"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required=""
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span className="text-red-500">* </span> Phone number
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="country"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required="true"
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span className="text-red-500">* </span> Country
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="address_1"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required="true"
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span className="text-red-500">* </span> Address 1
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="address_2"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required=""
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Address 2
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="state"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required="true"
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span className="text-red-500">* </span> State
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="zip"
                  min="0"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required=""
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Zip
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
