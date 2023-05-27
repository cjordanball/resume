import styles from './skillsBox.module.css';
import { introContent } from '../../content';
import { SkillBox } from '../../components';
import { Tern } from '../utilityComponents';

const SkillsBox = () => {
	const skillList = introContent.skills.content;
	const skillListItems = skillList.map((val) => {
		return (
			<SkillBox key={val.headline} title={val.headline} listing={val.entries} />
		);
	});
	return (
		<div className={styles.container}>
			<div className={styles.titleSection}>
				<span className={styles.mainHeadline}>
					{introContent.skills.headline.mainHeadline}
				</span>
				<Tern test={introContent.skills.headline.parenthetical}>
					<span className={styles.subHeadline}>
						{introContent.skills.headline.parenthetical}
					</span>
				</Tern>
			</div>
			<div className={styles.skillListSection}>{skillListItems}</div>
		</div>
	);
};

export default SkillsBox;
