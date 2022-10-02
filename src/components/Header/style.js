import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export const HeaderStyle = styled.header`
	width: 100%;
	height: 6rem;
	padding: var(--pad);

	display: flex;
	justify-content: space-between;
	align-items: center;

	position: fixed;
	top: 0;

	background: ${(p) => (p.color ? p.color : "transparent")};
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
	}
`;

export const LinkStyle = styled(NavLink)`
	list-style: none;
	font-size: 1.4rem;
	text-transform: uppercase;

	&:hover {
		text-decoration: underline !important;
	}
`;

export const HashLinkStyle = styled(NavHashLink)`
	list-style: none;
	font-size: 1.4rem;
	text-transform: uppercase;

	&:hover {
		text-decoration: underline !important;
	}
`;

export const Onu = styled.span`
	font-size: 1.4rem;
	text-transform: uppercase;

	&:hover {
		text-decoration: underline double var(--green500) !important;
		color: white;
	}
`;
