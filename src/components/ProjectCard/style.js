import styled from "styled-components";

export const Card = styled.section`
	width: 100%;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	@media (min-width: 1050px) {
		flex-direction: ${(p) => (p.reverse ? "row-reverse" : "row")};
	}
`;

export const Img = styled.img`
	width: 70vmin;

	border: 5px solid black;

	@media (min-width: 1050px) {
		width: 45vmax;
		max-width: 600px;
	}
`;

export const TextContent = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1.5rem;

	@media (min-width: 1050px) {
		text-align: ${(p) => (p.reverse ? "end" : "start")};
		width: 20rem;
		align-items: ${(p) => (p.reverse ? "flex-end" : "flex-start")};
	}
`;

export const Title = styled.h2`
	font-size: 2rem;

	@media (min-width: 1050px) {
		font-size: 2.5rem;
	}
`;

export const Tags = styled.span`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;

	@media (min-width: 1050px) {
		width: 18rem;
		justify-content: ${(p) => (p.reverse ? "flex-end" : "flex-start")};
	}
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
		background: var(--green800);
		color: black;
	}
`;

export const Divisor = styled.div`
	width: 85%;
	max-width: 1000px;
	height: 0.2rem;
	margin: 2rem 0;

	background: var(--beige100);

	&:last-child {
		display: none;
	}

	@media (min-width: 600px) {
		margin: 4rem 0;
	}
`;
