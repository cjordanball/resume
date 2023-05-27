import styles from './experienceBox.module.css';

interface ExperienceBoxProps {
	data:
		| {
				companyName: string;
				active: boolean;
				beginMonthYear: string;
				endMonthYear: string;
				description: string;
		  }
		| {
				companyName: string;
				active: boolean;
				beginMonthYear: string;
				endMonthYear: null;
				description: string;
		  };
}

const ExperienceBox = ({ data }: ExperienceBoxProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.titleSection}>{`${data.companyName} (${
				data.beginMonthYear
			} to ${data.endMonthYear ? data.endMonthYear : 'Present'})`}</div>
			<div
				className={styles.descriptionSection}
				dangerouslySetInnerHTML={{ __html: data.description }}
			/>
		</div>
	);
};

export default ExperienceBox;
