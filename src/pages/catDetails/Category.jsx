import React, { useEffect, useState } from 'react'
import CategoryDetail from './includes/CategoryDetail'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { endpoint } from '../../utils/Endpoints'
import { Getter } from '../../utils/Getters'

const Category = () => {
    const get = Getter()
    const params = useParams()
    const [cateDetails, setDetails] = useState({})
    const [cateNominees, setCateNominees] = useState([])
    const fetchDetails = () => {
        axios.get(endpoint.getSingleCate(params?.name), get.headers)
        .then(res=>{
            console.log(res)
            setDetails(res.data)

            axios.get(endpoint.getNominees(res.data.id), get.headers)
            .then(res=>{
                console.log(res)
                setCateNominees(res.data.results)
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        return () => {
            fetchDetails()
        }
    }, [])
    return (
        <div className='w-full h-[100vh] pb-4 pr-1 flex bg-[rgba(243,247,255,0.4)] overflow-hidden'>
            <Sidebar />
            <section className="w-full h-full rounded-lg overflow-hidden flex flex-col  bg-white">
                <Navbar />
                <div className="w-full grow ">
                    <CategoryDetail details={cateDetails} nominees={cateNominees} fetchData={()=>fetchDetails()}/>
                </div>
            </section>
        </div>
    )
}

export default Category