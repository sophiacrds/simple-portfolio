import React from "react";
import Home from "./components/Home";
import Projects from "./components/pages/Projects";
import { GlobalStyle } from "./global/GlobalStyle";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Home />
			<Projects />
		</>
	);
}
