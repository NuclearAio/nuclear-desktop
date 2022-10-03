import React, { useState, useEffect, useContext } from "react";

import TitleContext from "../context/page-title/TitleContext";
import PageHeading from "../components/PageHeading";

import AddProfile from "../components/profile/AddProfile";


const Profiles = () => {
  const { setTitle } = useContext(TitleContext);
  const [showProfileModal, setShoeProfileModal] = useState(false)

  const handleProfileModal = () => {
    return showProfileModal ? setShoeProfileModal(false) : setShoeProfileModal(true)
  }

  useEffect(() => {
    setTitle("Profiles");
  }, []);

  return (
    <div className="">
      <PageHeading pageTitle={"Profiles"} totalItems={11} />
      {
        showProfileModal ? <AddProfile handleModalFunction={handleProfileModal}/> : null
      }
      <aside>
        <div className="flex  justify-end mr-9 gap-3 ">
          <button
          onClick={handleProfileModal}
            type="button"
            className="px-3 py-1 border-opacity-5 shadow border-2 border-gray-700  hover:bg-hover rounded-md tracking-tighter bg-secondary-100 transition delay-100 ease-in"
          >
            <spam className="p-2.5 text-center font-semibold ">Add</spam>
          </button>
        </div>
      </aside>
      <div className="container p-2 mx-auto sm:p-4 -ml-4 ">
        <div style={{ maxHeight: "30rem" }} className="">
          <table className="min-w-full border-b-2 border-hidden">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="bg-secondary-100 text-xs">
              <tr className="text-left ">
                <th className="p-3 font-bold">S NO.</th>
                <th className="p-3 font-bold">TITLE</th>
                <th className="p-3 font-bold">NAME</th>
                <th className="p-3 font-bold">EMAIL</th>
                <th className="p-3 font-bold text-center">ADDR'S 1</th>
                <th className="p-3 font-bold">PHONE</th>
                <th className="p-3 font-bold text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p>Add on nike</p>
                </td>
                <td className="p-3">
                  <p className="">Aditya Pushkar</p>
                </td>
                <td className="p-3">
                  <p className="">aditya@gmail.com</p>
                </td>
                <td className="p-3">
                  <p>
                    29b, ghasipura extn. colony, nagli sakarawait, najafgarh
                  </p>
                </td>
                <td className="p-3">
                  <p>34567890</p>
                </td>
                <td className="p-3 text-right flex gap-2 ml-4 cursor-pointer">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                    <i class="ri-book-open-line "></i>
                  </span>
                  
                </td>
              </tr>
              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p>Add on nike</p>
                </td>
                <td className="p-3">
                  <p className="">Aditya Pushkar</p>
                </td>
                <td className="p-3">
                  <p className="">aditya@gmail.com</p>
                </td>
                <td className="p-3">
                  <p>
                    29b, ghasipura extn. colony, nagli sakarawait, najafgarh
                  </p>
                </td>
                <td className="p-3">
                  <p>34567890</p>
                </td>
                <td className="p-3 text-right flex gap-2 ml-4 cursor-pointer">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                    <i class="ri-book-open-line "></i>
                  </span>
                  
                </td>
              </tr>
              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p>Add on nike</p>
                </td>
                <td className="p-3">
                  <p className="">Aditya Pushkar</p>
                </td>
                <td className="p-3">
                  <p className="">aditya@gmail.com</p>
                </td>
                <td className="p-3">
                  <p>
                    29b, ghasipura extn. colony, nagli sakarawait, najafgarh
                  </p>
                </td>
                <td className="p-3">
                  <p>34567890</p>
                </td>
                <td className="p-3 text-right flex gap-2 ml-4 cursor-pointer">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                    <i class="ri-book-open-line "></i>
                  </span>
                  
                </td>
              </tr>
              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p>Add on nike</p>
                </td>
                <td className="p-3">
                  <p className="">Aditya Pushkar</p>
                </td>
                <td className="p-3">
                  <p className="">aditya@gmail.com</p>
                </td>
                <td className="p-3">
                  <p>
                    29b, ghasipura extn. colony, nagli sakarawait, najafgarh
                  </p>
                </td>
                <td className="p-3">
                  <p>34567890</p>
                </td>
                <td className="p-3 text-right flex gap-2 ml-4 cursor-pointer">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                    <i class="ri-book-open-line "></i>
                  </span>
                  
                </td>
              </tr>
              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p>Add on nike</p>
                </td>
                <td className="p-3">
                  <p className="">Aditya Pushkar</p>
                </td>
                <td className="p-3">
                  <p className="">aditya@gmail.com</p>
                </td>
                <td className="p-3">
                  <p>
                    29b, ghasipura extn. colony, nagli sakarawait, najafgarh
                  </p>
                </td>
                <td className="p-3">
                  <p>34567890</p>
                </td>
                <td className="p-3 text-right flex gap-2 ml-4 cursor-pointer">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                    <i class="ri-book-open-line "></i>
                  </span>
                  
                </td>
              </tr>
             
            </tbody>
          </table>
          <aside>
        <div className="flex  justify-end gap-1.5 mt-5">
          <button className="inline-flex h-8 w-8 items-center justify-center rounded bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <p class="text-sm pt-1.5">
            3<span class="mx-0.25">/</span>
            12
          </p>

          <button class="inline-flex h-8 w-8 items-center justify-center rounded bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </aside>
        </div>
      </div>
      
    </div>
  );
};

export default Profiles;
