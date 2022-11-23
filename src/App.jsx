import styles from './App.module.css';
import Background from './components/Background';
import Grid from './components/Grid';
import Rocket from './components/Rocket';
import Smoke from './components/Rocket/Smoke';
import Title from './components/Title';
import facts from './data/NASA_facts.json';

export default function App() {
	const data = facts;

	return (
		<div className={styles.App}>
			<Title />
			<Background />
			<Grid data={data} />
			<Rocket />
			<Smoke />
		</div>
	);
}
