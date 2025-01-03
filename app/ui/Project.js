import Link from "next/link";
import Image from "next/image";
import style from "@css/project.module.css";

export const ProjectCard = ({slug, title, shortDescription, imgPath, disabled}) => {
	return (
		<Link
			href={`/${slug}`}
			title={title}
			className={`${style.projectCard} flex flex-col justify-between items-center pt-6 text-center rounded-lg overflow-hidden ${disabled ? "pointer-events-none relative opacity-80" : ""}`}>
			<div className={`px-5 max-w-xs ${disabled ? "opacity-10" : ""}`}>
				<h2 className="text-headlineMedium">{title}</h2>
				<p className="text-baseMedium text-balance mb-4">{shortDescription}</p>
			</div>
			{imgPath && (<Image src={imgPath} alt={title} width={924} height={412} className={disabled && ("opacity-10")}/>)}
			{disabled && (<span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Wkrótce</span>)}
		</Link>
	);
};
