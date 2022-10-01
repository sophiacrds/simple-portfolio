import React from "react";
import * as S from "./style";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	return (
		<S.HeaderStyle>
			<S.Icon icon={faStarOfLife} />
			<S.Nav>
				<S.List>
					<a href="">
						<li>about</li>
					</a>
					<a href="">
						<li>projects</li>
					</a>
					<a href="#contact">
						<li>contact</li>
					</a>
					<a href="#contact">
						<li>
							<span>ONU - SDG</span>
						</li>
					</a>
				</S.List>
			</S.Nav>
		</S.HeaderStyle>
	);
}
