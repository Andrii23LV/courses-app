import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SearchBar.module.scss';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

const SearchBar = ({ setQuery, setCreate }) => {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e) => {
		e.preventDefault();
		setInputValue(e.target.value);
	};

	const handleSubmit = () => {
		setQuery(inputValue);
	};

	useEffect(() => {
		if (inputValue === '') setQuery(inputValue);
	}, [inputValue, setQuery]);

	return (
		<div className={styles.searchBar}>
			<div className={styles.inputContainer}>
				<Input
					labelText={'Search'}
					placeholderText={'Enter course name or id'}
					onChange={(e) => handleChange(e)}
				/>
				<Button buttonText={'Search'} onClick={handleSubmit} />
			</div>
			<Button
				buttonText={'Add new course'}
				onClick={() => navigate(`/courses/add`)}
			/>
		</div>
	);
};

export default SearchBar;
