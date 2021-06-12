import React from 'react';
import './css/Testimonial.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Montserrat:wght@100&display=swap');
</style>

const Testimonial = () => {
    return (
        <div className="testDiv">
            <h1 className="testimonialHeader">Testimonials</h1>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <blockquote className="blockquote text-center">
  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer className="blockquote-footer">Software Engineer <cite title="Source Title">Charlene Batiste</cite></footer>
</blockquote>
    </div>
    <div className="carousel-item">
    <blockquote className="blockquote text-center">
  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer className="blockquote-footer">Software Engineer <cite title="Source Title">Avery Wood</cite></footer>
</blockquote>
    </div>
    <div className="carousel-item">
    <blockquote className="blockquote text-center">
  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer className="blockquote-footer">Software Engineer <cite title="Source Title">Amanda Posey</cite></footer>
</blockquote>
    </div>
    <div className="carousel-item">
    <blockquote className="blockquote text-center">
  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer className="blockquote-footer">Software Engineer <cite title="Source Title">Brianna Giorgi</cite></footer>
</blockquote>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>

    )
}

export default Testimonial;