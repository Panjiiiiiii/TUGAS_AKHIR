import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoutes = () => {
    const token = localStorage.getItem("Token")
  return token ? <Outlet/> : <Navigate to="/Login"/>
}

export default ProtectRoutes
