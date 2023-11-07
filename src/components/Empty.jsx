import React from 'react'

function Empty({text}) {
  return (
    <div className='w-full min-h-[400px] flex justify-center items-center'>
        <div className="flex flex-col items-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[15%] h-[15%] text-gray-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <br />
            <p className="text-xl">{text}</p>
        </div>

    </div>
  )
}

export default Empty