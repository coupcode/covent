import React, { useEffect, useState } from 'react'
// import joy from './includes/items/imgs/joy.png'
import joy from './items/imgs/joy.png'
import CatTable from './CatTable'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { TableData } from './TableData'
import Modal from '../../../components/Modal/Modal'
import AddNom from './AddNom'
import Empty from '../../../components/Empty'

const CategoryDetail = ({details, nominees, fetchData}) => {
    const navigate = useNavigate()
    const params = useParams()
    const [showNew, setShowNew] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname.includes('add-new')){
            setShowNew(true)
        }else{
            setShowNew(false)
        }
    }, [location])

    return (
        <div className="w-[90%] mx-auto">
            {
                showNew && <Modal close={()=>navigate(-1)} content={<AddNom fetchData={()=>fetchData()} close={()=>navigate(-1)} cateID={details.id}/>}/>
            }
            <section className='w-full bg-white pt-[1.5rem]'>
                <h2 className='text-[1.6rem] mb-[1.2rem] font-semibold capitalize text-indigo-800'>{details.name?.toUpperCase()}</h2>
                <p className="text-xl">{details.description}</p>
                <section className='mt-[2rem]'>
                    <div className=" w-full flex justify-between gap-2 pb-[2rem]">
                        <div className="bg-gray-100 border rounded-lg py-4 px-8">
                            <div className="pb-[0.5rem] text-[1.4rem] font-semibold text-green-600">Winning Nominee</div>
                            <div className='mont w-full flex justify-between items-start gap-[2.5rem]'>
                                <div className='w-[120px] h-[120px]'>
                                    <img className='w-full h-full object-cover rounded-full' src={joy} alt="" />
                                </div>
                                <div className='flex flex-col items-start justify-start'>
                                    <div className="text-[1.2rem] font-semibold">Josh Joy</div>
                                    <div className='text-[1.2rem] font-semibold'>
                                        <span className='text-[2rem]'>899</span>
                                        votes
                                    </div>
                                    <div className='text-[1.2rem] text-green-600 font-semibold border-[3px] border-green-600 py-[2px] px-[5px]'>
                                        GHS 250000000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mont flex flex-col justify-between'>
                            <div className="text-[2rem] font-semibold bg-gray-100 border rounded-xl px-[3rem] py-[1rem]">20 : 6 : 56 : 20</div>
                            <div className="text-[2rem] font-semibold bg-gray-100 border rounded-xl px-[3rem] py-[1rem]">GHS 9800000</div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='py-[1rem]'>
                        <div className='popp flex justify-between items-center pb-[1rem] mt-[2rem]'>
                            <div className='flex gap-3'>
                                <div className='text-[1.2rem] font-medium text-gray-400 '>Total: 200 Nominees</div>
                                <NavLink to='/table-data'>
                                    <div className='text-[1.2rem] bg-gray-100 py-[1px] px-[2px] rounded-lg'>View</div>
                                </NavLink>
                            </div>
                            <button onClick={()=>navigate(`/categories/${params.name}/add-new`)} className="px-10 text-lg text-white bg-indigo-500 h-[45px] rounded-lg">Add New Nominee</button>
                        </div>
                        {
                            nominees?.length > 0 ? <>
                                <table className='w-full text-left px-[2rem]'>
                                    <thead className='w-full h-[60px] text-[1.2rem] bg-lightGray pl-[1rem]'>
                                        <tr className='px-[2rem]'>
                                            <th className='pl-[1.5rem]'>Name</th>
                                            <th>Code</th>
                                            <th>Votes</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className='w-full text-[1rem] overflow-y-scroll'>
                                        {
                                            nominees.map((data, index) => {
                                                return <tr key={index} className='h-[85px] hover:bg-gray-50' style={{margin: '1rem 0'}}>
                                                    <td className='pl-[1.5rem]'>
                                                        <div className="flex items-center">
                                                            <section className="rounded-full w-16 h-16 bg-gray-300 flex justify-center items-center overflow-hidden">
                                                                {data.image ? <img src={data.image} alt="" className='w-full h-full object-cover'/> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                                </svg>
                                                                }

                                                            </section>
                                                            <section className="flex flex-col ml-3">
                                                                <p className="text-lg">{data.name}</p>
                                                            </section>
                                                        </div>
                                                    </td>
                                                    <td>{data.code}</td>
                                                    <td>
                                                        <div className='text-blue-600 font-semibold'>{data.votes || '---'}</div>
                                                    </td>
                                                    <td>
                                                        <div className='text-red-600 font-semibold'>Delete</div>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </> : <Empty text={'No nominee here yet'}/>
                        }
                    </div>
                </section>
            </section>
        </div>
    )
}

export default CategoryDetail