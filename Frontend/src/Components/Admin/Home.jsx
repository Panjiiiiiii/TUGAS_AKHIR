import React from 'react' 
import { IoBedOutline } from "react-icons/io5";

function Home() {
  return (
    <main className='main-container'>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h4>Kamar Tersedia</h4>
                    <IoBedOutline className='card_icon'/>
                </div>
                <h1>15</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>Kamar Terpakai</h4>
                    <IoBedOutline className='card_icon'/>
                </div>
                <h1>4</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>Kamar Kotor</h4>
                    <IoBedOutline className='card_icon'/>
                </div>
                <h1>2</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>Transaksi</h4>
                    <IoBedOutline className='card_icon'/>
                </div>
                <h1>1</h1>
            </div>

            <div className='card'>
                <div className='card-bot1'>
                <h4>Currently Staying</h4>
                  <hr />
                  <div className="title">
                  <h5>Name</h5>
                  <h5>Room</h5>
                  <h5>Check-In</h5>
                  </div>
                  
                  <div className="subtitle">
                  <p>Ms. Sephora</p>
                  <p>293</p>
                  <p>2024.02.19 - 13:45:30</p>
                  </div>

                  <div className="subtitle">
                  <p>Ms. Sephora</p>
                  <p>293</p>
                  <p>2024.02.19 - 13:45:30</p>
                  </div>

                  <div className="subtitle">
                  <p>Ms. Sephora</p>
                  <p>293</p>
                  <p>2024.02.19 - 13:45:30</p>
                </div>
                </div>
        </div>

        <div className='card'>
                <div className='card-bot1'>
                <h4>Check-Out</h4>
                  <hr />
                  <div className="title">
                  <h5>Name</h5>
                  <h5>Room</h5>
                  <h5>Check-Out</h5>
                  </div>
                  
                  <div className="subtitle">
                  <p>Ms. Nourie</p>
                  <p>293</p>
                  <p>2024.02.19 - 13:45:30</p>
                  </div>

                  <div className="subtitle">
                  <p>Ms. Sephora</p>
                  <p>293</p>
                  <p>2024.02.19 - 13:45:30</p>
                  </div>

                  <div className="subtitle">
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