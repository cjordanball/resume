import styles from './experiencesBox.module.css';
import { JobBox } from '..';
import { employmentContent } from '../../content';

const ExperiencesBox = () => {
	const jobs = employmentContent.priorJobs;
	const jobsContent = jobs.map((val) => {
		return <JobBox key={val.companyName} data={val} />;
	});
	return (
		<div className={styles.container}>
			<div className={styles.titleSection}>
				{employmentContent.sectionTitle}
			</div>
			<div className={styles.jobListSection}>{jobsContent}</div>
		</div>
	);
};

export default ExperiencesBox;
