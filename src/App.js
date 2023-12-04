import { Routes, Route } from 'react-router-dom';
import './App.css';
import { TodosList } from './components/TodosList';
import { Todo } from './components/Todo';

export function App() {
	const Element = () => <div> Работает </div>;
	return (
		<>
			<div className="App">
				<TodosList />
			</div>
		</>
	);
}
