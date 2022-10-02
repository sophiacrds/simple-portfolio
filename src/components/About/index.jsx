import React from "react";
import * as S from "./style";
import img from "../../assets/images/sophia.jpg";

export default function About() {
	return (
		<S.AboutSec id="about">
			<S.CardProfile>
				<S.Img src={img} alt="" />
				<S.Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam sed magni excepturi
					exercitationem recusandae nisi eum asperiores aperiam impedit! Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Magni, eaque. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Provident quasi qui nostrum ut quo quae suscipit maxime tenetur nihil
					in?
				</S.Text>
			</S.CardProfile>
		</S.AboutSec>
	);
}
