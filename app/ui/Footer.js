import dictionary from "@data/dictionary.json";
import styles from "@css/footer.module.css";

const Footer = () => {
	const data = dictionary.footer;

	return (
		<footer className={`${styles.footer} text-baseSmall text-center py-10`}>
			{data.copyrights} - {data.note}
		</footer>
	);
};

export default Footer;
