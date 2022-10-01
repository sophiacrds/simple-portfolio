import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderStyle = styled.header`
	width: 100%;
	height: 6rem;
	padding: var(--pad);

	display: flex;
	justify-content: space-between;
	align-items: center;

	background: transparent;
`;

export const Icon = styled(FontAwesomeIcon)`
	height: 3rem;
	color: var(--beige100);
	cursor: pointer;

	&:hover {
		transition: 1s all;
		transform: rotate(360deg);
	}
`;

export const Nav = styled.nav`
	width: fit-content;
`;

export const List = styled.ul`
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 3rem;

	color: var(--beige100);

	a {
		color: unset;
		text-decoration: none;

		&:hover {
			text-decoration: underline !important;
		}
	}

	li {
		list-style: none;
		font-size: 1.4rem;
		text-transform: uppercase;
	}
`;
