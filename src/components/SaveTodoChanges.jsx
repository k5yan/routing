//edit option
export const SaveTodoChanges = (id, todoText) => {
	fetch(`http://localhost:3004/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			todo: todoText,
		}),
	});
};
