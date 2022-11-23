import styles from './Style.module.css';

export default function Smoke() {
	return (
		<div className={styles.smoke}>
			<video
				autoPlay
				loop
				className={styles.video}
				src='/assets/smoke.mov'
			></video>
		</div>
	);
}
