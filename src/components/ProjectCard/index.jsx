import React from "react";
import * as S from "./style";

export default function ProjectCard(p) {
	return (
		<>
			<S.Card>
				<S.Img src={p.img} alt={`${p.title} Website`} title={`${p.title} Website`} />

				<S.TextContent>
					<S.Title>{p.title}</S.Title>
					<S.Tags>
						{p.tech.map((i, index) => (
							<S.Tag key={index}>{i}</S.Tag>
						))}
					</S.Tags>
					<S.BtnBox>
						<S.Btn
							onClick={() => {
								document.location = `https://github.com/sophiacrds/${p.code}`;
							}}
						>
							repo
						</S.Btn>
						<S.Btn
							onClick={() => {
								document.location = p.demo;
							}}
						>
							live demo
						</S.Btn>
					</S.BtnBox>
				</S.TextContent>
			</S.Card>
			<S.Divisor></S.Divisor>
		</>
	);
}
