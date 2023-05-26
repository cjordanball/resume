import styles from './skillsBox.module.css';
import { introContent } from '../../content';
import { SkillBox } from '../../components';

const SkillsBox = () => {
	const skillList = introContent.skills.content;
	const skillListItems = skillList.map((val) => {
		return (
			<SkillBox key={val.headline} title={val.headline} listing={val.entries} />
		);
	});
	return (
		<div className={styles.container}>
			<div className={styles.introSection}>
				<span className={styles.mainHeadline}>
					{introContent.skills.headline.mainHeadline}
				</span>
				<span className={styles.subHeadline}>
					{introContent.skills.headline.parenthetical}
				</span>
			</div>
			{skillListItems}
		</div>
	);
};

export default SkillsBox;
