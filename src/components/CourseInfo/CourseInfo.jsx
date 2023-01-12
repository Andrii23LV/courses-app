import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { pipeDuration } from '../../helpers/pipeDuration';
import { dateGenerator } from '../../helpers/dateGenerator';
import { authorNameById } from '../../helpers/authorNameById';

const CourseInfo = () => {
	const { state } = useLocation();
	const course = state;

	console.log(state);
	console.log(course);

	return (
		<div>
			<Link to='/courses'>back to courses</Link>
			<h2>{course.title}</h2>
			<p>{course.description}</p>
			<ul>
				<li>
					<strong>ID:</strong> {course.id}
				</li>
				<li>
					<strong>Duration:</strong> {pipeDuration(course.duration)} hours
				</li>
				<li>
					<strong>Created:</strong> {dateGenerator(course.createdDate)}
				</li>
				<li>
					<strong>Authors:</strong> {authorNameById(course.authors)}
				</li>
			</ul>
		</div>
	);
};

export default CourseInfo;
