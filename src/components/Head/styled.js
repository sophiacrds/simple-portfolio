import styled from "styled-components";

export const HomeSec = styled.section`
	width: 100%;
	height: 100vh;
	padding-top: 6rem;

	background: var(--green900);

	@media (min-width: 2000px) {
		height: 60rem;
	}
`;

export const HomeContent = styled.div`
	width: 100%;
	height: calc(100vh - 6rem);

	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 4rem;
		color: var(--beige100);
	}

	@media (min-width: 2000px) {
		height: 60rem;
	}
`;
