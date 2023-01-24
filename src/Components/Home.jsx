import React from 'react';
import home from "../images/home.svg";
import Common from './Common';
import CommonTwo from './CommonTwo';

const Home = () => {
    return (
        <>
            <Common 
                name='La Jeune Chambre Internationale' 
                imgsrc={home} 
                isCompName={true}
                compName="JCI"
                visit='/services' 
                btnname="Get Started" 
            />
            <hr/>
            <CommonTwo 
                name='La Jeune Chambre Internationale' 
                imgsrc={home} 
                isCompName={true}
                compName="JCI"
                visit='/services' 
                btnname="Get Started" 
            />
        </>
    )
}

export default Home;