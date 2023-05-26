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
			<h1>{data.companyName}</h1>
		</div>
	);
};

export default ExperienceBox;
