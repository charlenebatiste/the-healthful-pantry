import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="jumbotron">
      
        <div className="container-md">
          <h1 className="display-4">Health, made tasty. </h1>
          <p className="lead">Welcome to Healthful Pantry and start your journey to health freedom today!</p>
          
        <p>Eat your way back to health and fight back from chronic illnes and disease. </p>
        <p className="lead">
         <a className="btn btn-primary btn-lg" href="/search" role="button">Get Started!</a>
        </p>
         </div>
      </div>
   
    )
}

export default Hero;