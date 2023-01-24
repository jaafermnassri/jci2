import React from 'react';
import { NavLink } from "react-router-dom"
import "./commontwo.css"
const CommonTwo = ({
    name,
    imgsrc,
    isCompName,
    compName,
    visit,
    btnname
}) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center cor">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row fr">

                            <div className="col-lg-6 order-1 order-lg-2 header-image">
                                <img src={imgsrc} className="img-fluid animated" alt="Home Img"/>
                            </div>

                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> 
                                     {name}
                                     {isCompName ? <strong className="brand-name"> {compName}</strong> : ""}
                                    
                                </h1>
                                <h2 className="my-3">
                                Fédération mondiale de 200 000 jeunes professionnels et entrepreneurs, âgés de 18 à 40 ans, répartis en près de 5 000 communautés dans plus de 100 pays à travers le monde.
                                </h2>
                                <div className="mt-3">
                                    {/* <NavLink to={visit} className="btn-get-started ">
                                        {btnname}
                                    </NavLink> */}
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default CommonTwo;
