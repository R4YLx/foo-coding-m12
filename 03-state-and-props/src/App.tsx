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
	const [isLoading, setIsLoading] = useState(false);
	const [deletedTodos, setDeletedTodos] = useState<Todo[]>([]);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsLoading(true);

		const elementTarget = event.target as HTMLFormElement;

		const formData = new FormData(elementTarget);

		const title = formData.get("title") as string;
		const body = formData.get("body") as string;

		const newTodo: Todo = {
			title,
			body,
			completed: false,
		};

		// Simulate a delay of 2 seconds
		setTimeout(() => {
			setTodos([newTodo, ...todos]);
			setIsLoading(false);
			elementTarget.reset();
		}, 2000);
	}

	function handleDelete(title: string) {
		// Filter out the todo with the title that matches the title passed in
		const newTodos = todos.filter((todo) => todo.title !== title);

		setTodos(newTodos);

		// Add the deleted todo to the deletedTodos array
		const deletedTodo = todos.find((todo) => todo.title === title);

		if (!deletedTodo) {
			return null;
		}

		setDeletedTodos([...deletedTodos, deletedTodo]);
	}

	function handleToggle(title: string) {
		// Map over the todos array and toggle the completed property
		const updatedTodos = todos.map((todo) => {
			// if (todo.title === title) {
			// 	return { ...todo, completed: !todo.completed };
			// } else {
			// 	return todo;
			// }

			return todo.title === title
				? { ...todo, completed: !todo.completed }
				: todo;
		});

		setTodos(updatedTodos);
	}

	return (
		<>
			<h1 className="tac">Create new todo</h1>

			<Form
				onSubmit={handleSubmit}
				text={isLoading ? "Posting..." : "Post"}
				disableButton={isLoading}
			/>

			<h2 className="tac">Todos</h2>

			<TodoList>
				{todos.map((todo, index) => (
					<TodoItem
						key={index}
						todo={todo}
						onDelete={handleDelete}
						onToggle={handleToggle}
					/>
				))}
			</TodoList>

			{deletedTodos.length > 0 && (
				<>
					<h2 className="tac">Delete Todos</h2>

					<ul>
						{deletedTodos.map((todo, index) => (
							<li key={index}>
								<h3>{todo.title}</h3>
								<p>{todo.body}</p>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
}

export default App;
