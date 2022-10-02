import styled from "styled-components";
import img from "../../assets/images/sophia.jpg";

export const AboutSec = styled.section`
	width: 100%;

	padding: var(--pad);

	display: flex;
	justify-content: center;
	align-items: center;

	background: var(--green850);

	@media (min-width: 500px) {
		height: 100vh;
	}
	@media (min-width: 1700px) {
		height: 50rem;
	}
`;

export const CardProfile = styled.div`
	max-width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	background: var(--green150);
	box-shadow: 8px 8px 0 var(--green900);

	@media (min-width: 750px) {
		max-width: 75%;
		flex-direction: row;
	}
`;

export const Box = styled.div`
	width: 100%;
	height: 30vw;
	background-image: url(${img}) !important;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	align-self: stretch;

	@media (min-width: 750px) {
		height: auto;
		width: 300%;
	}
`;

export const Text = styled.p`
	font-size: 1.4rem;
	padding: 2rem;
	color: black;

	@media (min-width: 750px) {
		font-size: 1.2rem;
	}
`;
