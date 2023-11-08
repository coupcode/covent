import React from 'react'
import person from '../../catDetails/includes/items/imgs/joy.png'

const NomineeDetails = () => {
    return (
        <div className="w-[90%] mx-auto py-8">
            <section className='w-[70%]'>
                <h2 className='mb-6 text-[2rem] font-semibold text-center'>Event name</h2>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-[3rem]'>
                        <div>
                            <div className='w-[200px] h-[200px] rounded-lg bg-slate-200'>
                                <img className='w-full h-full object-cover rounded-lg' src={person} alt="" />
                            </div>
                            {/* <div className='text-center text-[1.5rem] font-semibold'>Josh Joy</div> */}
                        </div>
                    </div>
                    <div className='mont flex flex-col justify-between'>
                        <div className="bg-red-600 border rounded-xl px-[3rem] py-[1rem] text-white">
                            <div className="text-[1rem] font-medium">Time left</div>
                            <div className="text-[1.5rem] font-semibold">20 : 6 : 56 : 20</div>
                        </div>
                        <div className="flex items-center gap-[1rem] bg-[#312E81] border rounded-xl px-[3rem] py-[1rem] text-white">
                            <div className="text-[1.2rem]">Votes:</div>
                            <div className='text-[1.5rem] font-semibold'>999</div>
                        </div>
                    </div>
                </div>
                <div className='my-4 text-[1.2rem]  font-semibold'>
                    <div className='mb-[2px] '>Name: Josh Joy</div>
                    <div className='mb-[2px] '>Category: Fashionable</div>
                    <div className=''>Nominee Code: 0232132#</div>
                </div>
                <div className='w-full text-[1rem]'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet accusantium ducimus nobis quam officiis repellat debitis soluta provident magni vel officia quas impedit quod facilis quis perferendis atque praesentium laborum labore ipsum eligendi recusandae, amet architecto. Id fugit non eos a maiores earum. Laudantium, placeat animi. Ut iure deserunt ratione!
                    </p>
                </div>
            </section>
        </div>
    )
}

export default NomineeDetails