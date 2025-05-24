import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import FormData from './FormData'

const MyRoutes = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/formdata' element={<FormData/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default MyRoutes