import { useNavigate } from 'react-router-dom';

import styles from './CourseCard.module.scss';
import Button from '../../../../common/Button/Button.jsx';
import { dateGenerator } from '../../../../helpers/dateGenerator';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { authorNameById } from '../../../../helpers/authorNameById';

const CourseCard = ({ course }) => {
	const navigate = useNavigate();

	console.log(course);
	return (
		<div className={styles.card}>
			<div className={styles.description}>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className={styles.details}>
				<p>
					<span className={styles.label}>Authors:</span>
					{authorNameById(course.authors)}
				</p>
				<p>
					<span className={styles.label}>Duration:</span>
					{pipeDuration(course.duration)} hours
				</p>
				<p>
					<span className={styles.label}>Created:</span>
					{dateGenerator(course.creationDate)}
				</p>

				<Button
					buttonText={'Show courses'}
					className={styles.button}
					onClick={() => navigate(`/courses/${course.id}`, { state: course })}
				/>
			</div>
		</div>
	);
};

export default CourseCard;
