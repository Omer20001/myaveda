import React from 'react'
import '../Style/Navbar.css'
import { Link, NavLink, withRouter } from 'react-router-dom'
const Navbar = (props) => {

  return (


    <div className='navbarr'>
      <nav   className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-md-12 col-lg-3">
        <Link to="/"> <img className=' animate__animated animate__fadeInTopLeft' src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/Logo_large.png?v=1604396272" alt="" /></Link>
        <button style={{float:"right" }}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button></div>


        <div  className=" col-lg-9 collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/"> <span className="navelement">Home</span></Link>
            </li>


            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
             <span className="navelement">   Fashion</span> <sup className="sale">SALE</sup>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            
                <a className="dropdown-item" href="/#top-products">
                  Top Products
                </a>

                <a className="dropdown-item" href="/#special-products">
                  Special Products
                </a>
              
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>






            <li className="nav-item">
              <Link className="nav-link" to="/about"> <span className="navelement">About</span> <sup className="new">NEW</sup></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact"> <span className="navelement">Contact</span></Link>
            </li>

            <li className="nav-item">
             
              <Link className="nav-link" to="/faq"> <span className="navelement">FAQs</span> <sup className="hot">HOT</sup></Link>

            </li>
          </ul>


          <Link className="nav-link" to="/register"> <span className="navelement">Register : </span>  <i className="fas fa-user-friends"></i> </Link>
          <Link className="nav-link" to="/login"> <span className="navelement">Login : </span>  <i className="fas fa-sign-in-alt"></i> </Link>
          <Link className="nav-link" to="/bag"> <span className="navelement">View Bag: </span>  <i className="fas fa-shopping-bag"></i> </Link>
        </div>
      </nav>



    </div>
  )
}

export default withRouter(Navbar)
