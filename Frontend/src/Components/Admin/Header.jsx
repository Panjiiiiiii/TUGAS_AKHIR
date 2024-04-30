import React from 'react'
import { IoNotifications, IoLogOutOutline } from "react-icons/io5";
import img from '../../Assets/logo.jpg'

function Header() {
  return (
    <header className='header'>
        <div className='header-left'>
            <img src={img} alt="" />
        </div>
        <div className='header-right'>
            <IoNotifications className='icon'/>
            <IoLogOutOutline className='icon'/> Log out
        </div>
    </header>
  )
}

export default Header
