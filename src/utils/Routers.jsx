import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/login/Login'
import Categories from '../pages/categories/Categories'
import Category from '../pages/catDetails/Category'
import CatTable from '../pages/catDetails/includes/CatTable'
import Nominee from '../pages/nominee/Nominee'

const Routers = () => {
    return (
        <div >
            <Routes>
                <Route path='/' element={<Categories />} />
                <Route path='/categories/add-new' element={<Categories addNew={true}/>} />
                <Route path='/categories/:name' element={<Category />} />
                <Route path='/categories/:name/add-new' element={<Category />} />
                <Route path='/table-data' element={<CatTable />} />
                <Route path='/login' element={<Login />} />
                <Route path='/nominee/:id' element={<Nominee />} />
            </Routes>
            {/* <Login /> */}
        </div>
    )
}

export default Routers