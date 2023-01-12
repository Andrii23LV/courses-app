import { useState } from 'react';

import { mockedCoursesList as courses } from '../../constants.js';
import CourseCard from './components/CourseCard/CourseCard.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

const Courses = ({ setCreate }) => {
	const [query, setQuery] = useState();
	return (
		<>
			<SearchBar setQuery={setQuery} setCreate={setCreate} />
			{query
				? courses
						.filter(
							(course) =>
								course.title.toLowerCase().includes(query) ||
								course.id.includes(query)
						)
						.map((course) => {
							return <CourseCard key={course.id} course={course} />;
						})
				: courses.map((course) => {
						return <CourseCard key={course.id} course={course} />;
				  })}
		</>
	);
};

export default Courses;
