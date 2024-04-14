import { useState } from "react";
import Form from "./components/form";
import "./styles/App.css";
import { Todo } from "./types/todo.types";
import TodoItem from "./components/todo-item";
import TodoList from "./components/todo-list";

const initialTodos = [
	{ title: "Hello World", body: "This is my first todo", completed: false },
	{
		title: "Pizza is great",
		body: "I love pizza! Buy pizza! 🍕",
		completed: false,
	},
	{
		title: "Get to class",
		body: "I'm late for class, gotta run! 🏃‍♀️",
		completed: true,
	},
	{ title: "Learn React", body: "Seems awesome!", completed: false },
	{
		title: "Learn Typescript but",
		body: "it's slowly killing me 💀",
		completed: false,
	},
];

function App() {
	const [todos, setTodos] = useState<Todo[]>(initialTodos);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const elementTarget = event.target as HTMLFormElement;

		const formData = new FormData(elementTarget);

		const title = formData.get("title") as string;
		const body = formData.get("body") as string;

		const newTodo: Todo = {
			title,
			body,
			completed: false,
		};

		setTodos([newTodo, ...todos]);
	}

	return (
		<>
			<h1 className="tac">Create new todo</h1>

			{/* Add Todo Form */}
			<Form onSubmit={handleSubmit} />

			<h2>Todos</h2>

			{/* List of Todos */}
			<TodoList>
				{todos.map((todo, index) => (
					<TodoItem key={index} todo={todo} />
				))}
			</TodoList>
		</>
	);
}

export default App;
