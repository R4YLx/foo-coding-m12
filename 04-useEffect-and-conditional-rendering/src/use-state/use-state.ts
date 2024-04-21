// React useState Hook
const [count, setCount] = useState(0);

// In JS THE DUMB VERSION!
let count = 0;

// setCount
function increment() {
	count++;
	updateUI();
}

// Update the UI to reflect the current count
function updateUI() {
	console.log("Count", count);
}

// Increment the count
increment();
