import React from 'react'
import '../Style/Contact.css'
const Contact = () => {
    return (
        <div className="body"> 
        <br />
            <h1 className="text-center contact-h1-1">Contact</h1>
            <br />
            <br />
            <div className="container">
                <div className="row">


                    <div className="col-lg-6 col-md-12 img-center"><img className="contact-img1" src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/contactbanner.png?v=1604639211" alt="" /></div>
                    <div className="col-lg-6 col-md-12"><h1 className="text-center contact-h1">GET IN TOUCH</h1>
                        <p className="text-center">We'd Love to Hear From You, Lets Get In Touch!</p>
                        <br />
                        <h6 className="text-center">Additional Information</h6>
                        <p className='text-center'>We are open: Monday - Saturday, 10AM - 5PM and closed on sunday sorry for that.</p>
                        <br />
                        <span className="contact-bold">Address <i className="fas fa-map-marker-alt"></i> : </span> <span>4005, Silver Business Point

                            India</span>
                        <br />
                        <span className="contact-bold">Phone <i className="fas fa-mobile-alt"></i> : </span> <span>9988776655</span>
                        <br />
                        <span className="contact-bold">Mail <i className="fas fa-mail-bulk"></i> : </span> <span>info@gmail.com</span>
                        <br />
                        <br />

                        <ul className="list-unstyled list-inline text-center">
                            <li className="list-inline-item">
                                <a href="#" className="btn-floating btn-fb mx-1">
                                    <i className="contact-icon fab fa-facebook-f"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn-floating btn-tw mx-1">
                                    <i className=" contact-icon fab fa-twitter"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn-floating btn-gplus mx-1">
                                    <i className= " contact-icon fab fa-google-plus-g"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn-floating btn-li mx-1">
                                    <i  className="contact-icon fab fa-linkedin-in"> </i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48612.19388955885!2d49.81821795!3d40.4030437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2s!4v1630710243349!5m2!1saz!2s"
                            width="100%"
                            height={350}
                            style={{
                                boxShadow: "4px 4px",
                                border: "1px solid grey",
                                borderRadius: 20
                            }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <br />

        </div>
    )
}

export default Contact
