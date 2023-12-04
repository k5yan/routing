import styles from '../styles/TodoStyle.module.css';
import { Link } from 'react-router-dom';

export const TodoTitle = ({ id, todo }) => {
	let titleTodoText = todo;
	if (todo.length > 28) {
		titleTodoText = todo.slice(0, 28) + `...`;
	}
	return (
		<div key={id} className={styles.todoContainer}>
			<input type="checkbox" className={styles.todoCheckbox}></input>
			<Link to={`/todo/${id}`}>
				<div className={styles.todoTextareaContainer}>{titleTodoText}</div>
			</Link>
		</div>
	);
};
