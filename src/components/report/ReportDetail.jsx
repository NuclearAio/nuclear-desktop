import React from 'react'

const ReportDetail = ({handleModalFunc}) => {
  return (
    <div>
        <div id="medium-modal" tabindex="-1" className="overflow-y-auto overflow-x-hidden fixed pl-[34rem] mt-44  top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
        <div className="relative  shadow bg-secondary-100">
            <div className="flex justify-between items-center p-5 rounded-t border-b border-gray-700 border-opacity-50">
                <h3 className="font-semibold tracking-tighter text-3xl">
                    Report Detail
                </h3>
                <button
                onClick={handleModalFunc}
                 type="button" className="bg-transparent hover:bg-hover transition delay-100 ease-in rounded-lg text-sm p-1.5 ml-auto inline-flex items-cente" data-modal-toggle="medium-modal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span> 
                </button>
            </div>
            <div className="p-6 space-y-6 tracking-tighter">
                <p className="leading-relaxed ">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="leading-relaxed ">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            {/* <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="medium-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-toggle="medium-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div> */}
        </div>
    </div>
</div>
    </div>
  )
}

export default ReportDetail