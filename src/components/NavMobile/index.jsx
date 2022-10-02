import React from "react";
import * as S from "./style";

export default function NavMobile() {
	return (
		<S.List>
			<S.HashLinkStyle smooth to={"/#about"} id="nop">
				about
			</S.HashLinkStyle>
			<S.HashLinkStyle smooth to={"/projects#top"}>
				projects
			</S.HashLinkStyle>
			<S.HashLinkStyle smooth to={"#contact"} id="nop">
				contact
			</S.HashLinkStyle>
			<S.Onu href="https://onu-sdg.netlify.app">
				<span>ONU - SDG</span>
			</S.Onu>
		</S.List>
	);
}
