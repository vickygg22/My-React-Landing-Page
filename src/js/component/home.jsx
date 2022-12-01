import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<>
		<div className="text-center">
			<Navbar />
		<div className="container">
		<Jumbotron />
		<Card />
		</div>
		<Footer />
		</div>
		</>
	);
};

export default Home;
