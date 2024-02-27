import styles from "@css/button.module.css";

const Button = ({children, className, onClick}) => {
	return (
		<button
			className={`
                h-12 md:h-10 px-6 flex items-center justify-center rounded-full
                ${styles.btnAccent} ${className}
            `}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
