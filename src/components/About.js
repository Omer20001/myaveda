import React from 'react'
import '../Style/About.css'
import { Link, NavLink, withRouter } from 'react-router-dom'
const About = (props) => {



    return (
        <div className="body">

            <br />
            <h1 className="text-center about-h1">About US</h1>

            <br />

            <div id="container">
                Make
                <div id="flip">
                    <div>
                        <div>work</div>
                    </div>
                    <div>
                        <div>lifeStyle</div>
                    </div>
                    <div>
                        <div>Everything</div>
                    </div>
                </div>
                AweSoMe!
            </div>

            <br />
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-12 img-center"><img  className="about-img1" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/aboutusbanner1.png?v=1604639157" alt="" /></div>

                    <div className="col-lg-6 col-md-12"><br />
                        <h3>We Have Everything You Need ?</h3>
                        <p>Faded short sleeves t-shirt with high neckline.
                            Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                        <br />
                        <h6>Sample Ordered List</h6>

                        <ol>
                            <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                            <li>Dummy text used in laying out print, graphic or web designs</li>
                            <li>The passage is attributed to.</li>
                            <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
                            <li>Dummy text used in laying out print, graphic or web designs</li>
                        </ol>
                        <div className="btn-center"><button type="button" className="btn btn-light about-button "><Link className="nav-link" to="/contact"> <span className="about-btn">Contact <i className=" about-i fas fa-arrow-right"></i></span></Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

            <h1 className="text-center">Our Services</h1>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 our-service" >
                        <img  src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/1.png?v=1604639118" alt="" />

                        <h4 className="text-center">FREE RESOURCES</h4>
                        <p className="text-center">Bring to the table win-win survival strategies to ensure proactive domination.</p>
                    </div>
                    <div className="col-lg-4 col-md-12 our-service" >
                        <img src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/2.png?v=1604639129" alt="" />

                        <h4 className="text-center">MULTI PURPOSE</h4>
                        <p className="text-center">Bring to the table win-win survival strategies to ensure proactive domination.</p>
                    </div>
                    <div className="col-lg-4 col-md-12 our-service" >
                        <img src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/3.png?v=1604639139" alt="" />

                        <h4 className="text-center">FULLY RESPONSIVE </h4>
                        <p className="text-center">Bring to the table win-win survival strategies to ensure proactive domination.</p>
                    </div>
                </div>
            </div>

            <br /><br />
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-12"><br />
                        <h3>We Have Everything You Need ?</h3>
                        <p>Faded short sleeves t-shirt with high neckline.
                            Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
                        <br />
                        <h6>Sample Ordered List</h6>

                        <ol>
                            <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                            <li>Dummy text used in laying out print, graphic or web designs</li>
                            <li>The passage is attributed to.</li>
                            <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
                            <li>Dummy text used in laying out print, graphic or web designs</li>
                        </ol>
                        <div className="btn-center"><button type="button" className="btn btn-light about-button"><Link className="nav-link" to="/contact"> <span className="about-btn">Contact <i className=" about-i fas fa-arrow-right"></i></span></Link></button>
                        </div>
                    </div>
                    <br />
                    <div className="col-lg-6 col-md-12 img-center img-top"><figure><img  className="about-img1 about-last-img" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/aboutusbanner2.png?v=1604639176" alt="" /></figure></div>


                </div>
            </div>

        </div>
    )
}

export default About
