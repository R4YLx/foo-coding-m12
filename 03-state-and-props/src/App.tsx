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
	return (
		<>
			<h1 className="tac">Create new todo</h1>

			{/* Add Todo Form */}
			<Form />

			<h2>Todos</h2>

			{/* List of Todos */}
			<TodoList>
				{todos.map((todo, index) => (
					<TodoItem todo={todo} index={index} />
				))}
			</TodoList>
		</>
	);
}

export default App;
