import React from 'react'
import CategoryItem from './includes/CategoryItem'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Categories = () => {
  return (
    <div className='w-full h-[100vh] pb-4 pr-1 flex bg-[rgba(243,247,255,0.4)] overflow-hidden'>
            <Sidebar />
            <section className="w-full h-full rounded-lg overflow-hidden flex flex-col  bg-white">
                <Navbar />
                <div className="w-full grow ">
                    <CategoryItem />
                </div>
            </section>
        </div>
  )
}

export default Categories