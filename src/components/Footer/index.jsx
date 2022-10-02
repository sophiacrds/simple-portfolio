import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import * as S from "./style";

export default function Footer() {
	return (
		<S.Footer id="contact">
			<S.MediaBox>
				<S.Icons>
					<a href="https://www.linkedin.com/in/sophialeao/" title="Sophia's Linkedin profile">
						<S.MediaIcon icon={faLinkedin} />
					</a>
					<a href="https://github.com/sophiacrds" title="Sophia's Github profile">
						<S.MediaIcon icon={faGithub} />
					</a>
				</S.Icons>
				<p>+55 69 992229479</p>
				<p>sophialeaocardoso@hotmail.com</p>
			</S.MediaBox>
			<S.Credits>
				<p>designed and developed by Sophia Leão; all credits reserved 2022</p>
			</S.Credits>
		</S.Footer>
	);
}
