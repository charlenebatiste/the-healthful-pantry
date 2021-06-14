import React from "react";
import "./css/Testimonial.css";

const Testimonial = () => {
	return (
		<div className="testDiv">
			<h1 className="testimonialHeader">
				Testimonials
			</h1>

			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<blockquote className="blockquote text-center">
							<p className="text__content mb-0">
								Amazing!
							</p>
							<footer className="blockquote-footer">
								Software Engineer{" "}
								<cite title="Source Title">
									Charlene
									Batiste
								</cite>
							</footer>
						</blockquote>
					</div>
					<div className="carousel-item">
						<blockquote className="blockquote text-center">
							<p className="text__content mb-0">
								I have used this.
							</p>
							<footer className="blockquote-footer">
								Software Engineer{" "}
								<cite title="Source Title">
									Avery Wood
								</cite>
							</footer>
						</blockquote>
					</div>
					<div className="carousel-item">
						<blockquote className="blockquote text-center">
							<p className="text__content mb-0">
								It works! 
							</p>
							<footer className="blockquote-footer">
								Software Engineer{" "}
								<cite title="Source Title">
									Amanda Posey
								</cite>
							</footer>
						</blockquote>
					</div>
					<div className="carousel-item">
						<blockquote className="blockquote text-center">
							<p className="text__content mb-0">
								Lots of potential!
							</p>
							<footer className="blockquote-footer">
								Software Engineer{" "}
								<cite title="Source Title">
									Brianna Giorgi
								</cite>
							</footer>
						</blockquote>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">
						Previous
					</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">
						Next
					</span>
				</button>
			</div>
		</div>
	);
};

export default Testimonial;
