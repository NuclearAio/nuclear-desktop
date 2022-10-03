import React, {useState, useEffect, useContext } from "react";

import TitleContext from "../context/page-title/TitleContext";
import PageHeading from "../components/PageHeading";

import ProxyData from "../components/proxy/ProxyData";
import AddProxy from "../components/proxy/AddProxy";

const Proxies = () => {
  const { setTitle } = useContext(TitleContext);
  const [showProxyModal, setShowProxyModal] = useState(false)
  
  useEffect(() => {
    setTitle("Proxies");
  }, []);

  const handleProxyModal = () => {
    return showProxyModal ? setShowProxyModal(false) : setShowProxyModal(true)
  }

  return (
    <div className="">
      {/* <PageHeading pageTitle={'Proxies'} totalItems={5} /> */}
      <ProxyData />
      {showProxyModal ? (
        <AddProxy handleModalFunction={handleProxyModal}/>
      ) : null}
      <div className="max-w-screen flex gap-7 ">
        {/* Proxy Performance Section */}
        <section className=" w-80 mt-[3.3rem] h-[21.3rem] bg-primary">
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
                <th className="p-3 font-bold">SUCCES RATE %</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Wrath Bot</p>
                </td>
                <td className="p-3">
                  <p className="text-center">42</p>
                </td>
              </tr>

              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Wrath Bot</p>
                </td>
                <td className="p-3">
                  <p className="text-center">42</p>
                </td>
              </tr>

              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Wrath Bot</p>
                </td>
                <td className="p-3">
                  <p className="text-center">42</p>
                </td>
              </tr>

              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Wrath Bot</p>
                </td>
                <td className="p-3">
                  <p className="text-center">42</p>
                </td>
              </tr>
              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Wrath Bot</p>
                </td>
                <td className="p-3">
                  <p className="text-center">42</p>
                </td>
              </tr>
              <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12">
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p className="">Wrath Bot</p>
                </td>
                <td className="p-3">
                  <p className="text-center">42</p>
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
        


        {/* Proxies Table  */}
        <section style={{ width: "52rem" }} className=" w-full -mx-3">
          <aside>
            <div className="flex  justify-end mr-9 gap-3 ">
              <button
              onClick={handleProxyModal}
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
                    <th className="p-3 font-bold">TITLE</th>
                    <th className="p-3 font-bold">IP ADDRESS</th>
                    <th className="p-3 font-bold">PORT</th>
                    <th className="p-3 font-bold">USERNAME</th>
                    <th className="p-3 font-bold ">VENDOR</th>
                    <th className="p-3 font-bold ">COST</th>
                    <th className="p-3 font-bold px-6">ACTION</th>
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
  );
};

export default Proxies;
