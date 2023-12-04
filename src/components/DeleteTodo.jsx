//delete element option
export const DeleteTodo = (id, refreshList) => {
	fetch(`http://localhost:3004/todos/${id}`, {
		method: 'DELETE',
	}).finally(() => {
		refreshList();
	});
};
