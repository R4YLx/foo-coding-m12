import { TodoItemProps } from "./todo-item.types";

import "./todo-item.css";
function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
	if (!onDelete) {
		return;
	}

	function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
		if (!onDelete) {
			return;
		}
		event.stopPropagation();
		onDelete(todo.title);
	}

	function handleToggle() {
		if (!onToggle) {
			return;
		}
		onToggle(todo.title);
	}

	return (
		<li
			className={`todo-item ${todo.completed ? "todo-item--completed" : ""}`}
			onClick={handleToggle}
		>
			<h3>{todo.title}</h3>
			<p>{todo.body}</p>
			<button onClick={handleDelete} className="todo-item-delete-button">
				🗑️
			</button>
		</li>
	);
}

export default TodoItem;
