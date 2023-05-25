import { Headline } from '..';
import ContactBox from '../ContactBox';
import styles from './header.module.css';

const Header = () => {
	return (
		<div className={styles.container}>
			<ContactBox />
			<Headline />
		</div>
	);
};

export default Header;
