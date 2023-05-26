import styles from './headline.module.css';
import { headerContent } from '../../content';

const HeadlineBox = () => {
	return (
		<div className={styles.container}>
			<div className={styles.headlineRegion}>
				<div className={styles.headlineText}>
					{headerContent.headline.position}
				</div>
				<div className={styles.highlights}>{`Highlight Bar`}</div>
				<div className={styles.bar} />
			</div>
		</div>
	);
};

export default HeadlineBox;
