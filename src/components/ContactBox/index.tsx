import styles from './contactBox.module.css';
import { headerContent } from '../../content';

const ContactBox = () => {
	const boxData = headerContent.contactInfo;
	return (
		<div className={styles.container}>
			<div className={styles.imageSection}>
				<img height='128px' alt={`blue ball`} src='images/BallLogoHDfxd.jpg' />
			</div>
			<div className={styles.textSection}>
				<div className={styles.nameField}>{boxData.fullName}</div>
				<div className={styles.infoFields}>{boxData.telephone}</div>
				<div className={styles.infoFields}>{boxData.webpage}</div>
				<div className={styles.infoFields}>{boxData.github}</div>
				<div className={styles.infoFields}>{boxData.linkedIn}</div>
			</div>
		</div>
	);
};

export default ContactBox;