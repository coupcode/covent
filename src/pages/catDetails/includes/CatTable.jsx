import React from 'react'
import { TableData } from './TableData'
import { NavLink } from 'react-router-dom'

const CatTable = () => {
    return (
        <div className='w-[80%] mx-auto overflow-hidden'>
            <div className='py-[4rem]'>
                <h2 className='text-[1.5rem] font-semibold uppercase text-center pb-[2rem]'>List of nominees</h2>
                <div className='popp flex justify-between items-center pb-[1rem]'>
                        <div className='text-[1.2rem] font-medium text-gray-400 '>Total: 200 Nominees</div>
                    <div className=' flex justify-center items-center gap-2'>
                        <div className='flex justify-center items-center gap-2 border-[2px] border-gray-500 rounded-lg py-[0.2rem] px-[0.5rem]'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                                </svg>
                            </div>
                            <div className='text-[0.8rem] font-medium'>Filter</div>
                        </div>
                        <div className='flex justify-center items-center gap-2 border-[2px] border-gray-500 rounded-lg py-[0.2rem] px-[0.5rem]'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                    <path fill-rule="evenodd" d="M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div className='text-[0.8rem] font-medium'>Sort</div>
                        </div>
                        <div className='flex justify-center items-center gap-2 border-[2px] border-gray-500 rounded-lg py-[0.2rem] px-[0.5rem]'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                                </svg>
                            </div>
                            <div className='text-[0.8rem] font-medium'>Download</div>
                        </div>
                    </div>
                </div>
                <table className='w-full text-left px-[2rem]'>
                    <thead className='w-full h-[60px] text-[1.2rem] bg-lightGray pl-[1rem]'>
                        <tr className='px-[2rem]'>
                            <th className='pl-[1.5rem]'>Name</th>
                            <th>Gender</th>
                            <th>Votes</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='w-full text-[1rem]'>
                        {
                            TableData.map((data, index) => {
                                return <tr key={index} className='h-[50px] hover:bg-gray-50'>
                                    <td className='pl-[1.5rem]'>{data.name}</td>
                                    <td>{data.gender}</td>
                                    <td>
                                        <div className='text-blue-600 font-semibold'>{data.votes}</div>
                                    </td>
                                    <td>
                                        <div className='text-gray-400'>{data.date}</div>
                                    </td>
                                    <td>
                                        <div className='text-red-600 font-semibold'>Delete</div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CatTable