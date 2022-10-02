import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Arrow = styled(FontAwesomeIcon)`
	height: 3.5rem;
	position: fixed;
	right: 5rem;
	bottom: 5rem;
	cursor: pointer;
	color: ${(p) => (p.color ? p.color : "black")};
`;

export default function BtnScroll(p) {
	const [status, setStatus] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 300) {
				setStatus(true);
			} else {
				setStatus(false);
			}
		});
	}, [status]);

	const goTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{status && (
				<Arrow
					color={p.color}
					icon={faArrowUp}
					onClick={() => {
						goTop();
					}}
				/>
			)}
		</>
	);
}
