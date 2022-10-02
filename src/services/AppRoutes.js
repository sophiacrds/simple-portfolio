import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Projects from "../components/pages/Projects";
import Home from "../components/pages/Home";

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</Router>
	);
}
