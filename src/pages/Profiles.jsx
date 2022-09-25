import React, {useEffect, useContext} from 'react';
import TitleContext from '../context/page-title/TitleContext';
import PageHeading from '../components/PageHeading'

const Profiles = () => {
  const {setTitle} = useContext(TitleContext)

  useEffect(()=>{
    setTitle("Profiles")
  }, [])

  return (
    <div className="">
      <PageHeading pageTitle={'Profiles'} totalItems={11} />
      <aside>
        <div className="flex  justify-end mr-9 gap-3 ">
          <button type="button" className="px-3 py-1 border-opacity-5 shadow border-2 border-gray-700  hover:bg-hover rounded-md tracking-tighter bg-secondary-100 transition delay-100 ease-in">
            <spam className="p-2.5 text-center font-semibold ">
              Add
            </spam>
          </button>
          <button type="button" className="px-3 py-1 shadow-inner rounded-md tracking-tighter bg-red-600  transition delay-100 ease-in hover:bg-red-700">
            <spam className="text-white text-opacity-80 text-center font-semibold">
              Delete all
            </spam>
          </button>
          
        </div>
      </aside>
      <div className="container p-2 mx-auto sm:p-4 -ml-4">
        <div style={{"maxHeight": "30rem"}} className="overflow-x-auto h-screen">
          <table className="min-w-full ">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
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
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line"></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 text-xs dark:border-gray-700 bg-primary">
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
                  <p>29b, ghasipura extn. colony, nagli sakarawait, najafgarh</p>
                </td>
                <td className="p-3">
                  <p>1234567890</p>
                </td>
                <td className="p-3 text-right flex gap-2">
                  <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover transition delay-100 ease-in">
                  <i class="ri-book-open-line "></i>
                  </span>
                  <span className="px-3 py-1 font-semibold rounded-md bg-red-600 hover:bg-red-700 transition delay-100 hover:shadow-2xl ease-in">
                  <i class="ri-delete-bin-7-line text-white"></i>
                  </span>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
