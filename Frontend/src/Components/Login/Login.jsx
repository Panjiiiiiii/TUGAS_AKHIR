import React from "react";
import "./Login.css";
import logo1 from "../../Assets/logo.jpg";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      userData: null,
      token: null,
    };
  }

  handleAuth = async (event) => {
    event.preventDefault();

    try {
      let url = "http://localhost:7000/auth";
      let input = {
        email: this.state.email,
        password: this.state.password,
      };
      const response = await axios.post(url, input);
      const data = await response.data;
      // console.log(input);

      if (data) {
        sessionStorage.setItem("Token : ", data.token)
        localStorage.setItem("Data user : ", JSON.stringify(data.data))
        // window.href("/")
      } else {
        this.setState({errorMessage : data.Message})
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <div class="background"></div>

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
                  <form onSubmit={this.handleAuth}>
                    <label className="tittle">
                      Email
                      <br />
                      <input
                        className="form-login"
                        type="email"
                        placeholder="Insert Email"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
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
                        value={this.state.password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </label>
                    <div className="col-sm-10 offset-2">
                      <input type="checkbox" class="form-check-input" />{" "}
                      Tampilkan Password
                    </div>
                    <br />
                    <input className="submit-btn" type="submit" value="Login" />
                  </form>
                  <br />
                  <div>
                    Belum memiliki akun?{" "}
                    <a href="#" class="text-decoration-none">
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
  }
}
export default Login;
