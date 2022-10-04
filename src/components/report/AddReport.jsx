import React from 'react'

const AddReport = ({handleModalFunction}) => {
  return (
    <>
    <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden  fixed  z-50 pl-[36rem] mt-36  w-full md:inset-0 md:h-full justify-center items-center"
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
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  min="15"
                  name="product_name"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required="true"
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                   Product Name
                </label>
              </div>

              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  pattern="^\d*(\.\d{0,1})?$"
                  name="product_size"
                  className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-700 appearance-none  dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                  required="true"
                />
                <label className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Product Size
                </label>
              </div>
              
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
            <select className="block py-2.5 px-0 mb-7 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                <option selected>Status</option>
                <option value="true">Succeed</option>
                <option value="false">Declined</option>
            </select>

            <select 
            required="true"
            className="block py-2.5 px-0 mb-7 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                <option selected>Choose Buying Site</option>
                <option value="US">Nike</option>
                <option value="CA">Adidas</option>
                <option value="FR">Footsite</option>
                <option value="DE">Shopify</option>
            </select>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
            <select className="block py-2.5 px-0 mb-7 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                <option selected>Bot Vendor</option>
                <option value="wb">Wrath Bot</option>
                <option value="whb">What Bot</option>
                <option value="tk">Trickle</option>
            </select>

            <select className="block py-2.5 px-0 mb-7 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                <option selected>Proxy Vendor</option>
                <option value="true">Proxy Strom</option>
                <option value="false">Some Proxy</option>
            </select>
            </div>


            <div className="grid md:grid-cols-2 md:gap-6">
            <select className="block py-2.5 px-0 mb-7 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                <option selected>Profile</option>
                <option value="wb">Profile One</option>
                <option value="whb">Profle Two</option>
                <option value="tk">Profile Three</option>
            </select>

            <select className="block py-2.5 px-0 mb-7 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                <option selected>Card</option>
                <option value="wb">Card One</option>
                <option value="whb">Card Two</option>
                <option value="tk">Card Three</option>
            </select>
            </div>
            
            <button
              type="submit"
              className="w-full  text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddReport