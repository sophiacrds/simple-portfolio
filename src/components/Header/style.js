import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

	#menuMobile {
		@media (min-width: 750px) {
			display: none;
		}
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	height: 3rem;
	color: var(--beige100);
	cursor: pointer;

	&:hover {
		transition: 1s all;
		transform: rotate(360deg);
	}

	@media (max-width: 500px) {
		height: 2.4rem;
	}
`;

export const Nav = styled.nav`
	width: fit-content;
	position: relative;
`;
