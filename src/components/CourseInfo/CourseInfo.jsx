import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { pipeDuration } from '../../helpers/pipeDuration';
import { dateGenerator } from '../../helpers/dateGenerator';
import { authorNameById } from '../../helpers/authorNameById';
import { authorsList } from '../../store/authors/selectors';

import styles from './CourseInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CourseInfo = () => {
	const { state } = useLocation();
	const authorsListData = useSelector(authorsList);

	const course = state;
	return (
		<div className={styles.courseInfoContainer}>
			<Link to='/courses' className={styles.link}>
				<FontAwesomeIcon icon={faArrowLeft} />
				<span>back to courses</span>
			</Link>
			<div className={styles.courseInfo}>
				<div className={styles.block1}>
					<h2>{course.title}</h2>
					<p>{course.description}</p>
				</div>
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
						<strong>Authors: </strong>
						{authorNameById(course.authors, authorsListData)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default CourseInfo;
