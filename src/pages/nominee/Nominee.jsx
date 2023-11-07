import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import NomineeDetails from './includes/NomineeDetails'

const Nominee = () => {
  return (
    <div className='w-full h-[100vh] pb-4 pr-1 flex bg-[rgba(243,247,255,0.4)] overflow-hidden'>
            <Sidebar />
            <section className="w-full h-full rounded-lg overflow-hidden flex flex-col  bg-white">
                <Navbar />
                <div className="w-full grow ">
                    <NomineeDetails />
                </div>
            </section>
        </div>
  )
}

export default Nominee