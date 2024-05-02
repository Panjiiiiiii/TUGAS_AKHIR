import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'; // Import Link untuk routing di React Router

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-card'>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
           <CgProfile className="profil"/> <h5>Seraphine</h5>
          </div>
          <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <Link to=""> 
              <button className="sidebar-button">Dashboard</button>
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/DataKamar"> 
              <button className="sidebar-button">Data Kamar</button>
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/transaksi"> 
              <button className="sidebar-button">Transaksi</button>
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/data-customer"> 
              <button className="sidebar-button">Data Customer</button>
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/check-in"> 
              <button className="sidebar-button">Check In</button>
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/check-out">
              <button className="sidebar-button">Check Out</button>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar;
