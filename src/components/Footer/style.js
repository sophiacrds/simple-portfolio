import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = styled.footer`
	width: 100%;
	/* height: 10rem; */
	padding: var(--pad);
	color: var(--beige100);

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	background: var(--green950);
`;

export const MediaBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Icons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
`;

export const MediaIcon = styled(FontAwesomeIcon)`
	height: 3rem;
	margin: 0.8rem 0;

	&:hover {
		color: white;
		transform: scale(1.2);
	}
`;

export const Credits = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0 -10px;
`;
