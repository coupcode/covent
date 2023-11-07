import axios from 'axios'
import React, { useState } from 'react'
import { endpoint } from '../../../utils/Endpoints'
import ModalLoading from '../../../components/Modal/ModalLoading'
import { Getter } from '../../../utils/Getters'

function NewCate({close}) {
    const get = Getter()
    const [state, setState] = useState({
        details: {
            name: '', description: ''
        },
        isRequesting: false,
    })
    const SubmitAdd = (e) => {
        e.preventDefault()
        setState({...state, isRequesting: true})
        axios.post(endpoint.newCategory, state.details, get.headers)
        .then(res=>{
            setState({...state, isRequesting: false})
            console.log(res)
            close()
        }).catch(err=>{
            setState({...state, isRequesting: false})
            console.log(err)
        })
    }
  return (
    <form onSubmit={(e)=>SubmitAdd(e)} className='w-full flex flex-col'>
        {state.isRequesting && <ModalLoading/>}
        <h1 className='text-2xl font-semibold mb-5'>Add New Category</h1>

        <section className="w-full flex flex-col mb-3">
            <p className='text-[1.2rem]'>Name</p>
            <input value={state.details.name} onChange={(e)=>setState({...state, details:{...state.details, name: e.target.value}})} type="text" className='w-full h-[40px] border border-gray-500'/>
        </section>
        <section className="w-full flex flex-col mb-3">
            <p className='text-[1.2rem]'>Description</p>
            <textarea value={state.details.description} onChange={(e)=>setState({...state, details:{...state.details, description: e.target.value}})} type="text" className='w-full h-[40px] border border-gray-500 max-h-[200px] min-h-[100px]'/>
        </section>

        <br /><br />
        <div className="w-full flex justify-center">
            <button className='text-white bg-indigo-500 px-10 h-[45px] rounded-lg text-lg'>Add Category</button>
        </div><br /><br /><br />
    </form>
  )
}

export default NewCate