import React, { useEffect, useState } from 'react'
import { CatData, color } from './CatData'
import { useLocation, useNavigate } from 'react-router-dom'
import NewCate from './NewCate'
import Modal from '../../../components/Modal/Modal'
import axios from 'axios'
import { endpoint } from '../../../utils/Endpoints'
import { Getter } from '../../../utils/Getters'
import Empty from '../../../components/Empty'

const CategoryItem = ({addNew}) => {
    const get = Getter()
    const navigate = useNavigate()
    const location = useLocation()
    const [state, setState] = useState({
        addNew: addNew,
        categories: []
    })

    const fetchDetails = () => {
        axios.get(endpoint.allCategories, get.headers)
        .then(res=>{
            console.log(res)
            setState(prev=>{
                return {...prev, categories: res.data.results}
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        return ()=>{
            fetchDetails()
        }
    }, [])

    
    return (
        <div className="w-[90%] mx-auto">
            {
                addNew && <Modal close={()=>{navigate(-1, {replace: true})}} content={<NewCate fetchData={()=>fetchDetails()} close={()=>navigate(-1, {replace: true})}/>}/>
            }
            <section className='w-full bg-white pt-[1rem] flex justify-between items-center'>
                <h2 className='text-[1.8rem] mb-[1.2rem] font-semibold capitalize text-indigo-600'>categories</h2>

                <button onClick={()=>navigate('/categories/add-new')} className='text-lg px-5 h-[45px] rounded-lg bg-indigo-500 text-white'>Add New Category</button>

            </section>
            <section className='w-full py-[0.5rem]'>
                <div className='w-full flex flex-wrap'>
                    {
                        state.categories.length > 0 ? 
                        state.categories.map((category, index) => {
                            return <div onClick={()=>navigate(`/categories/${category.name}`)} key={index}  style={{boxShadow: '0 0 5px 1px rgb(0,0,0,.1)'}} className='w-[300px] mb-8 mr-8 p-[1rem] flex justify-start items-start gap-[1rem] rounded-lg shadow-md hover:bg-gray-100 cursor-pointer'>
                                
                                <div className='flex flex-col items-start'>
                                    <h2 className='p-0 text-[1.3rem] font-semibold text-indigo-900'>{category.name}</h2>
                                    <small className='text-gray-500 text-[0.7rem]'>{category.description.slice(0,100)}{category.description?.length>100 && '...'}</small><br />
                                    {/* <div className='flex justify-center items-center text-xl font-[300]'>
                                        <small className='mont mr-2'>{category.no_of_noms||23}</small>
                                        <small className=''>Nominees</small>
                                    </div> */}
                                </div>
                            </div>
                        }) : <Empty/>
                    }
                </div>
            </section>
        </div>
    )
}

export default CategoryItem