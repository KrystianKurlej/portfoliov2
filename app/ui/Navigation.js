"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import dictionary from "@data/dictionary.json";
import styles from "@css/navigation.module.css";

export const NavItem = ({link, label}) => {
	return (
		<Link
			className={`${styles.navItem} text-baseMedium link`}
			title={label}
			href={link}>
			{label}
		</Link>
	);
};

export const TopNav = () => {
	const data = dictionary.navigation;

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setIsScrolled(currentScrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`${styles.topNav}`}>
			<div className={`${isScrolled ? styles.scrolled + " py-3" : "py-6"}`}>
				<div className="wrapper flex items-center justify-between">
					<Link href="/" title="Portfolio">
						<span className={`text-baseMedium ${styles.logo} `}>
							{data.title}
							<bdi> {data.subtitle}</bdi>
						</span>
					</Link>
					<div className="flex gap-3 items-center">
						{data.menu.map((item, index) => (
							<NavItem key={index} link={item.link} label={item.label} />
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};
