import { ReactNode } from 'react';
import styles from './pageBreak.module.css';

interface PageBreakProps {
	children: ReactNode;
}

const PageBreak = ({ children }: PageBreakProps) => {
	return <div className={styles.container}>{children}</div>;
};

export default PageBreak;
