import styled from "styled-components";

export const Card = styled.section`
	width: 100%;
	padding: var(--pad);

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

export const Img = styled.img`
	width: 45vmax;
	max-width: 600px;
	border: 5px solid black;
`;

export const TextContent = styled.div`
	width: 20rem;
	text-align: start;

	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	gap: 1.5rem;
`;

export const Title = styled.h2`
	font-size: 2.5rem;
`;

export const Tags = styled.span`
	width: 18rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

export const Tag = styled.span`
	padding: 0.5rem;
	background: var(--beige100);
	color: var(--green800);
`;

export const BtnBox = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Btn = styled.div`
	/* width: 6rem;
	height: 3rem; */
	padding: 0.5rem 0.8rem;

	display: flex;
	justify-content: center;
	align-items: center;

	color: var(--beige100);
	background: var(--green900);
	/* border: 2px solid black; */
	cursor: pointer;

	&:hover {
		transition: 0.2s all;
		transform: skewX(-10deg);
	}
`;

export const Divisor = styled.div`
	width: 85vw;
	max-width: 1000px;
	height: 0.2rem;
	margin: 4rem 0;

	background: var(--beige100);

	&:last-child {
		display: none;
	}
`;
