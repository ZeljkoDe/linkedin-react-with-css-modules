import { useState } from 'react';
import Badge from '../Badge';
import Explorer from '../Explorer';
import styles from './Style.module.css';

export default function GridItem({ content }) {
	const [clicked, setClicked] = useState(content.clicked);

	const handleClick = () => {
		setClicked(!clicked);
	};
	return (
		<div className={styles.card} onClick={handleClick}>
			{clicked ? <Explorer /> : <Badge />}
			<h2 className={styles.title}>{content.title}</h2>
			<article className={styles.fact}>{content.fact}</article>
		</div>
	);
}
