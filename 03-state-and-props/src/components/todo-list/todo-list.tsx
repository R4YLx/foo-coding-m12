import { TodoListProps } from "./todo-list.types";

import "./todo-list.css";
function TodoList({ children }: TodoListProps) {
	return <ul className="todo-list">{children}</ul>;
}
export default TodoList;
