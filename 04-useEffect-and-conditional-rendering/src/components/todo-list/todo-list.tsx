import { TodoListProps } from "./todo-list.types";

import "./todo-list.css";
function TodoList({ className, children }: TodoListProps) {
	return <ul className={`todo-list ${className}`}>{children}</ul>;
}
export default TodoList;
