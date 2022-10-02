import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";

export const List = styled.ul`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 3rem;

	@media (max-width: 750px) {
		display: none;
	}
`;

export const HashLinkStyle = styled(NavHashLink)`
	list-style: none;
	font-size: 1.4rem;
	text-transform: uppercase;
	color: var(--beige100);

	&:hover {
		text-decoration: underline;
	}

	@media (max-width: 750px) {
		display: none;
	}
`;

export const Onu = styled.a`
	font-size: 1.4rem;
	text-transform: uppercase;
	color: #dac877;

	&:hover {
		text-decoration: underline double;
	}

	@media (max-width: 750px) {
		display: none;
	}
`;
