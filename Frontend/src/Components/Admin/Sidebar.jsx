import React from 'react';
import { CgProfile } from "react-icons/cg";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-card'>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            Seraphine
          </div>
          <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <a href="">
              <button className="sidebar-button">Dashboard</button>
            </a>
          </li>
          <li className='sidebar-list-item'>
            <a href="">
              <button className="sidebar-button">Data Kamar</button>
            </a>
          </li>
          <li className='sidebar-list-item'>
            <a href="">
              <button className="sidebar-button">Transaksi</button>
            </a>
          </li>
          <li className='sidebar-list-item'>
            <a href="">
              <button className="sidebar-button">Data Customer</button>
            </a>
          </li>
          <li className='sidebar-list-item'>
            <a href="">
              <button className="sidebar-button">Check In</button>
            </a>
          </li>
          <li className='sidebar-list-item'>
            <a href="">
              <button className="sidebar-button">Check Out</button>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar;
