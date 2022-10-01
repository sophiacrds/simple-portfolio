import styled from "styled-components";

export const HomeSec = styled.section`
	width: 100%;
	height: 100vh;

	background: var(--green900);
`;

export const HomeContent = styled.div`
	width: 100%;
	height: calc(100vh - 6rem);

	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 3rem;
		color: var(--beige100);
	}
`;
