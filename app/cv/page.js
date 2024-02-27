import Link from "next/link";
import cvData from "@data/cv.json";
import styles from "@css/cv.module.css";
import CvDownload from "./CvDownload";

export const CvTitle = ({label}) => {
	return (
		<h3 className={`${styles.cvTitle} text-displaySmall pb-3 pt-2`}>{label}</h3>
	);
};

export const CvContent = ({title, subtitle, description, start, end}) => {
	return (
		<div className="mt-3 mb-5">
			<span className={`${styles.helpText} text-baseSmall mb-1`}>
				{start} - {end}
			</span>
			<h1 className="text-displaySmall">{title}</h1>
			<h2 className={`${styles.helpText} text-baseLarge`}>{subtitle}</h2>
			<p className="text-baseMedium mt-3 max-w-screen-sm">{description}</p>
		</div>
	);
};

const CurriculumVitae = () => {
	const data = Object.values(cvData.pl);

	return (
		<main className="py-8">
			<div className="wrapper">
				{data.map((category, categoryIndex) => (
					<section key={categoryIndex}>
						<CvTitle label={category.title} />
						{(category.id === "experience" || category.id === "education") &&
							category.items.map((item, itemIndex) => (
								<CvContent
									key={itemIndex}
									title={item.title}
									subtitle={item.subtitle}
									description={item.description}
									start={item.startDate}
									end={item.endDate}
								/>
							))}
						<ul className="md:grid md:grid-cols-2 mt-3 mb-5 text-baseMedium">
							{(category.id === "tools" || category.id === "skills") &&
								category.items.map((item, itemIndex) => (
									<li key={itemIndex}>{item}</li>
								))}
						</ul>
						<ul className="flex gap-6 mt-3 mb-5 text-baseLarge">
							{category.id === "socialMedia" &&
								category.items.map((item, itemIndex) => (
									<li key={itemIndex}>
										<Link
											href={item.link}
											title={item.title}
											className="link"
											target="_blank">
											{item.title}
										</Link>
									</li>
								))}
						</ul>
					</section>
				))}
				<CvDownload />
			</div>
		</main>
	);
};

export default CurriculumVitae;
