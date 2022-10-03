import React from "react";

const AddProxy = ({ handleModalFunction }) => {
  const FormInputs = [
    {
      label: "Proxy Title",
      lableInput: "Friendly Proxy Title",
      type: "text",
      name: "proxy_title",
      required: "true",
    },
    {
      label: "Ip Address",
      lableInput: "123.45.654.34",
      type: "text",
      name: "ip_address",
      required: "false",
    },
    {
      label: "Port",
      lableInput: "8080",
      type: "number",
      name: "port",
      required: "true",
    },
    {
      label: "Username",
      lableInput: "Proxy Username",
      type: "text",
      name: "username",
      required: "true",
    },
    {
      label: "Vendor",
      lableInput: "Select your Vendor",
      type: "option",
      name: "vendor",
      required: "true",
    },
    {
      label: "Cost In ",
      lableInput: "Cost Of Proxy $",
      type: "number",
      name: "cost",
      required: "true",
    },
  ];
  return (
    <div>
      {/* <!-- Main modal --> */}
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden  fixed  z-50 pl-[36rem] w-full md:inset-0 md:h-full justify-center items-center"
      >
        <div className="relative p-16 w-full max-w-md h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-secondary-100 shadow-lg">
            <button
              onClick={handleModalFunction}
              type="button"
              className="absolute top-3 mb-4 right-2.5 bg-transparent hover:bg-hover rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition delay-100 ease-in"
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
            <div className="py-6 px-6 lg:px-8 ">
              
              <form className="space-y-6" action="#">
                {FormInputs.map((inputItem, key) =>
                  inputItem.label !== "Vendor" ? (
                    <div>
                      <label className="block mb-2 text-sm font-medium ">
                        {inputItem.label}
                      </label>
                      <input
                        type={`${inputItem.type}`}
                        name={`${inputItem.name}`}
                        className="text-sm rounded-lg  block w-full p-2.5 bg-base border border-primary focus:outline-none "
                        placeholder={`${inputItem.lableInput}`}
                        required="true"
                      />
                    </div>
                  ):  (

                      <>
                        <label
                          className="block  text-sm font-medium mt-20"
                        >
                          Proxy Vendor
                        </label>
                        <select
                          disabled=""
                          className="bg-base text-sm rounded-lg  block w-full p-2.5  focus:outline-none "
                        >
                          <option selected="">Choose your proxy vendor</option>
                          <option value="US" >United States</option>
                          <option value="CA" >Canada</option>
                          <option value="FR" >France</option>
                          <option value="DE">Germany</option>
                        </select>

                      </>
                      
                    
                  )
                )}

                <button
                  type="submit"
                  className="w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-white transition delay-100 ease-in focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProxy;
