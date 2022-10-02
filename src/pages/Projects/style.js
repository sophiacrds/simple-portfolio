import styled from "styled-components";

export const Main = styled.main`
	width: 100%;
	height: 100%;
	/* padding: var(--pad); */

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: var(--green150);
`;

export const Container = styled.div`
	/* width: 100%;
	height: 100%; */
	padding: 2rem 1rem;
	margin-top: 4rem;

	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	align-items: center;

	@media (min-width: 700px) {
		padding: 2rem;
	}
`;
