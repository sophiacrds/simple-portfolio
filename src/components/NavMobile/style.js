import styled from "styled-components";
import * as Original from "../NavList/style";

export const List = styled(Original.List)`
	@media (max-width: 750px) {
		display: flex;
		flex-direction: column;
		position: absolute;
		right: 0rem;
		width: max-content;
		align-items: flex-end;
		text-align: end;
		gap: 0;

		#nop {
			display: none;
		}
	}

	@media (min-width: 750px) {
		display: none;
	}
`;

export const HashLinkStyle = styled(Original.HashLinkStyle)`
	@media (max-width: 750px) {
		display: unset;
		width: 100%;
		font-size: 1.5rem;
		padding: 1.5rem;
		border-right: 3px solid var(--beige100);
		border-bottom: 3px solid var(--beige100);
	}
	@media (min-width: 750px) {
		display: none;
	}
`;

export const Onu = styled(Original.Onu)`
	@media (max-width: 750px) {
		display: unset;
		width: 100%;
		font-size: 1.5rem;
		padding: 1.5rem;
		border-right: 3px solid var(--beige100);
		border-bottom: 3px solid var(--beige100);
	}
	@media (min-width: 750px) {
		display: none;
	}
`;
