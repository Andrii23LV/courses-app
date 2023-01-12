import styles from './Button.module.scss';

const Button = ({ buttonText, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{buttonText}
		</button>
	);
};

export default Button;
