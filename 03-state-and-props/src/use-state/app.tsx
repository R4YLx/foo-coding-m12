import { useState } from "react";
import "./styles/App.css";
import Button from "../components/button";

type Toggle = "off" | "on" | "Hey GUUURL";

function App() {
	const [toggle, setToggle] = useState<Toggle>("off");

	const [isPlaying, setIsPlaying] = useState(false);

	function toggleOff() {
		setToggle((prevState) => (prevState === "off" ? "on" : "off"));
	}

	function togglePlay() {
		setIsPlaying((prevState) => !prevState);
	}

	function handleFocus() {
		setToggle("Hey GUUURL");
	}

	return (
		<>
			<h1 className="tac">State and Props</h1>
			<Button onClick={toggleOff}>{toggle}</Button>
			<Button onClick={toggleOff} onFocus={handleFocus}>
				{toggle}
			</Button>
			<Button onClick={togglePlay}>{isPlaying ? "⏸️" : "▶️"}</Button>
		</>
	);
}

export default App;
