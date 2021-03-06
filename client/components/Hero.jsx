import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
	return (
		<div className="hero">
			<div className="col-xxs-12 col-md-8 col-lg-6">
				<h1>Say Goodbye</h1>
				<h1>To RFP<span className="hero-text-adjust">'s</span></h1>
				<h4>Wethos is the first freelance platform built specifically for nonprofits and socially conscious businesses, allowing you to find, source, and hire individual contractors that believe in your mission.</h4>
				<Link className="button button-light" to="#">Get Started</Link>
			</div>
		</div>
)};

export default Hero;
