import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PrivateRoutes } from './PrivateRoutes';
const Courses = lazy(() => import('./components/Courses/Courses'));
const CourseInfo = lazy(() => import('./components/CourseInfo/CourseInfo'));
const CourseForm = lazy(() => import('./components/CourseForm/CourseForm'));
const Registration = lazy(() =>
	import('./components/Registration/Registration')
);
const Login = lazy(() => import('./components/Login/Login'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route
					path='/courses'
					element={
						<PrivateRoutes>
							<Courses />
						</PrivateRoutes>
					}
				/>
				<Route
					path='/courses/:id'
					element={
						<PrivateRoutes>
							<CourseInfo />
						</PrivateRoutes>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<PrivateRoutes>
							<CourseForm />
						</PrivateRoutes>
					}
				/>
				<Route
					path='/courses/update/:id'
					element={
						<PrivateRoutes>
							<CourseForm />
						</PrivateRoutes>
					}
				/>
				<Route path='/registration' index element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<Navigate to='/login' replace={true} />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
