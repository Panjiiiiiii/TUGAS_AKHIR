import React, { useEffect, useState } from "react";
import "./Register.css";
import image1 from "../../Assets/img_register.png";

function Booking() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    //   const { selectedRoom } = useRoom();

    //   const taxesAndFees = 0.1 * selectedRoom.flexyRate;
    //   const serviceFee = 0.05 * selectedRoom.flexyRate;
    //   const costForStay = selectedRoom.flexyRate + taxesAndFees + serviceFee;

    return (
        <>
        <div className="background-1"> </div>
        <div class="box-register">

            <div class="row">
                <div class="form-sidebar">
                    <h1 style={{ fontsize: '100px' }}> Create Your </h1>
                    <h1> Account </h1>
                    <br />
                    <label class="label-register" style={{}}>Full Name</label>
                    <br />
                    <input style={{ height: '60px', width: '100%', padding: '10px', marginTop: '6px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '12px' }} type="text" id="fullname" name="fullname" placeholder="Enter your full name"></input>
                    <label class="label-register" style={{}}>Email</label>
                    <br />
                    <input style={{ height: '60px', width: '100%', padding: '10px', marginTop: '6px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '12px' }} type="email" id="email" name="email" placeholder="Enter your email"></input>
                    <label class="label-register" style={{}}>Password</label>
                    <br />
                    <input style={{ height: '60px', width: '100%', padding: '10px', marginTop: '6px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '12px' }} type="email" id="email" name="email" placeholder="Enter your Password"></input>
                    <button class="submit" style={{borderRadius: '15px', padding: '12px 200px'}} type="submit">Continue to sign up</button>
                </div>

                <div class="img-sidebar">
                    <img src={image1} className="image"></img>
                </div>
            </div>

        </div>
        </>
        
        );
}

export default Booking;