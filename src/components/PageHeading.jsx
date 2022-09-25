import React from 'react'


const PageHeading = ({pageTitle, totalItems}) => {
  return (
    <div className='mt-3 mb-2 bg-primary bg-opacity-50 rounded-md  w-fit tracking-tighter '>
        <p className='p-2'>
            {totalItems<10? `0${totalItems}` : totalItems} {pageTitle}
        </p>
    </div>
  )
}

export default PageHeading