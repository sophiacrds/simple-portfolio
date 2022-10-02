import React from "react";
import * as S from "./style";
import { Info } from "../../assets/projects-content";
import ProjectCard from "../../components/ProjectCard";
import Header from "../../components/Header";
import BtnScroll from "../../components/BtnScroll";
import Footer from "../../components/Footer";

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
							reverse={i.reverse}
							key={index}
						/>
					))}
				</S.Container>
			</S.Main>
			<Footer />
			<BtnScroll />
		</>
	);
}
