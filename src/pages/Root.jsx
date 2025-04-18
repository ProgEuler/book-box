import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Header/NavBar'
import Footer from '../components/Footer/Footer'

export default function Root() {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}
