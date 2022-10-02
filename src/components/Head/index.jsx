import React from "react";
import Header from "../Header";

import * as S from "./styled";

export default function Head() {
	return (
		<>
			<S.HomeSec>
				<Header />
				<S.HomeContent>
					<h1>Hello!</h1>
				</S.HomeContent>
			</S.HomeSec>
		</>
	);
}
