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
				<div>{data.name}</div>
				<div>{data.degree}</div>
			</div>
			<div className={styles.locationSection}>
				<div>{data.location}</div>
			</div>
		</div>
	);
};

export default SchoolBox;
