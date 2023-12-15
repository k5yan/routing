import styles from '../styles/TodoStyle.module.css';
import { MakeRawTodo } from '../App/MakeRawTodo';
import { TodoTitle } from './TodoTitle';
import { useState } from 'react';
export const List = ({ props }) => {
	const [listSort, setListSort] = useState(true);
	return (
		<div className={styles.appContainer}>
			<div className={styles.listContainer}>
				{listSort
					? props.todos.map((item) => <TodoTitle item={item} />).reverse()
					: props.todos.map((item) => <TodoTitle item={item} />)}
			</div>
			<div>
				<button
					className={`${styles.mainButtons} ${styles.AddButton}`}
					onClick={() => {
						MakeRawTodo(props.refreshList);
						props.setCurrentDB(true);
					}}
				>
					<span> + </span>
				</button>
				<button
					className={`${styles.mainButtons} ${styles.ReverseListButton}`}
					onClick={() => {
						props.setCurrentDB(true);
						setListSort(!listSort);
					}}
				>
					<span> ↑↓ </span>
				</button>
			</div>
		</div>
	);
};
