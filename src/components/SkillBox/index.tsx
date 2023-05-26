import styles from './skillBox.module.css';

interface SkillBoxProps {
	title: string;
	listing: Array<string>;
}

const SkillBox = ({ title, listing }: SkillBoxProps) => {
	const skillList = listing.join(', ');
	return (
		<div className={styles.container}>
			<div className={styles.heading}>{title}</div>
			<div className={styles.list}>{skillList}</div>
		</div>
	);
};

export default SkillBox;
