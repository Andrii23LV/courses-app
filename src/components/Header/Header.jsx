import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { isAuth, token, user } from '../../store/user/selectors';
import { logoutServiceOperation } from '../../store/user/thunks';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authToken = useSelector(token);
	const auth = useSelector(isAuth);
	const userInfo = useSelector(user);

	const handleLogout = async () => {
		dispatch(logoutServiceOperation(authToken));
		navigate('/login');
	};

	return (
		<header className={styles.header} data-testid='header'>
			<Logo />
			<h2>Courses</h2>
			<div className={styles.userContainer}>
				{auth && (
					<>
						<p className={styles.username} data-testid='name'>
							{userInfo.name}
						</p>
						<Button buttonText={'Logout'} onClick={handleLogout} />
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
