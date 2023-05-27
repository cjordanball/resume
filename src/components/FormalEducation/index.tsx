import styles from './formalEducation.module.css';
import SchoolBox from './SchoolBox';
import education from '../../content/education';

const FormalEducation = () => {
	const schools = education.formal.schools;

	const schoolMap = schools.map((val) => {
		return <SchoolBox key={val.name} data={val} />;
	});
	return (
		<div className={styles.container}>
			<div className={styles.titleSection}>
				<span className={styles.mainTitle}>
					{`${education.formal.headlineMain}${
						education.formal.headlineSub
							? `(${education.formal.headlineSub})`
							: ''
					}`}
				</span>
			</div>
			<div className={styles.schoolList}>{schoolMap}</div>
		</div>
	);
};

export default FormalEducation;
