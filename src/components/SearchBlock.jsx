import styles from '../styles/TodoStyle.module.css';

export const SearchBlock = ({ props }) => {
	return (
		<div className={styles.searchBlock}>
			<input
				className={styles.todoSearch}
				value={props.requiredItem}
				onChange={({ target }) => props.requiredItemChange({ target })}
			></input>
			<button
				className={`${styles.mainButtons} ${styles.SearchButton}`}
				onClick={() => props.getRequiredTodos()}
			>
				<span className={styles.searchSpan}> 🔎︎ </span>
			</button>
			<button
				className={`${styles.mainButtons} ${styles.HomeButton}`}
				onClick={() => props.setCurrentDB(true)}
			>
				<span> ⌂ </span>
			</button>
		</div>
	);
};
