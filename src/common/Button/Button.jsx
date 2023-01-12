import styles from './Button.module.scss';

const Button = ({ buttonText, onClick, icon }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{buttonText}
			{icon}
		</button>
	);
};

export default Button;
