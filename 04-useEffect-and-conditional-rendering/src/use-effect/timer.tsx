import { useEffect, useState } from "react";

function Timer() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		// This effect will run when the component mounts. It will set up a timer that increments the seconds state every second.
		const timer = setInterval(() => {
			setSeconds((prevState) => prevState + 1);
		}, 1000);

		// Clean up function. If you don't clean up the timer, it will keep running even after the component is unmounted. This can lead to memory leaks and potential bugs.
		return () => {
			clearInterval(timer);
		};
	}, []);

	return <div>{seconds} seconds have passed since this component mounted.</div>;
}

export default Timer;
