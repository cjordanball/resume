import styles from './profileBox.module.css';
import { introContent } from '../../content';

const ProfileBox = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleSection}>{introContent.profile.heading}</div>
			<div
				className={styles.textSection}
				dangerouslySetInnerHTML={{ __html: introContent.profile.text }}
			/>
		</div>
	);
};

export default ProfileBox;
