import "./App.css";
import Heading from "./heading";
import { myBarbie, myKen, myAllan } from "./execise/doll";
import Button from "./components/button";
import Input from "./components/input";
import Form from "./components/form";

function App() {
	console.log(`
	💅 myBarbie:
		Name: ${myBarbie.name},
		House: ${myBarbie.house},
		Hair Color: ${myBarbie.hairColor},
		Outfit: ${myBarbie.outfit},
	`);

	myBarbie.speak("Hello, I am fabulous");
	myBarbie.leaveBarbieland();

	console.log(`
	🏄 myKen:
		Name: ${myKen.name},
		House: ${myKen.house},
		Hair Style: ${myKen.hairStyle},
		Outfit: ${myKen.outfit},
	`);

	myKen.speak("I am Kenough");

	console.log(`
	🩳 myAllan:
		Name: ${myAllan.name},
		Hair Style: ${myAllan.hairStyle},
		Outfit: ${myAllan.outfit}
	`);

	myAllan.beAllan();

	function handleClick() {
		alert("You clicked the button! YAY! 🍕");
	}

	return (
		<>
			<Heading />
			<span className="hand">👋</span>
			<p className="greeting">My name is Raymond</p>
			<Button onClick={handleClick} className="button-hi">
				Hi Children
			</Button>

			<Button>I am just a button</Button>

			<Input type="text" />

			<Form />
		</>
	);
}

export default App;
