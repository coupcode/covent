import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/login/Login'
import Categories from '../pages/categories/Categories'
import Category from '../pages/catDetails/Category'
import CatTable from '../pages/catDetails/includes/CatTable'

const Routers = () => {
    return (
        <div >
            <Routes>
                <Route path='/' element={<Categories />} />
                <Route path='/category' element={<Category />} />
                <Route path='/table-data' element={<CatTable />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            {/* <Login /> */}
        </div>
    )
}

export default Routers