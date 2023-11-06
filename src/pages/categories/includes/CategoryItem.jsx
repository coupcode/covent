import React from 'react'
import { CatData, color } from './CatData'

const CategoryItem = () => {

    
    return (
        <div className="w-[90%] mx-auto">
            <section className='w-full bg-white pt-[1rem] flex justify-between items-center'>
                <h2 className='text-[1.8rem] mb-[1.2rem] font-semibold capitalize'>categories</h2>
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
            </section>
            <section className='w-full py-[0.5rem]'>
                <div className='w-full grid grid-cols-3'>
                    {
                        CatData.map((data, index) => {
                            return <div key={index} style={{background: color()}} className='w-[300px] mb-8 px-[1rem] py-[0.5rem] flex justify-start items-center gap-[1rem] rounded-lg shadow-md'>
                                <div className='w-[70px] h-[70px] rounded-full bg-slate-500'>
                                    <img className='w-full h-full rounded-full' src={data.cat_img} alt="" />
                                </div>
                                <div>
                                    <h2 className='mb-4 text-[1.3rem] font-semibold'>{data.cat_name}</h2>
                                    <div className=' flex justify-center items-center gap-2'>
                                        <div className='mont text-[1.2rem] font-semibold'>{data.no_of_noms}</div>
                                        <div className='text-[1.2rem] font-medium'>Nominees</div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default CategoryItem