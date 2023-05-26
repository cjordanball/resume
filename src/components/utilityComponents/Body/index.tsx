import { ReactNode } from 'react';
import styles from './body.module.css';

interface BodyProps {
	children: ReactNode;
}

const Body = ({ children }: BodyProps) => {
	return <div className={styles.container}>{children}</div>;
};

export default Body;
