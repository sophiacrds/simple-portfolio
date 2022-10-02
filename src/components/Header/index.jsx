import React from "react";
import * as S from "./style";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

export default function Header(p) {
	return (
		<S.HeaderStyle color={p.color}>
			<HashLink smooth to={"/#top"}>
				<S.Icon icon={faStarOfLife} title="home" />
			</HashLink>
			<S.Nav>
				<S.List>
					<S.HashLinkStyle smooth to={"/#about"}>
						about
					</S.HashLinkStyle>
					<S.HashLinkStyle smooth to={"/projects#top"}>
						projects
					</S.HashLinkStyle>
					<S.HashLinkStyle smooth to={"/#contact"}>
						contact
					</S.HashLinkStyle>
					<a href="https://onu-sdg.netlify.app">
						<S.Onu>ONU - SDG</S.Onu>
					</a>
				</S.List>
			</S.Nav>
		</S.HeaderStyle>
	);
}
