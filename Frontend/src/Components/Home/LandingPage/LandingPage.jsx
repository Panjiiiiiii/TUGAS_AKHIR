import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import header from "../../../Assets/header.jpg";
import Carousel from "../../Carousel/Carousel";
import img from "../../../Assets/content2.jpg";
import axios from "axios";

const LandingPage = () => {
  const [tipeKamar, setTypeKamar] = useState([]);

  useEffect(() => {
    getTypeKamar();
  }, []);

  const getTypeKamar = async () => {
    try {
      const url = "http://localhost:7000/tipe_kamar/";
      const response = await axios.get(url);
      if (Array.isArray(response.data)) {
        setTypeKamar(response.data);
        console.log(response);
      } else {
        console.log("Data not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <div className="img">
        <img src={header} alt="" />
      </div>
      <section className="grid ">
        <div className="horizontal-grid d-flex flex-row">
          <div className="checkIn ">
            <label htmlFor="checkIn">Check In</label>
            <input type="date" id="checkIn" />
          </div>

          <div className="checkOut">
            <label htmlFor="checkOut">Check Out</label>
            <input type="date" id="checkOut" />
          </div>

          <div className="roomGuest">
            <label htmlFor="roomGuest">Room type</label>
            <select className="dropdown" id="roomGuest">
              {tipeKamar.map((item, index) => (
                // Perbaikan sintaks: tambahkan return di bawah ini
                <option key={index} value={item.nama_tipe_kamar}>
                  {item.nama_tipe_kamar}
                </option>
              ))}
            </select>
          </div>

          <button className="btn">
            <a href="#">Find a Four Points</a>
          </button>
        </div>
      </section>
      <div className="textContent">
        <h1 className="title1">Four Points</h1>
        <h6 className="subttitle2">by Sheraton Munich Arabellapark</h6>
        <p className="desk">
          Discover our new hotel that combines Bavarian charm and a timeless
          design with local elements. Located a few subway stops from the city
          center and only a short walk from the English Garden, Munich’s famous
          city park, you will experience the special mixture of exciting city
          life and Bavarian coziness that makes Munich so unique. Inside, find
          convenient workspaces with fast, free Wi-Fi, Munich’s highest spa with
          pool, sauna, and treatments, and local beer with Best Brews™ on tap.
          Spacious guest rooms with views up to the alps round out your stay.
        </p>
      </div>

      <Carousel />

      <div className="content3">
        <div className="img">
          <img src={img} alt="" />
        </div>

        <div className="text">
          <h1>
            In the realm of 30 extraordinary Marriott Bonvoy hotel brands, Four
            Points is a standout.
          </h1>
          <p>
            Step into a world of exclusive member advantages with Marriott
            Bonvoy™, featuring complimentary Wi-Fi, member-only rates, and
            points that unlock travel experiences. Start your adventure at
            Marriott.com. Where will our journey together lead?
          </p>
          <div className="link">
            <a href="../../Login/Login">Sign in </a>
            <a href="">Join Now </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
