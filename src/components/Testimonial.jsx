import React from 'react';
import './css/Testimonial.css'

const Testimonial = () => {
    return (
        <div >
            <h1 className="testimonialHeader">Testimonials</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
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
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>

    )
}

export default Testimonial;