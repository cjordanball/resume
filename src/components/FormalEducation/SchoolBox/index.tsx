import styles from './schoolBox.module.css';

interface SchoolBoxProps {
	data: {
		name: string;
		degree: string;
		location: string;
	};
}

const SchoolBox = ({ data }: SchoolBoxProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.schoolSection}>
				<div className={styles.schoolName}>{data.name}</div>
				<div>
					<em>{data.degree}</em>
				</div>
			</div>
			<div className={styles.locationSection}>
				<div>{data.location}</div>
			</div>
		</div>
	);
};

export default SchoolBox;
