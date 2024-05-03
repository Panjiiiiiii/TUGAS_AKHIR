import React, { useState } from 'react';
import Header from '../Admin/Header';
import Sidebar from '../Admin/Sidebar';
import '../../App.css'; 
import { AiOutlineSetting, AiOutlineDelete } from 'react-icons/ai';

function DataKamar() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [rooms, setRooms] = useState([
    { id: 1, number: 101, type: 'Single', room: 'A101', status: 'Available', price: 100 },
    { id: 2, number: 102, type: 'Double', room: 'A102', status: 'Booked', price: 150 },
    { id: 3, number: 103, type: 'Single', room: 'A103', status: 'Available', price: 120 },
  ]);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddRoom = () => {
    console.log('Add Room button clicked');
  };

  const handleDeleteRoom = (id) => {
    console.log(`Room with ID ${id} deleted`);
    setRooms(rooms.filter(room => room.id !== id));
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      {/* <div className="data-kamar-options">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleAddRoom} className="add-room-button">
          Add Room
        </button>
      </div> */}

      <table className="room-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Room Type</th>
            <th>Room</th>
            <th>Status</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id}>
              <td>{room.number}</td>
              <td>{room.type}</td>
              <td>{room.room}</td>
              <td>{room.status}</td>
              <td>{room.price}</td>
              <td>
                <button onClick={() => handleDeleteRoom(room.id)}><AiOutlineDelete /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataKamar;
