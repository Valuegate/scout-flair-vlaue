import React from 'react'
import SidebarWithHeader from './SidebarContent'
import { Outlet } from 'react-router-dom'

const ProtectedLayout = () => {
  return (
    <div>
        <SidebarWithHeader>
            <Outlet/>
        </SidebarWithHeader>
    </div>
  )
}

export default ProtectedLayout