import React, { Component } from 'react'
import CardItem from './CardItem'

import Data from './Data'
import { CartProvider } from 'react-use-cart'
import '../Style/Home.css'
import { Link, NavLink, withRouter } from 'react-router-dom'
import Slider from "react-slick";
class Home extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <CartProvider >
                <div className="body ">
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide   "
                        data-ride="carousel"
                        data-interval="3500"
                    >
                        <ol className="carousel-indicators ">
                            <li
                                data-target="#carouselExampleCaptions"
                                data-slide-to={0}
                                className="active"
                            />
                            <li data-target="#carouselExampleCaptions" data-slide-to={1} />

                        </ol>
                        <div className="carousel-inner  ">
                            <div className="carousel-item active  kenburns-top">
                                <img src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/slider1_895b4217-1e05-4a42-abbe-ec7a38db855d.png?v=1612425824" className="d-block w-100" alt="..." />
                                <div className="carousel-caption carousel-caption-left ">
                                    <div className=" d-sm-none d-md-none d-lg-block" > <h5 className="carousel-h5  animate__animated animate__fadeInLeft">TRENDY FASHION</h5>
                                        <p className='carousel-p  animate__animated animate__fadeInRight'>500+ Deals On Top Brands & Big Offer On First Order</p></div>
                                </div>
                            </div>
                            <div className="carousel-item kenburns-top">
                                <img src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/slider2_67a71704-1fbe-4ce4-99bc-3135d95a446f.png?v=1612425842" className="d-block w-100" alt="..." />
                                <div className="carousel-caption  carousel-caption-right">
                                  <div className=" d-sm-none d-md-none d-lg-block">
                                  <h5 className="carousel-h5  animate__animated animate__fadeInLeft">MEN'S FASHION</h5>
                                    <p className='carousel-p  animate__animated animate__fadeInRight'>500+ Deals On Top Brands & Big Offer On First Order</p>
                                  </div>
                                </div>
                            </div>

                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleCaptions"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleCaptions"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <br />

                    <div className="container">
                        <div className="row">
                            <div   className=" col-lg-6 col-md-12 img-center"><img  className="  left-image-home blink" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/aboutusbanner.png?v=1604463786" alt="" /></div>
                            <div className="col-lg-6 col-md-12">
                                <br />
                                <br />
                                <h6 className='home-h6 '>ALL ABOUT US</h6>

                                <h1 className="home-h1" >Summer Fashion</h1>

                                <p className="home-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <br />
                               <div className="btn-center"> <button type="button" className="btn btn-light about-button home-button"><Link className="nav-link" to="/about"> <span className="about-btn">About <i className=" about-i fas fa-arrow-right"></i></span></Link></button></div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <h1 id='top-products' className="text-center top-products ">TOP PRODUCTS</h1>
                    <br />
                    {Data.productData.map((item, index) => {
                        return (
                            <CardItem
                            id={item.id}
                            img={item.img}

                            imgBack={item.imgBack}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                key={index}
                                item={item} />
                        )
                    })}
                    

                    



                    <section>
                        <br />
                        <br />
                       
                        <div className="container">
                            <div style={{ display: "flex", 'justifyContent': "space-evenly", 'alignItems': "center"  }} className="row">
                                <div style={{borderRadius:"10px"}} className="home-time col-lg-3  col-md-12">
                                    <img className="home-time-img" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon1.png?v=1604399236" alt="" />
                                    <div style={{ display: "flex", 'flexDirection': "column" }}>
                                        <span>ORDERD BEFORE 16:00</span>
                                        <span> Next bussiness day at home</span></div>

                                </div>
                                <div style={{borderRadius:"10px"}} className="home-time col-lg-3 col-md-12 ">
                                    <img className="home-time-img" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon2.png?v=1604399270" alt="" />
                                    <div style={{ display: "flex", 'flexDirection': "column" }}>
                                        <span>MONEY BACK</span>
                                        <span> 14 Days to change your mind</span></div>

                                </div>
                                <div style={{borderRadius:"10px"}} className="home-time col-lg-3 col-md-12">
                                    <img className="home-time-img" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/serviceicon3.png?v=1604399310" alt="" />
                                    <div style={{ display: "flex", 'flexDirection': "column" }}>
                                        <span>1000 PRODUCT ADD</span>
                                        <span> Products added every day</span></div>

                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                    </section>
                    <section>


                        <section>

                        </section>
                        <br />
                        <h1 id='special-products' className="text-center special-products ">SPECIAL PRODUCTS</h1>
                        <br />
                        {Data.productData2.map((item, index) => {
                            return (
                                <CardItem 
                                id={item.id}
                                img={item.img}
                                imgBack={item.imgBack}
                                    title={item.title}
                                    desc={item.desc}
                                    price={item.price}
                                    key={index}
                                    item={item} />
                            )
                        })}</section>

                    <section>
                        <br />
                        <br />
                        <div className="container">
                            <div className="row">
                              
                               
                               
                               
                            </div>
                        </div>
                    </section>

                    <br />
                    <br />

                    <div className='container'>
                 
                    <Slider {...settings}>
                      <div>
                      <div className="offset-4"><img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/b3_130x130@2x.png?v=1604481762" alt="" /></div>
                      </div>
                      <div>

                      <div className="offset-4"><img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/b2_130x130@2x.png?v=1604481773" alt="" /></div>
                      </div>
                      <div>
                      <div className="offset-4"><img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/b1_130x130@2x.png?v=1604481783" alt="" /></div>
                      </div>
                      <div>
                      <div className="offset-4"><img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/b5_130x130@2x.png?v=1604481738" alt="" /></div>
                      </div>
                      <div>
                      <div className="offset-4"><img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/b2_130x130@2x.png?v=1604481773" alt="" /></div>
                      
                      </div>
                      <div>

                      <div className="offset-4"><img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/b2_130x130@2x.png?v=1604481773" alt="" /></div>
                     
                      </div>
                    </Slider>
                  </div>

                  <br /><br />
                </div>



            </CartProvider>
        )
    }
}

export default Home