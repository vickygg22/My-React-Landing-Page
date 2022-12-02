import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import data from "./data.json"
//create your first component
const Home = () => {
	const listOfCards = data.map((item) => {
		return <Card item={item}/>
	})
	return (
		<>
		<div className="text-center">
			<Navbar />
		<div className="container">
		<Jumbotron />
		<div className=" marginLeft row">
			{listOfCards}
		</div>
		</div>
		<Footer />
		</div>
		</>
	);
};

export default Home;
