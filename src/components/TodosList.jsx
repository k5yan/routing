import { useEffect, useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import styles from '../styles/TodoStyle.module.css';
import { Todo } from './Todo';
import { TodoTitle } from './TodoTitle';
import { MakeRawTodo } from './MakeRawTodo';

export const TodosList = () => {
	const [todos, setTodos] = useState([]); //все заметки
	const [refreshListFlag, setRefreshListFlag] = useState(false);
	const refreshList = () => {
		setRefreshListFlag(!refreshListFlag); //обновление всего списка
	};

	useEffect(() => {
		fetch('http://localhost:3004/todos')
			.then((data) => data.json())
			.then((todos) => {
				setTodos(todos);
			});
	}, [refreshListFlag]);

	return (
		<>
			<Link to="/">
				<div className={styles.appContainer}>
					<div className={styles.listContainer}>
						{todos
							.map(({ id, todo }) => (
								// <Todo key={id} id={id} todo={todo} refreshList={refreshList} />
								<TodoTitle id={id} todo={todo} />
							))
							.reverse()}
					</div>
					<button
						className={styles.todoAddButton}
						onClick={() => MakeRawTodo(refreshList)}
					>
						<span> + </span>
					</button>
				</div>
			</Link>
			<Routes>
				<Route
					path="/todo/:id"
					element={<Todo todos={todos} refreshList={refreshList} />}
				/>
			</Routes>
		</>
	);
};
