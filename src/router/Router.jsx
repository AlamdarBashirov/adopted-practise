import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import AdminPanel from '../pages/adminPanel/AdminPanel'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        {/* <Route path='/wishlist' element={<Wishlist/>}/> */}
        <Route path='/admin' element={<AdminPanel/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router