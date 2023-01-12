import styles from './Input.module.scss';

const Input = ({ labelText, placeholderText, onChange }) => {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor='field'>{labelText}</label>
			<input
				type='text'
				placeholder={placeholderText}
				id='field'
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
