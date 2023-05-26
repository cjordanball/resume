import styles from './App.module.css';
import { Header, Profile, Skills, Experience } from './components';
import { PageBreak, Body } from './components/utilityComponents';

function App() {
	return (
		<div className={styles.container}>
			<PageBreak>
				<Header contacts={true} />
				<Body>
					<Profile />
					<Skills />
					<Experience />
				</Body>
			</PageBreak>
			<PageBreak>
				<Header contacts={false} />
				<Body>
					<div></div>
				</Body>
			</PageBreak>
			<PageBreak>
				<Header contacts={false} />
				<Body>
					<div></div>
				</Body>
			</PageBreak>
		</div>
	);
}

export default App;
