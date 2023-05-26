import styles from './programBox.module.css';

interface ProgramBoxProps {
	data:
		| {
				provider: string;
				name: string;
				startDate: string;
				endDate: string;
				location: string;
				description: string;
		  }
		| {
				provider: string;
				name: string;
				startDate: null;
				endDate: string;
				location: string;
				description: string;
		  };
}

const ProgramBox = ({ data }: ProgramBoxProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.introSection}>
				<div className={styles.leftSection}>
					<div>{data.provider}</div>
					<div>{data.name}</div>
				</div>
				<div className={styles.rightSection}>
					<div>{data.location}</div>
					<div>
						{data.startDate
							? `${data.startDate} - ${data.endDate}`
							: `${data.endDate}`}
					</div>
				</div>
			</div>
			<div
				className={styles.descriptionSection}
				dangerouslySetInnerHTML={{ __html: data.description }}
			/>
		</div>
	);
};

export default ProgramBox;
