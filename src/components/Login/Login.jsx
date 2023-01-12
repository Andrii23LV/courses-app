import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import styles from './Login.module.scss';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const requestObject = {
			email: email,
			password: password,
		};

		const request = await axios.post(
			'http://localhost:4000/login',
			requestObject
		);

		localStorage.setItem('token', request.data.result);

		navigate('/courses');

		console.log(request);
	};

	return (
		<form className={styles.form}>
			<h2>Login</h2>
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
			<Button buttonText={'Login'} onClick={handleClick} />
			<p>
				If you do not have an account you can{' '}
				<Link to='/registration'>Register</Link>
			</p>
		</form>
	);
};

export default Login;
