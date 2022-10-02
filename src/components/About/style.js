import styled from "styled-components";

export const AboutSec = styled.section`
	width: 100%;
	height: 100vh;
	padding: var(--pad);

	display: flex;
	justify-content: center;
	align-items: center;

	background: var(--green850);
`;

export const CardProfile = styled.div`
	width: 70%;
	height: 50%;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	background: var(--green150);
	box-shadow: 8px 8px 0 var(--green900);
`;

export const Img = styled.img`
	height: 100%;
	float: inline-start;
`;

export const Text = styled.p`
	font-size: 1.2rem;
	padding: 2rem;
	color: black;
`;
