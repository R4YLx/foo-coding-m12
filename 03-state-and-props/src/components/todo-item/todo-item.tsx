import { TodoItemProps } from "./todo-item.types";

import "./todo-item.css";
function TodoItem({ todo }: TodoItemProps) {
	return (
		<li className={"todo-item"}>
			<h3>{todo.title}</h3>
			<p>{todo.body}</p>
			<button>🗑️</button>
		</li>
	);
}

export default TodoItem;
