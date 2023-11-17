import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const ProtectedNav = () => {
  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default ProtectedNav