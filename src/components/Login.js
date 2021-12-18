import React, { Component } from 'react'
import '../Style/Login.css'
class Login extends Component {
    render() {
        return (
            <div className="body">
            <section className="LoginBox" action method="post">
            <span>
              {" "}
              <br />
              <i id="icon1" className="fas fa-user-shield" />
            </span>
            <form className="container login-form">
              <h1 className='login-page'>Login Page</h1>
              <br />
              <input className="login" placeholder="Login" required />
              <input
                className="password"
                type="password"
                placeholder="Password"
                required
              />
              <br />
              <button onMouseOver={function icon(){
                  document.getElementById("icon1").style.color="#237948"
              }} onMouseOut={function closeIcon(){
                  document.getElementById('icon1').style.color="#6E6C3C"
              }} className="about-button log-btn" name="valider" type="submit">
                Login{" "}
              </button>
              <br/>
            </form>
          </section>
          <br/>
            </div>
        )
    }
}

export default Login