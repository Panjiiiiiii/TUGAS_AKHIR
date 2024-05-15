import React from 'react'
import { IoNotifications, IoLogOutOutline } from "react-icons/io5";
import img from '../../Assets/logo.jpg'

function Header() {
  return (
    <header className='header'>
        <div className='header-right'>
            <IoNotifications className='icon'/>
            <a IoLogOutOutline className='icon' onClick={() => {window.location.href = '/login'}}>Log out</a> 
        </div>
    </header>
  )
}

export default Header
