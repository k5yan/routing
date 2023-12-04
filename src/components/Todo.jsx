import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/TodoStyle.module.css';
import { SaveTodoChanges } from './SaveTodoChanges';
import { DeleteTodo } from './DeleteTodo';

export const Todo = ({ todos, refreshList }) => {
	const params = useParams(); //получил id

	const todo = todos.find((todo) => todo.id === params).todo;
	//получил текст заметки

	const [todoText, setTodoText] = useState(todo);
	//завел его в стейт

	const todoChange = ({ target }) => setTodoText(target.value);

	return (
		<div className={styles.todoContainer}>
			<input type="checkbox" className={styles.todoCheckbox}></input>
			<div className={styles.todoTextareaContainer}>
				<span className={styles.spanStyle}>{todoText}</span>
				<textarea
					className={styles.todoText}
					value={todoText}
					onChange={todoChange}
					// onBlur={() => SaveTodoChanges(params, todoText)}
					//не переделал редактирование под JSONServer
				></textarea>
			</div>
			<button
				className={styles.todoDelete}
				// onClick={() => {
				// 	DeleteTodo(params, refreshList);
				//не переделал удаление под JSONServer
				// }}
			>
				<span> ✖ </span>
			</button>
		</div>
	);
};
