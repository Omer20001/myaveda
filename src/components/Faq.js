import React, { Component } from 'react'
import '../Style/Faq.css'

class Faq extends Component {
    
    render() {
  
        return (
            
            <div className="body">
                <br />
             
                <h1 className="text-center faq-h1">FAQ'S</h1>
                <br />  
                <div className="accordion container" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button
                                    className=" faq-btn btn  btn-block text-left"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                   
                                >
                                   <span> Collapsible Group Item #1</span>
                                   <span><i className="fas fa-chevron-down"></i></span>
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseOne"
                            className="collapse"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, dolorum? Nesciunt temporibus esse ex, rerum sit ad doloribus. Unde aliquid, esse maxime nesciunt sint neque voluptatibus temporibus saepe nulla est.
                            </div>
                        </div>
                    </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button
                                            className="faq-btn btn  btn-block text-left collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo" 
                                            >
                                        <span> Collapsible Group Item #2  </span>
                                            <span id="up" className="up"><i  className=" fas fa-chevron-up"></i>
                                            </span>
                                            <span id="down" className="down"> <i className="fas fa-chevron-down"></i></span>
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseTwo"
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet modi et cupiditate, labore quis consequatur saepe reprehenderit quibusdam iste accusamus nulla dicta dolores autem fugit id ipsam ut sit!
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button
                                            className=" faq-btn btn  btn-block text-left collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                        <span> Collapsible Group Item #3</span>
                                            <span><i className="fas fa-chevron-down"></i></span>
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseThree"
                                    className="collapse"
                                    aria-labelledby="headingThree"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nobis consequatur corrupti qui, repudiandae nihil reiciendis quis dignissimos impedit at illum facere libero voluptatum cupiditate debitis. Fugiat, voluptates ducimus? Aut!
                                    </div>
                                </div>
                                
                                <div className="card">
                                <div className="card-header" id="headingFour">
                                    <h2 className="mb-0">
                                        <button
                                            className=" faq-btn btn  btn-block text-left collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                        <span> Collapsible Group Item #4</span>
                                            <span><i className="fas fa-chevron-down"></i></span>
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseFour"
                                    className="collapse"
                                    aria-labelledby="headingFour"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ipsa sapiente excepturi sint alias ut itaque dolore. Unde, quia voluptate. Nihil eaque sunt iusto atque nesciunt aspernatur, natus aliquid eius.
                                    </div>
                                </div>
                                <div className="card">
                                <div className="card-header" id="headingFive">
                                    <h2 className="mb-0">
                                        <button
                                            className=" faq-btn btn  btn-block text-left collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                        <span> Collapsible Group Item #5</span>
                                            <span><i className="fas fa-chevron-down"></i></span>
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseFive"
                                    className="collapse"
                                    aria-labelledby="headingFive"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi perspiciatis ipsa fugiat asperiores. Eligendi eos sint libero fugit, ipsam, eveniet provident officiis fugiat est velit voluptates in veniam temporibus molestias!
                                    </div>
                                </div>
                                </div>
                                </div>

                                
                                
                    </div>
                    
                    
                </div>
                <br />
                <br />
            </div>
        )
    }
}
export default Faq