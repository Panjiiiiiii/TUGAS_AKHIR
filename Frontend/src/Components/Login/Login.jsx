import React, { useState } from "react";
import "./Login.css";
import logo1 from "../../Assets/logo.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Mengimpor useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Menggunakan useNavigate untuk mengarahkan pengguna

  const handleAuth = async (event) => {
    event.preventDefault();

    try {
      let url = "http://localhost:7000/auth";
      let input = {
        email: email,
        password: password,
      };
      const response = await axios.post(url, input);
      const data = await response.data;

      if (data) {
        sessionStorage.setItem("Token", data.token);
        localStorage.setItem("Data user", JSON.stringify(data.data));
        setIsLoggedIn(true);
        alert("Login success");
        navigate('/about'); // Menggunakan navigate dari useNavigate untuk mengarahkan pengguna ke halaman booking
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("Error login");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="background"></div>
      <div className="content">
        <div className="container-1">
          <br />
          <br />
          <div className="box">
            <div className="header">
              <div className="text">
                <h1> Local concepts with a</h1>
                <h1> Global reach</h1>
              </div>
              <div className="logo1">
                <img src={logo1} className="logo2" alt="logo1"></img>
              </div>
            </div>
            <div className="form">
              <div className="item">
                <form onSubmit={handleAuth}>
                  <label className="tittle">
                    Email
                    <br />
                    <input
                      className="form-login"
                      type="email"
                      placeholder="Insert Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <br />

                  <label className="tittle">
                    Password
                    <br />
                    <input
                      className="form-login"
                      type="Password"
                      placeholder="Insert Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <div className="col-sm-10 offset-2">
                    <input type="checkbox" className="form-check-input" />{" "}
                    Tampilkan Password
                  </div>
                  <br />
                  <input
                    className="submit-btn"
                    type="submit"
                    value="Login"
                  />
                </form>
                <br />
                <div>
                  Belum memiliki akun?{" "}
                  <a href="#" className="text-decoration-none">
                    {" "}
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
