import React, {useEffect, useContext, useState} from 'react'

import TitleContext from "../context/page-title/TitleContext";

import InventoryData from '../components/inventory/InventoryData';
import AddInventory from '../components/inventory/AddInventory';
import UpdateInventory from '../components/inventory/UpdateInventory';

const Inventory = () => {
  const { setTitle } = useContext(TitleContext);
  const [showInventoryModal, setInventoryModal] = useState(false)
  const [showUpdateInventoryModal, setShowUpdateInventory] = useState(false)

  useEffect(() => {
    setTitle("Inventory");
  }, []);

  const handleInventoryModal = () => {
    return showInventoryModal ? setInventoryModal(false) : setInventoryModal(true)
  }

  const handleUpdateInventoryModal = () => {
    return showUpdateInventoryModal ? setShowUpdateInventory(false) : setShowUpdateInventory(true)
  }

  return (
    <div>
      <InventoryData/>
      {showInventoryModal ? <AddInventory handleModalFunction={handleInventoryModal}/> : null}
      {showUpdateInventoryModal ? <UpdateInventory handleModalFunction={handleUpdateInventoryModal}/> : null}
      
      <div className='flex gap-72 tracking-tighter font-semibold text-3xl ml-1 mt-10 -mb-10 '>
        <h1>Unsold</h1>
        <h1>Sold</h1>
      </div>
      <div className="max-w-screen flex gap-7 ">
        {/* Unsold Shoes*/}
        <section className=" w-96 mt-[3.3rem] h-[21.3rem] bg-primary">
          <table className="min-w-full border-b-2 border-hidden">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="bg-secondary-100 text-xs ">
              <tr className="text-left ">
                <th className="p-3 font-bold">S NO.</th>
                <th className="p-3 font-bold">Name</th>
                <th className="p-3 font-bold">SIZE</th>
                <th className="p-3 font-bold ">BUYING PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr 
              onClick={handleUpdateInventoryModal}
              className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12 hover:bg-hover delay-100 ease-in cursor-pointer ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Adidas nilke duty</p>
                </td>
                <td className="p-3">
                  <p className="">240</p>
                </td>
                <td className="p-3">
                  <p className="pl-6">4200</p>
                </td>
              </tr>

              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12 hover:bg-hover delay-100 ease-in cursor-pointer ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Adidas nilke duty</p>
                </td>
                <td className="p-3">
                  <p className="">240</p>
                </td>
                <td className="p-3">
                  <p className="pl-6">4200</p>
                </td>
              </tr>

              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12 hover:bg-hover delay-100 ease-in cursor-pointer ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Adidas nilke duty</p>
                </td>
                <td className="p-3">
                  <p className="">240</p>
                </td>
                <td className="p-3">
                  <p className="pl-6">4200</p>
                </td>
              </tr>

              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12 hover:bg-hover delay-100 ease-in cursor-pointer ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Adidas nilke duty</p>
                </td>
                <td className="p-3">
                  <p className="">240</p>
                </td>
                <td className="p-3">
                  <p className="pl-6">4200</p>
                </td>
              </tr>

              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12 hover:bg-hover delay-100 ease-in cursor-pointer ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Adidas nilke duty</p>
                </td>
                <td className="p-3">
                  <p className="">240</p>
                </td>
                <td className="p-3">
                  <p className="pl-6">4200</p>
                </td>
              </tr>
              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12 hover:bg-hover delay-100 ease-in cursor-pointer ">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Adidas nilke duty</p>
                </td>
                <td className="p-3">
                  <p className="">240</p>
                </td>
                <td className="p-3">
                  <p className="pl-6">4200</p>
                </td>
              </tr>
              
              
            </tbody>
          </table>
          <aside>
            <div className="flex  justify-end gap-1.5 mt-7 mr-1">
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
        </section>
        


        {/* Sold Shoes */}
        <section style={{ width: "52rem" }} className=" w-full -mx-3">
          <aside>
            <div className="flex  justify-end mr-9 gap-3 ">
              <button
              onClick={handleInventoryModal}
                type="button"
                className="px-3 py-1 border-opacity-5 shadow border-2 border-gray-700  hover:bg-hover rounded-md tracking-tighter bg-secondary-100 transition delay-100 ease-in"
              >
                <span className="p-2.5 text-center font-semibold ">Add</span>
              </button>
            </div>
          </aside>
          {/* <h1 className='text-center text-3xl font-semibold tracking-tighter'>Proxies</h1> */}
          <div className="container p-2 mx-auto sm:p-4 -ml-4">
            <div style={{ maxHeight: "30rem" }} className="h-full">
              <table className="min-w-full border-b-2 border-hidden">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="bg-secondary-100 text-xs ">
                  <tr className="text-left ">
                    <th className="p-3 font-bold">S NO.</th>
                    <th className="p-3 font-bold">NAME</th>
                    <th className="p-3 font-bold">SIZE</th>
                    <th className="p-3 font-bold">BUY'S</th>
                    <th className="p-3 font-bold">SELL'S</th>
                    <th className="p-3 font-bold">DELEVIRY'S</th>
                    <th className="p-3 font-bold ">MARGIN</th>
                    <th className="p-3 font-bold ">MARGIN %</th>
                    {/* PUT PASS IN  DETAIL MODAL*/}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary">
                    <td className="p-3">
                      <p>1</p>
                    </td>
                    <td className="p-3">
                      <p>uses in nike</p>
                    </td>
                    <td className="p-3">
                      <p className="">123.45.452.56</p>
                    </td>
                    <td className="p-3">
                      <p className="">8000</p>
                    </td>
                    <td className="p-3">
                      <p className="">aditya</p>
                    </td>
                    <td className="p-3">
                      <p>aditya@13:500</p>
                    </td>
                    <td className="p-3">
                      <p>$ 25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
                        <i class="ri-book-open-line "></i>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary">
                    <td className="p-3">
                      <p>1</p>
                    </td>
                    <td className="p-3">
                      <p>uses in nike</p>
                    </td>
                    <td className="p-3">
                      <p className="">123.45.452.56</p>
                    </td>
                    <td className="p-3">
                      <p className="">8000</p>
                    </td>
                    <td className="p-3">
                      <p className="">aditya</p>
                    </td>
                    <td className="p-3">
                      <p>aditya@13:500</p>
                    </td>
                    <td className="p-3">
                      <p>$ 25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
                        <i class="ri-book-open-line "></i>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary">
                    <td className="p-3">
                      <p>1</p>
                    </td>
                    <td className="p-3">
                      <p>uses in nike</p>
                    </td>
                    <td className="p-3">
                      <p className="">123.45.452.56</p>
                    </td>
                    <td className="p-3">
                      <p className="">8000</p>
                    </td>
                    <td className="p-3">
                      <p className="">aditya</p>
                    </td>
                    <td className="p-3">
                      <p>aditya@13:500</p>
                    </td>
                    <td className="p-3">
                      <p>$ 25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
                        <i class="ri-book-open-line "></i>
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary">
                    <td className="p-3">
                      <p>1</p>
                    </td>
                    <td className="p-3">
                      <p>uses in nike</p>
                    </td>
                    <td className="p-3">
                      <p className="">123.45.452.56</p>
                    </td>
                    <td className="p-3">
                      <p className="">8000</p>
                    </td>
                    <td className="p-3">
                      <p className="">aditya</p>
                    </td>
                    <td className="p-3">
                      <p>aditya@13:500</p>
                    </td>
                    <td className="p-3">
                      <p>$ 25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
                        <i class="ri-book-open-line "></i>
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary">
                    <td className="p-3">
                      <p>1</p>
                    </td>
                    <td className="p-3">
                      <p className="">uses in nike</p>
                    </td>
                    <td className="p-3">
                      <p className="">123.45.452.56</p>
                    </td>
                    <td className="p-3">
                      <p className="">8000</p>
                    </td>
                    <td className="p-3">
                      <p className="">aditya</p>
                    </td>
                    <td className="p-3">
                      <p>aditya@13:500</p>
                    </td>
                    <td className="p-3">
                      <p>$ 25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
                        <i class="ri-book-open-line "></i>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary">
                    <td className="p-3">
                      <p>1</p>
                    </td>
                    <td className="p-3">
                      <p>uses in nike</p>
                    </td>
                    <td className="p-3">
                      <p className="">123.45.452.56</p>
                    </td>
                    <td className="p-3">
                      <p className="">8000</p>
                    </td>
                    <td className="p-3">
                      <p className="">aditya</p>
                    </td>
                    <td className="p-3">
                      <p>aditya@13:500</p>
                    </td>
                    <td className="p-3">
                      <p>$ 25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span className="px-3 p-1 font-semibold rounded-md bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
                        <i class="ri-book-open-line "></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <aside>
                <div className="flex  justify-end gap-1.5 mt-5 mr-1">
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
        </section>
      </div>
    </div>
  )
}

export default Inventory