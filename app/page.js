import data from "@data/projects.json";
import {ProjectCard} from "@ui/Project";

export default function Home() {
	return (
		<main className="px-5 max-w-screen-2xl mx-auto grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
			{data.map((item, index) => (
				<ProjectCard
					key={index}
					slug={item.slug}
					title={item.title}
					shortDescription={item.shortDescription}
					imgPath={item.imgPath}
					disabled={item.disabled}
				/>
			))}
		</main>
	);
}
