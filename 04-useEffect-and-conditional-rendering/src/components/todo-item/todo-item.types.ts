import { Todo } from "../../types/todo.types";

export interface TodoItemProps {
	todo: Todo;
	onDelete?: (title: string) => void;
	onToggle?: (title: string) => void;
}
