import Image from "next/image";
import {notFound} from "next/navigation";
import projectData from "@data/projects.json";
import dictionary from "@data/dictionary.json";
import styles from "@css/project.module.css";
import {ProjectCard} from "@ui/Project";
import Button from "@ui/Button";
import {LinkArrowIcon} from "../ui/Icons";
import Link from "next/link";

function findPost({slug}) {
	const data = projectData.find((item) => item.slug === slug);
	return data;
}

function similarProjects(findPostFunction, similarProjects) {
	return similarProjects.map((project, index) => {
		const data = findPostFunction({slug: project.slug});

		return (
			<ProjectCard
				key={index}
				slug={project.slug}
				title={data.title}
				shortDescription={data.shortDescription}
				imgPath={data.imgPath}
			/>
		);
	});
}

export default function Page({params}) {
	const data = findPost(params);
	const dictionaryData = dictionary.projects;

	if (!data) {
		return notFound();
	}

	return (
		<>
			<div className="wrapper">
				<header
					className={`${styles.projectHeader} mt-6 pt-6 text-center rounded-lg overflow-hidden`}>
					<div className="px-5 py-6 max-w-lg mx-auto">
						<h2 className="text-headlineLarge mb-3">{data.title}</h2>
						<p className="text-baseLarge text-balance mb-4">
							{data.shortDescription}
						</p>
						{data.projectLink && (
							<Link
								href={data.projectLink}
								title={data.projectHeader}
								target="_blank">
								<Button className="mx-auto pr-4">
									{dictionaryData.projectLinkButton}
									<LinkArrowIcon />
								</Button>
							</Link>
						)}
					</div>
					<Image
						width={700}
						height={200}
						alt={`Zdjęcie w nagłówku - ${data.title}`}
						src={data.imgPath}
						className="mx-auto"
					/>
				</header>
			</div>
			<main className={`${styles.projectMain} py-12 px-5 mb-12`}>
				{data.content &&
					data.content.map((item, index) => {
						switch (item.type) {
							case "heading":
								return (
									<h3
										key={index}
										className="max-w-2xl mx-auto py-2 text-displayMedium text-balance">
										{item.text}
									</h3>
								);
							case "paragraph":
								return (
									<p
										key={index}
										className="max-w-2xl mx-auto py-2 text-baseLarge text-balance">
										{item.text}
									</p>
								);
							case "list":
								return (
									<ul
										key={index}
										className={`max-w-2xl mx-auto my-2 pb-2 text-baseLarge text-balance ${styles.list}`}>
										{item.items.map((listItem, itemIndex) => {
											return (
												<li key={itemIndex} className={styles.listItem}>
													{listItem}
												</li>
											);
										})}
									</ul>
								);
							case "image":
								return (
									<Image
										key={index}
										className="w-full wrapper mt-8 mb-8"
										width={item.imgWidth}
										height={item.imgHeight}
										src={item.imgUrl}
										alt={item.imgAlt}
									/>
								);
							default:
								return null;
						}
					})}
			</main>
			<div className="wrapper">
				<h5 className="text-displaySmall text-center my-6">Inne projekty</h5>
				<div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
					{similarProjects(findPost, data.similar)}
				</div>
			</div>
		</>
	);
}
