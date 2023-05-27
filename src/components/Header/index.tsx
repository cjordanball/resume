import { Headline } from '..';
import { ContactBox } from '../../components';
import styles from './header.module.css';

interface HeaderProps {
	contacts: boolean;
}

const Header = ({ contacts = false }: HeaderProps) => {
	return (
		<div className={styles.container}>
			<ContactBox contacts={contacts} />
			<Headline />
		</div>
	);
};

export default Header;
