import styles from './experiencesBox.module.css';
import { JobBox } from '..';
import { employmentContent } from '../../content';

const ExperiencesBox = () => {
	const jobs = employmentContent;
	const jobsContent = jobs.map((val) => {
		return <JobBox key={val.companyName} data={val} />;
	});
	return <div className={styles.container}>{jobsContent}</div>;
};

export default ExperiencesBox;
