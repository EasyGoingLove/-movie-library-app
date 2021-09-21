import React from "react";

import './Hero.css';

import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";



const Hero = () => {

    return(
        <div className="hero-container">
         <FeaturedMovie/>

        </div>
    );
    
}

export default Hero;