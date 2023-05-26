import styles from './onlineEducation.module.css';
import education from '../../content/education';

const OnlineEducation = () => {
	const courses = education.courses.courseNames;
	const courseList = courses.map((val) => {
		return (
			<div
				key={`${val}-${Math.random().toString()}`}
				className={styles.courseItem}
			>
				{val}
			</div>
		);
	});
	return <div className={styles.container}>{courseList}</div>;
};

export default OnlineEducation;
