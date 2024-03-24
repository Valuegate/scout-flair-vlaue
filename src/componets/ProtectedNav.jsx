import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import bg from '../assets/bg.jpg'

const ProtectedNav = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`,backgroundRepeat:'repeat', fontFamily:'Knewave' }}>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default ProtectedNav