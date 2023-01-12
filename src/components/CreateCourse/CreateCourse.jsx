import { useState, useEffect } from 'react';

import { v4 as newId } from 'uuid';

import styles from './CreateCourse.module.scss';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import DurationInfo from './components/DurationInfo/DurationInfo';

import { mockedAuthorsList } from '../../constants.js';
import { mockedCoursesList } from '../../constants.js';
import { dateGenerator } from '../../helpers/dateGenerator';

const CreateCourse = ({ setCreate }) => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [duration, setDuration] = useState();
	const [newAuthor, setNewAuthor] = useState();
	const [authors, setAuthors] = useState([]);
	const [addedAuthors, setAddedAuthors] = useState([]);

	useEffect(() => {
		setAuthors(mockedAuthorsList);
	}, []);

	return (
		<section>
			<div className={styles.block1}>
				<Input
					labelText={'Title'}
					placeholderText={'Enter title...'}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Button
					buttonText={'Create course'}
					onClick={() => {
						mockedCoursesList.push({
							id: newId(),
							title: title,
							description: description,
							creationDate: dateGenerator(),
							duration: duration,
							authors: addedAuthors,
						});
						setCreate(false);
					}}
				/>
			</div>
			<div className={styles.textareaContainer}>
				<label htmlFor='descrip'>Description</label>
				<textarea
					id='descrip'
					placeholder='Enter description'
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className={styles.detailsContainer}>
				<div className={styles.detailsInputs}>
					<div className={styles.inputContainer}>
						<h3>Add author</h3>
						<Input
							labelText={'Author name'}
							placeholderText={'Enter author name...'}
							onChange={(e) => setNewAuthor(e.target.value)}
						/>
						<Button
							buttonText={'Create author'}
							onClick={() => {
								setAuthors((currentArray) => [
									...currentArray,
									{ name: newAuthor, id: newId() },
								]);
							}}
						/>
					</div>
					<div className={styles.inputContainer}>
						<h3>Duration</h3>
						<Input
							labelText={'Duration'}
							placeholderText={'Enter duration in minutes...'}
							onChange={(e) => setDuration(e.target.value)}
						/>
						<DurationInfo duration={duration} />
					</div>
				</div>
				<div className={styles.authorsContainer}>
					<h3>Authors</h3>
					<ul className={styles.authorsList}>
						{authors
							.filter((author) => !addedAuthors.includes(author))
							.map((author) => {
								return (
									<li key={author.id}>
										<p>{author.name}</p>
										<Button
											buttonText={'Add author'}
											onClick={() =>
												setAddedAuthors((currentArray) => [
													author,
													...currentArray,
												])
											}
										/>
									</li>
								);
							})}
					</ul>
					<h3>Course authors</h3>
					<ul className={styles.authorsList}>
						{addedAuthors.length ? (
							addedAuthors.map((addedAuthor) => {
								return (
									<li key={addedAuthor.id}>
										<p>{addedAuthor.name}</p>
										<Button
											buttonText={'Delete author'}
											onClick={() => {
												setAddedAuthors((currentArray) =>
													currentArray.filter(
														(author) => author !== addedAuthor
													)
												);
											}}
										/>
									</li>
								);
							})
						) : (
							<li>Author list is empty</li>
						)}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default CreateCourse;
