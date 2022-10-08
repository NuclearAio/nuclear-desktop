import React, {useEffect, useContext, useState} from 'react';

import URL from '../../url'

import TitleContext from '../context/page-title/TitleContext';
import AuthContext from '../context/auth/AuthContext';

import Loader from '../components/Loader';
import Graph from '../components/dashboard/Graph';

const Dashboard = () => {
    
    const {setTitle} = useContext(TitleContext)
    const {authTokens} = useContext(AuthContext)
    const [botData, setBotData] = useState(null)
    const [currentUrl, setCurrentUrl] = useState(`${URL}/bot/success_rate/`)
    const [nextPage, setNextPage] = useState(null)
    const [previousPage, setPreviousPage] = useState(null)
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setTitle("Dashboard")
    }, [])

    useEffect(()=>{
      getGoblalBotData()
    },[currentUrl])

    const getGoblalBotData = async() => {
      const data = await window.dashboardApi.globalBotData(currentUrl, authTokens.access)
      if(data){
        setBotData(data.results)
        setNextPage(data.next)
        setPreviousPage(data.previous)
        setLoading(false)
      }
    }
    
    const goToNextPage = () => {
      return setCurrentUrl(nextPage)
    }

    const goToPreviousPage = () => {
      return setCurrentUrl(previousPage)
    }

    const IncreaseRank = () => {
      return setCount(count + 1)
    }

    if(loading){
      return <Loader/>
    }

  return (
    //Analytics
    <div>
        <Graph/>
        <div className='flex gap-64 tracking-tighter font-semibold text-3xl  mt-16 -mb-10 '>
        <h1>Global Bot Performance</h1>
        <h1 className='ml-7'>Global Proxy Performance</h1>
    </div>
        <div className="max-w-screen flex gap-10 ">
        {/* Bot Performance Section */}
        <section className=" w-full mt-[3.3rem] h-[21.3rem] bg-primary flex ">
          
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
                <th className="p-3 font-bold">RANK</th>
                <th className="p-3 font-bold">NAME</th>
                <th className="p-3 font-bold">RAN</th>
                <th className="p-3 font-bold">SUCCESS</th>
                <th className="p-3 font-bold">DECLINE </th>
                <th className="p-3 font-bold">RATE </th>
              </tr>
            </thead>
            <tbody>
              {botData.map((bot, key)=>(
                <tr key={key} className="border-b border-opacity-50 text-xs border-gray-700 bg-primary h-12">
                <td className="p-3">
                  <p>{key+1}</p>
                </td>
                <td className="p-3">
                  <p className="">{bot.name}</p>
                </td>
                <td className="p-3">
                  <p className="">{bot.number_of_time_bot_ran}</p>
                </td>
                <td className="p-3">
                  <p className="px-4">{bot.total_success}</p>
                </td>
                <td className="p-3">
                  <p className="px-3">{bot.number_of_decline}</p>
                </td>
                <td className="p-3">
                  <p className="px-1">{bot.success_rate}</p>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
          {nextPage||previousPage ? (
            <aside className='mt-[22rem] -ml-10'>
            <div className="flex  justify-end gap-1.5  ">
            {previousPage? (
                <button
                onClick={goToPreviousPage}
                 className="inline-flex h-8 w-8 items-center justify-center rounded bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
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
                ) : null}
              
             {/* 
              <p class="text-sm pt-1.5">
                1<span class="mx-0.25">/</span>
                {cur}
              </p> */}

              {nextPage ? (
                <button 
                onClick={goToNextPage}
                class="inline-flex h-8 w-8 items-center justify-center rounded bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
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
              ) : null}
            </div>
          </aside>
          ) : null}
        </section>

        <section className=" w-full mt-[3.3rem] h-[21.3rem] bg-primary">
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
                <th className="p-3 font-bold">RAN</th>
                <th className="p-3 font-bold">SUCCESS</th>
                <th className="p-3 font-bold">DECLINE </th>
                <th className="p-3 font-bold">RATE </th>
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
                  <p className="text-center">4200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">3700</p>
                </td>
                <td className="p-3">
                  <p className="text-center">1200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">50</p>
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
                  <p className="text-center">4200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">3700</p>
                </td>
                <td className="p-3">
                  <p className="text-center">1200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">50</p>
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
                  <p className="text-center">4200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">3700</p>
                </td>
                <td className="p-3">
                  <p className="text-center">1200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">50</p>
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
                  <p className="text-center">4200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">3700</p>
                </td>
                <td className="p-3">
                  <p className="text-center">1200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">50</p>
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
                  <p className="text-center">4200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">3700</p>
                </td>
                <td className="p-3">
                  <p className="text-center">1200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">50</p>
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
                  <p className="text-center">4200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">3700</p>
                </td>
                <td className="p-3">
                  <p className="text-center">1200</p>
                </td>
                <td className="p-3">
                  <p className="text-center">50</p>
                </td>
              </tr>
            </tbody>
          </table>
          <aside>
            <div className="flex  justify-end gap-1.5 mt-7 mr-1">
              <button disabled={true} className="inline-flex h-8 w-8 items-center justify-center rounded bg-secondary-100 hover:bg-hover transition delay-100 ease-in">
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

      </div>
    </div>
  )
}

export default Dashboard