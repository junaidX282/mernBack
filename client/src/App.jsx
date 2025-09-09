import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

import MyBookings from './pages/myBookings'
import Cars from './pages/cars'
import Footer from './components/Footer'
import CarDetails from './pages/carDetails'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import MangeCars from './pages/owner/MangeCars'
import MangeBookings from './pages/owner/MangeBookings'
import Login from './components/Login'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'


const App = () => {

  const { showLogin } = useAppContext();
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
    <Toaster />
      {showLogin && <Login /> }
      
      {!isOwnerPath && <Navbar  />}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/car-details/:id' element={<CarDetails />}/>
        <Route path='/cars' element={<Cars />}/>
        <Route path='/my-bookings' element={<MyBookings />}/>
        <Route path='/owner' element={ <Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='add-car' element={<AddCar />} />
          <Route path='manage-cars' element={<MangeCars />} />
          <Route path='manage-bookings' element={<MangeBookings />} />
        </Route >
      </Routes>

      {!isOwnerPath && <Footer />}
      
    </>
  )
}

export default App