import { useState } from "react";

import "./play-pause.css";
function PlayPause() {
	const [isPlaying, setIsPlaying] = useState(true);

	function handlePlayPause() {
		setIsPlaying((prevState) => !prevState);
	}

	return (
		<button onClick={handlePlayPause} className={isPlaying ? "play" : "pause"}>
			{isPlaying ? "Play" : "Pause"}
		</button>
	);
}

export default PlayPause;
