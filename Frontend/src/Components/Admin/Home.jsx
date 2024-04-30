import React from 'react' 
import { IoBedOutline } from "react-icons/io5";

function Home() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>
    
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Kamar Tersedia</h3>
                    <IoBedOutline className='card_icon'/>
                </div>
                <h1>15</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Kamar Terpakai</h3>
                    <IoBedOutline className='card_icon'/>
                </div>
                <h1>4</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Kamar Kotor</h3>
                    <IoBedOutline className='card_icon'/>
                </div>
                <h1>2</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Transaksi</h3>
                    <IoBedOutline className='card_icon'/>
                </div>
                <h1>1</h1>
            </div>
            <div className="bottom">
            <div className="Staying">
              <h4>Currently Staying</h4>
              <hr />
            <div className="staying-tittle">
              <h4 className>Name</h4>
              <h4>Room</h4>
              <h4>Check-In</h4>
            </div>
            
            <div className="staying-tittle1">
              <p>Ms. Sephora</p>
              <p>293</p>
              <p>2024.02.19 - 13:45:30</p>
            </div>
            </div>

            <div className="Staying">
              <h4>Currently Staying</h4>
              <hr />
            <div className="staying-tittle">
              <h4 className>Name</h4>
              <h4>Room</h4>
              <h4>Check-In</h4>
            </div>
            
            <div className="staying-tittle1">
              <p>Ms. Sephora</p>
              <p>293</p>
              <p>2024.02.19 - 13:45:30</p>
            </div>
            </div>

        </div>
        </div>
    </main>
  )
}

export default Home