import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		const token = localStorage.getItem('token');
		const request = await axios.delete('http://localhost:4000/logout', {
			headers: { Authorization: token },
		});

		navigate('/login');

		console.log(request);
	};

	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.userContainer}>
				<p className={styles.username}>Name</p>
				<Button buttonText={'Logout'} onClick={handleLogout} />
			</div>
		</div>
	);
};

export default Header;
