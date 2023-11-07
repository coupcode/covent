import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { endpoint } from '../../../utils/Endpoints'
import ModalLoading from '../../../components/Modal/ModalLoading'
import { Getter } from '../../../utils/Getters'

function AddNom({close, cateID, fetchData}) {
    const get = Getter()
    const [state, setState] = useState({
        details: {
            name: '', description: '',
            image: '', code: '', category: ''
        },
        isRequesting: false,
        categories: [],
        imageUrl: ''
    })
    const SubmitAdd = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', state.details.name)
        formData.append('image', state.details.image)
        formData.append('description', state.details.description)
        formData.append('category', cateID)

        setState({...state, isRequesting: true})

        axios.post(endpoint.newNominee, formData, get.headers)
        .then(res=>{
            setState({...state, isRequesting: false})
            console.log(res)
            fetchData()
            close()
        }).catch(err=>{
            setState({...state, isRequesting: false})
            console.log(err)
        })
    }
    useEffect(()=>{
        axios.get(endpoint.allCategories, get.headers)
        .then(res=>{
            console.log(res)
            setState(prev=>{
                return {...prev, categories: res.data.results}
            })
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    
    const handleImageChange = (e)=>{
        let image = e.target.files[0]
        let imageUrl = URL.createObjectURL(image)
        setState({...state, imageUrl, details:{...state.details, image}})
    }
  return (
    <form onSubmit={(e)=>SubmitAdd(e)} className='w-full flex flex-col'>
        {state.isRequesting && <ModalLoading/>}
        <h1 className='text-2xl font-semibold mb-5'>Add New Nominee</h1>

        <section className="w-full flex flex-col mb-5">
            <div className="w-32 h-32 rounded-lg border relative bg-gray-100 border-gray-500 overflow-hidden">
                {
                    !state.imageUrl && <>
                        <input onChange={(e)=>handleImageChange(e)} type="file" accept='.png, .jpg, .jpeg' name="" id="" className='w-full h-full opacity-0'/>
                        <section className="flex justify-center pointer-events-none items-center absolute top-0 right-0 left-0 bottom-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </section>
                    </>
                }
                {
                    state.imageUrl && <img src={state.imageUrl} alt="" className='w-full h-full object-cover'/>
                }
            </div>
            <div className="flex items-center text-[1.2rem]">
                <p className=''>Nominee's Profile Image</p>
                {
                    state.imageUrl && <>
                        <p className="mx-2">|</p>
                        <p onClick={()=>setState({...state, imageUrl: ''})} className="text-red-500">Change Image</p>
                    </>
                }
            </div>
        </section>
        <section className="w-full flex flex-col mb-3">
            <p className='text-[1.2rem]'>Name</p>
            <input value={state.details.name} onChange={(e)=>setState({...state, details:{...state.details, name: e.target.value}})} type="text" className='w-full h-[50px] border border-gray-500'/>
        </section>
        {/* <section className="w-full flex flex-col mb-3">
            <p className='text-[1.2rem]'>Select Nominee's Category</p>
            
            <select value={state.details.category} onChange={(e)=>setState({...state, details:{...state.details, category: e.target.value}})} type="text" className='w-full h-[50px] border border-gray-500'>
                <option value="">Select Category</option>
                {state.categories.map((category, idx)=><option key={'nominee'+idx} value={category.id}>{category.name}</option>)}
                
            </select>
        </section> */}
        <section className="w-full flex flex-col mb-3">
            <p className='text-[1.2rem]'>Description</p>
            <textarea value={state.details.description} onChange={(e)=>setState({...state, details:{...state.details, description: e.target.value}})} type="text" className='w-full h-[50px] border border-gray-500 max-h-[200px] min-h-[100px]'/>
        </section>
        {/* <section className="w-full flex flex-col mb-3">
            <p className='text-[1.2rem]'>Nominee's Code</p>
            <input value={state.details.code} onChange={(e)=>setState({...state, details:{...state.details, code: e.target.value}})} type="text" className='w-full h-[50px] border border-gray-500'/>
        </section> */}

        <br /><br />
        <div className="w-full flex justify-center">
            <button className='text-white bg-indigo-500 px-10 h-[50px] rounded-lg text-lg'>Add Nominee</button>
        </div><br /><br /><br />
    </form>
  )
}

export default AddNom