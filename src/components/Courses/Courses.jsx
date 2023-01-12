import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { courses } from '../../store/courses/selectors.js';
import { token } from '../../store/user/selectors.js';
import { role } from '../../store/user/selectors';
import { getUserServiceOperation } from '../../store/user/thunks.js';
import { getAllCoursesServiceOperation } from '../../store/courses/thunks.js';

import CourseCard from './components/CourseCard/CourseCard.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

import styles from './Courses.module.scss';

const Courses = () => {
	const courseSelector = useSelector(courses);
	const userRole = useSelector(role);

	const [query, setQuery] = useState();
	const authToken = useSelector(token);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCoursesServiceOperation());

		if (!authToken) return;

		dispatch(getUserServiceOperation(authToken));
	}, [authToken, dispatch]);

	return (
		<div className={styles.coursesContainer}>
			<SearchBar setQuery={setQuery} userRole={userRole} />
			<ul className={styles.coursesList}>
				{query
					? courseSelector
							?.filter(
								(course) =>
									course.title.toLowerCase().includes(query) ||
									course.id.includes(query)
							)
							.map((course) => {
								return <CourseCard key={course.id} course={course} />;
							})
					: courseSelector?.map((course) => {
							return <CourseCard key={course.id} course={course} />;
					  })}
			</ul>
		</div>
	);
};

export default Courses;
