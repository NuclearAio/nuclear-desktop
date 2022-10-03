import React, {useEffect, useContext, useState} from 'react'

import TitleContext from "../context/page-title/TitleContext";

import BotData from '../components/bot/BotData'
import AddBot from '../components/bot/AddBot';
import UnSubscribe from '../components/bot/UnSubscribe';

const Bot = () => {
  const { setTitle } = useContext(TitleContext);
  const [showBotModal, setShowBotModal] = useState(false)
  const [showBotUnsbscribeModal, setShowBotUnsubscribeModal] = useState(false)
  useEffect(() => {
    setTitle("Bots");
  }, []);

  const handleBotModal = () => {
    showBotModal ? setShowBotModal(false) : setShowBotModal(true)
  }

  const handleBotUnsubscribeModal = () =>{
    return showBotUnsbscribeModal ? setShowBotUnsubscribeModal(false) : setShowBotUnsubscribeModal(true)
  }


  return (
    <div>
      <BotData/>
      {showBotModal ? <AddBot handleModalFunction={handleBotModal}/> : null}
      {showBotUnsbscribeModal ? <UnSubscribe handleModalFunction={handleBotUnsubscribeModal}/> : null}
      
        {/* Proxies Table  */}
        <section className=" w-full">
          <aside>
            <div className="flex  justify-end mr-9 gap-3 ">
              <button
              onClick={handleBotModal}
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
                    <th className="p-3 font-bold">BOT NAME</th>
                    <th className="p-3 font-bold">BOT PRICE /M</th>
                    <th className="p-3 font-bold ">RAN</th>
                    <th className="p-3 font-bold">DECLINE</th>
                    <th className="p-3 font-bold">SUCCESS</th>
                    <th className="p-3 font-bold ">SUCCESS RATE %</th>
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
                      <p>Wrath Aio</p>
                    </td>
                    <td className="p-3">
                      <p className="ml-7">35</p>
                    </td>
                    <td className="p-3">
                      <p className="">80</p>
                    </td>
                    <td className="p-3">
                      <p className="">20</p>
                    </td>
                    <td className="p-3">
                      <p className="">60</p>
                    </td>
                    <td className="p-3">
                      <p className="font-bold text-white py-2 px-2 rounded-full bg-secondary-200 bg-opacity-70 w-fit ml-10">25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span
                      onClick={handleBotUnsubscribeModal}
                       className="px-3 p-1 font-semibold rounded-md bg-red-600 hover:bg-red-800 text-white bg-opacity-90 cursor-pointer transition delay-100 ease-in">
                      <i class="ri-delete-bin-2-line"></i>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary">
                    <td className="p-3">
                      <p>1</p>
                    </td>
                    <td className="p-3">
                      <p>Wrath Aio</p>
                    </td>
                    <td className="p-3">
                      <p className="ml-7">35</p>
                    </td>
                    <td className="p-3">
                      <p className="">80</p>
                    </td>
                    <td className="p-3">
                      <p className="">20</p>
                    </td>
                    <td className="p-3">
                      <p className="">60</p>
                    </td>
                    <td className="p-3">
                      <p className="font-bold text-white py-2 px-2 rounded-full bg-secondary-200 bg-opacity-70 w-fit ml-10">25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span
                      onClick={handleBotUnsubscribeModal}
                       className="px-3 p-1 font-semibold rounded-md bg-red-600 hover:bg-red-800 text-white bg-opacity-90 cursor-pointer transition delay-100 ease-in">
                      <i class="ri-delete-bin-2-line"></i>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary">
                    <td className="p-3">
                      <p>1</p>
                    </td>
                    <td className="p-3">
                      <p>Wrath Aio</p>
                    </td>
                    <td className="p-3">
                      <p className="ml-7">35</p>
                    </td>
                    <td className="p-3">
                      <p className="">80</p>
                    </td>
                    <td className="p-3">
                      <p className="">20</p>
                    </td>
                    <td className="p-3">
                      <p className="">60</p>
                    </td>
                    <td className="p-3">
                      <p className="font-bold text-white py-2 px-2 rounded-full bg-secondary-200 bg-opacity-70 w-fit ml-10">25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span
                      onClick={handleBotUnsubscribeModal}
                       className="px-3 p-1 font-semibold rounded-md bg-red-600 hover:bg-red-800 text-white bg-opacity-90 cursor-pointer transition delay-100 ease-in">
                      <i class="ri-delete-bin-2-line"></i>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary">
                    <td className="p-3">
                      <p>1</p>
                    </td>
                    <td className="p-3">
                      <p>Wrath Aio</p>
                    </td>
                    <td className="p-3">
                      <p className="ml-7">35</p>
                    </td>
                    <td className="p-3">
                      <p className="">80</p>
                    </td>
                    <td className="p-3">
                      <p className="">20</p>
                    </td>
                    <td className="p-3">
                      <p className="">60</p>
                    </td>
                    <td className="p-3">
                      <p className="font-bold text-white py-2 px-2 rounded-full bg-secondary-200 bg-opacity-70 w-fit ml-10">25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span
                      onClick={handleBotUnsubscribeModal}
                       className="px-3 p-1 font-semibold rounded-md bg-red-600 hover:bg-red-800 text-white bg-opacity-90 cursor-pointer transition delay-100 ease-in">
                      <i class="ri-delete-bin-2-line"></i>
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-50 text-xs border-gray-700 bg-primary">
                    <td className="p-3">
                      <p>1</p>
                    </td>
                    <td className="p-3">
                      <p>Wrath Aio</p>
                    </td>
                    <td className="p-3">
                      <p className="ml-7">35</p>
                    </td>
                    <td className="p-3">
                      <p className="">80</p>
                    </td>
                    <td className="p-3">
                      <p className="">20</p>
                    </td>
                    <td className="p-3">
                      <p className="">60</p>
                    </td>
                    <td className="p-3">
                      <p className="font-bold text-white py-2 px-2 rounded-full bg-secondary-200 bg-opacity-70 w-fit ml-10">25</p>
                    </td>
                    <td className="p-3 ml-4 text-right flex gap-">
                      <span
                      onClick={handleBotUnsubscribeModal}
                       className="px-3 p-1 font-semibold rounded-md bg-red-600 hover:bg-red-800 text-white bg-opacity-90 cursor-pointer transition delay-100 ease-in">
                      <i class="ri-delete-bin-2-line"></i>
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
  )
}

export default Bot