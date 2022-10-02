import React, { useEffect, useState } from "react";
import * as S from "./style";
import { faStarOfLife, faBars } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import NavMobile from "../NavMobile";
import NavList from "../NavList";

export default function Header(p) {
	const [status, setStatus] = useState(false);

	return (
		<S.HeaderStyle color={p.color}>
			<HashLink smooth to={"/#top"}>
				<S.Icon icon={faStarOfLife} title="home" />
			</HashLink>
			<S.Nav>
				<S.Icon
					icon={faBars}
					id="menuMobile"
					onClick={() => {
						setStatus((p) => !p);
					}}
				/>
				{status && <NavMobile />}
				<NavList />
			</S.Nav>
		</S.HeaderStyle>
	);
}
