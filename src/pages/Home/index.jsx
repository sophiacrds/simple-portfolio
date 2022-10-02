import React from "react";
import About from "../../components/About";
import BtnScroll from "../../components/BtnScroll";
import Footer from "../../components/Footer";
import Head from "../../components/Head";

export default function Home() {
	return (
		<>
			<Head />
			<About />
			<Footer />
			<BtnScroll color={"var(--beige100)"} />
		</>
	);
}
