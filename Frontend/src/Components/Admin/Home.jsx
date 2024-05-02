import React, { useEffect, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import axios from "axios";

const Home = () => {
  const [checkInData, setCheckinData] = useState(0);
  const [checkOutData, setCheckoutData] = useState(0);
  const [roomUsed, setroomUsed] = useState([]);

  const getRoomUsed = async () => {
    try {
      const token = sessionStorage.getItem("Token");

      if (!token) {
        throw new Error("No token found in sessionStorage");
      }

      const url = "http://localhost:7000/pemesanan/getAdmin";
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data.data;

      if (data) {
        setroomUsed(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomUsed();
    console.log(roomUsed);
  }, []);

  const handleChangerRoomUsed = (event) => {
    setroomUsed(event.target.value);
  };

  const fetchdataCheckin = async () => {
    try {
      const token = sessionStorage.getItem("Token");

      if (!token) {
        throw new Error("No token found in sessionStorage");
      }

      const response = await axios.get(
        "http://localhost:7000/pemesanan/checkin",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setCheckinData(data.datas[0].check_in);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdataCheckin();
  }, []);

  const fetchdataCheckOut = async () => {
    try {
      const token = sessionStorage.getItem("Token");

      if (!token) {
        throw new Error("No token found in sessionStorage");
      }

      const response = await axios.get(
        "http://localhost:7000/pemesanan/checkout",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setCheckoutData(data.datas[0].check_out);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdataCheckOut();
  }, []);

  return (
    <>
      <main className="main-container">
        <div className="main-title">
          <h3>DASHBOARD</h3>
        </div>

        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <h3>Kamar Tersedia</h3>
              <IoBedOutline className="card_icon" />
            </div>
            <h1>15</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Kamar Terpakai</h3>
              <IoBedOutline className="card_icon" />
            </div>
            {checkInData && <h1>{checkInData}</h1>}
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Kamar Kotor</h3>
              <IoBedOutline className="card_icon" />
            </div>
            {checkOutData && <h1>{checkOutData}</h1>}
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Transaksi</h3>
              <IoBedOutline className="card_icon" />
            </div>
            <h1>1</h1>
          </div>

          <div className="bottom">
            <div className="Staying">
              <h4>Currently Staying</h4>
              <hr />
              <div className="staying-tittle">
                <h4 className="name">Name</h4>
                <h4>Room</h4>
                <h4>Check-In</h4>
              </div>
              <div className="staying-tittle1">
                {roomUsed.length > 0 ? (
                  roomUsed.slice(0, 1).map((item, index) => (
                    <React.Fragment key={index}>
                      <p>{item.nama_tamu}</p>
                      <p>{/* Tambahkan logika untuk menampilkan nomor kamar */}</p>
                      <p>{item.tgl_check_in}</p>
                    </React.Fragment>
                  ))
                ) : (
                  <>
                    <p>Loading...</p>
                    <p>Loading...</p>
                    <p>Loading...</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
