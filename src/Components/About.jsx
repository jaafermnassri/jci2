import React from 'react'
import about from "../images/about.svg";
import Common from './Common'
import CommonTwo from './CommonTwo';
import CommonThree from './CommonThree'
import Home from './Home';
import AboutData from './AboutData';

const About = () => {
    return (
        <>
            <Common 
                name='Nous Somme' 
                imgsrc="./aboutone.jpg" 
                visit='/contact' 
                btnname="Contact Now" 
            />
             <CommonTwo 
                name='La Jeune Chambre Internationale' 
                imgsrc={about} 
                isCompName={true}
                compName="JCI"
                visit='/services' 
                btnname="Get Started" 
            />
            <CommonThree 
                name='Welcome to About Page' 
                imgsrc="./president.jpg" 
                visit='/contact' 
                btnname="Contact Now" 
            />
        </>
    )
}

export default About
