import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const ProtectedNav = () => {
  return (
    <div style={{ background:'linear-gradient(90deg, rgba(11,11,11,1) 0%, rgba(65,57,57,1) 35%, rgba(18,22,23,1) 100%)', fontFamily:'Raleway' }}>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default ProtectedNav