import { TodoItemProps } from "./todo-item.types";

import "./todo-item.css";
function TodoItem({ todo, index }: TodoItemProps) {
	return (
		<li key={index} className={"todo-item"}>
			<h3>{todo.title}</h3>
			<p>{todo.body}</p>
			<button>🗑️</button>
		</li>
	);
}

export default TodoItem;
