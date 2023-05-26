import styles from './otherEducation.module.css';
import education from '../../content/education';
import ProgramBox from './ProgramBox';

const OtherEducation = () => {
	const schools = education.other.courses;
	const schoolMap = schools.map((val) => {
		return <ProgramBox key={val.name} data={val} />;
	});
	return (
		<div className={styles.container}>
			<div className={styles.titleSection}>
				<span className={styles.mainTitle}>
					{`${education.other.headlineMain} (${education.other.headlineSub})`}
				</span>
			</div>
			<div className={styles.schoolList}>{schoolMap}</div>
		</div>
	);
};

export default OtherEducation;
