import React from "react";
import About from "../../components/About";
import BtnScroll from "../../components/BtnScroll";
import Head from "../../components/Head";

export default function Home() {
	return (
		<>
			<Head />
			<About />
			<BtnScroll color={"var(--beige100)"} />
		</>
	);
}
