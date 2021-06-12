import React from "react";
import "./css/Hero.css";
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Montserrat:wght@100&display=swap');
</style>

const Hero = () => {
    return (
        <div className="jumbotron">
      
        <div className="container-sm body">
          <h1 className="display-4">Health, made tasty. </h1>
          <p className="lead">Welcome to Healthful Pantry and start your journey to health freedom today!</p>
          
        <p>Eat your way back to health and fight back from chronic illness and disease. </p>
        <p className="lead">
         <a className="btn btn-primary btn-lg" href="/search" role="button">Get Started!</a>
        </p>
         </div>
      </div>
   
    )
}

export default Hero;
