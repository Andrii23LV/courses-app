import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuth } from './store/user/selectors';

const PrivateRoutes = ({ children }) => {
	const auth = useSelector(isAuth) || null;
	return auth ? children : <Navigate to='/login' />;
};

export { PrivateRoutes };
