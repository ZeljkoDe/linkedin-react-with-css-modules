import cx from 'classnames';
import GridItem from './GirdItem';
import styles from './Style.module.css';
import mediaStyles from './Media.module.css';

export default function Grid({ data }) {
	const content = data.map((item) => (
		<GridItem key={item.id} content={item} />
	));
	return (
		<section className={cx(styles.grid, mediaStyles.grid)}>
			{content}
		</section>
	);
}
