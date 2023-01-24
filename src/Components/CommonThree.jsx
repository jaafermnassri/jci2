import React from 'react';
import { NavLink } from "react-router-dom"

const Common = ({
    name,
    imgsrc,
    isCompName,
    compName,
    visit,
    btnname
}) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> 
                                     Faouez Kannoussi
                                    
                                </h1>
                                <h2 className="my-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </h2>
                                <div className="mt-3">
                                    {/* <NavLink to={visit} className="btn-get-started ">
                                        {btnname}
                                    </NavLink> */}
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-image">
                                <img src={imgsrc} style={{width:"75%"}} className="img-fluid animated" alt="Home Img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Common;
