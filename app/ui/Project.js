import Link from "next/link";
import Image from "next/image";
import style from "@css/project.module.css";

export const ProjectCard = ({slug, title, shortDescription, imgPath}) => {
	return (
		<Link
			href={`/${slug}`}
			title={title}
			className={`${style.projectCard} flex flex-col justify-between items-center pt-6 text-center rounded-lg overflow-hidden`}>
			<div className="px-5 max-w-xs">
				<h2 className="text-headlineMedium">{title}</h2>
				<p className="text-baseMedium text-balance mb-4">{shortDescription}</p>
			</div>
			<Image src={imgPath} alt={title} width={924} height={412} />
		</Link>
	);
};
