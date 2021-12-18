import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Style/Register.css'



class Register extends Component {
    render() {
        return (
            <div className='body' >
                <section className="register">
                <Link  className="nav-link" to="/" style={{ float: "right", paddingRight: 10 }} >
    {" "}
    <span
      style={{ zoom: 2, borderRadius: "80%", paddingBottom: 4 }}
      className="badge badge-danger"
    >
      ×{" "}
    </span>
  </Link>
  <br />
  

  <div >

  <div>

  <h1 className="text-center reg-h1">Welcome</h1>
  <br />
  <div className="container container-reg">
    <div className="register-form">
      <figure className="register-logo">
        <img
          src="https://raw.githubusercontent.com/alaattinerby/Kodluyoruz-Work01-Register-Form/main/Work01/img/logo.png"
          alt="Logo"
        />
      </figure>
      <h1 className="reg-qeyd reg-h1">Register</h1>
      <br />
      <form>

        <br />  
        <input type="text" placeholder="Name" />
        <br />  
        <input type="text" placeholder="Surname" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <input type="text" placeholder="Phone" />
        <br />
        <input type="date" placeholder="er" />
        <br />
        <input id="psw1" type="password" placeholder="Password" />
        <br />
        
        <span id="message" />
        <div    >
          <input className="btn-radio" type="radio" name="gender" />
          Male
          <br />
          <input className="btn-radio" type="radio" name="gender" />
          Famale
        </div>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <label
            style={{ fontSize: 24, fontWeight: "bold", color: "#767676" }}
            htmlFor="img" 
          >
            Photo Upload
          </label>
          <input className="btn-radio"
            style={{
              backgroundColor: "#6E6C3C",
              borderRadius: 33,
              color: "white"
            }}
            id="img"
            type="file"
            placeholder="Photo"
            name="PhotoPath"
          />
          <br />
        </div>
        <button className="btn btn-light about-button home-button"  type="submit">
         <span className='reg-btn'> Create Account</span>
        </button>
      </form>
      <p className="loginP">
      Do you already have an account? {" "}
      <Link className="nav-linkc  " to="/login"> <span className="navelement">Login  </span>   </Link>
      </p>

    </div>
  </div>
  </div>
  
  
  </div>

                </section>

                

            </div>
        )
    }
}
export default Register;