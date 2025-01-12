import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import AdminPanel from '../pages/adminPanel/AdminPanel'
import DetailPage from '../pages/detailPage/DetailPage'
import NotFoundPage from '../pages/NotFoundPage'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        {/* <Route path='/wishlist' element={<Wishlist/>}/> */}
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path='/detail' element={<DetailPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router