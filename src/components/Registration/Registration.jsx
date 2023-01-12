import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signupServiceOperation } from '../../store/user/thunks';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import styles from './Registration.module.scss';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleClick = async (e) => {
		e.preventDefault();

		const requestObject = {
			name: name,
			email: email,
			password: password,
		};

		dispatch(signupServiceOperation(requestObject));

		navigate('/login');
	};

	return (
		<form className={styles.form}>
			<h2>Create new account</h2>
			<Input
				labelText={'Name'}
				placeholderText={'Enter name...'}
				onChange={handleName}
			/>
			<Input
				labelText={'Email'}
				placeholderText={'Enter email...'}
				onChange={handleEmail}
			/>
			<Input
				labelText={'Password'}
				placeholderText={'Enter password...'}
				onChange={handlePassword}
			/>
			<Button buttonText={'Registration'} onClick={handleClick} />
			<p>
				If you have an account you can <Link to='/login'>Login</Link>
			</p>
		</form>
	);
};

export default Registration;
