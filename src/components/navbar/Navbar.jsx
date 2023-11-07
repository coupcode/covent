import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full py-[0.7rem] shadow-sm mb-5'>
            <div className="w-[90%] mx-auto">
                <div className="w-full flex justify-between items-center">
                    <div className="border bg-gray-100 rounded-lg flex items-center w-[40%] p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type="text" className='w-full bg-gray-100 outline-none pl-2 text-[1rem]' placeholder='Search for Category...' />
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <div className='text-[1.3rem] font-semibold text-indigo-900'>Joshjoy</div>
                        <div>
                            <div className="w-[45px] h-[45px] rounded-full bg-indigo-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar