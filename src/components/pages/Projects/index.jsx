import React from "react";
import * as S from "./style";
import { Info } from "../../../assets/projects-content";
import ProjectCard from "../../ProjectCard";
import Header from "../../Header";
import BtnScroll from "../../BtnScroll";

export default function Projects() {
	return (
		<>
			<S.Main>
				<Header color={"var(--green150)"} />
				<S.Container>
					{Info.map((i, index) => (
						<ProjectCard
							title={i.title}
							tech={i.techstack}
							img={i.img}
							code={i.code}
							demo={i.demo}
							key={index}
						/>
					))}
				</S.Container>
				<BtnScroll />
			</S.Main>
		</>
	);
}
