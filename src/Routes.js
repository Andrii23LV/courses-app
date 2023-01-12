import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Courses = lazy(() => import('./components/Courses/Courses'));
const CourseInfo = lazy(() => import('./components/CourseInfo/CourseInfo'));
const CreateCourse = lazy(() =>
	import('./components/CreateCourse/CreateCourse')
);
const Registration = lazy(() =>
	import('./components/Registration/Registration')
);
const Login = lazy(() => import('./components/Login/Login'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:id' element={<CourseInfo />} />
				<Route path='/courses/add' element={<CreateCourse />} />
				<Route path='/registration' index element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<Navigate to='/login' replace={true} />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;

// if (!token) {
//     // This router will handle my public routes. Anything else is going to redirect to AuthPage without losing the previous route typed.
//     return (
//       <BrowserRouter>
//         <Routes>
//           {/* Auth  */}
//           <Route path="/">
//             <Route exact path="recover" element={<UnknownPage />} />
//             // Default route
//             <Route path="*" element={<AuthPage setToken={setToken} />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   }

//   // This router is inside my application. Only logged users will get here.
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* My base page is just some fixed structure like Header, Sidebar and Footer. For this problem you can ignore it. */}
//         {/* BasePage  */}
//         <Route path="/*" element={<BasePage logout={logout} />}>
//           {/* This is my specific users route */ }
//           {/* Users */}
//           <Route path="users">
//             <Route path="" element={<UsersPage />} />
//             <Route path=":id" element={<UserInfoPage />} />
//           </Route>

//           {/* Anything else is going to show this page. Even random words like:  http:localhost:3000/anything-asdvasd */}
//           {/* Default Route */}
//           <Route path="*" element={<UnknownPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
