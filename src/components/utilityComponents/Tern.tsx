import { ReactNode } from 'react';

interface TernProps {
	test: boolean | null | undefined;
	children: ReactNode;
}

const Tern = ({ test = true, children }: TernProps) => {
	if (!Array.isArray(children)) return null;
	if (children.length !== 2) {
		return null;
	}
	if (test) {
		return children[0];
	}
	return children[1];
};

export default Tern;
