import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import SingleProduct from '../Pages/SingleProduct'
import Cart from '../Pages/Cart'
import Form from '../Pages/Form'
import PageNotFound from '../Pages/PageNotFound'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/men' element={<Men/>}></Route>
            <Route path='/women' element={<Women/>}></Route>
            <Route path='/product/:id' element={<SingleProduct/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/form' element={<Form/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes