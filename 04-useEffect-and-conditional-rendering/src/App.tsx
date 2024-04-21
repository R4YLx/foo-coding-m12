import { useEffect, useState } from "react";
import "./styles/App.css";
import { PokemonResponse } from "./types/pokemon.types";

function App() {
	const [data, setData] = useState<PokemonResponse | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		async function fetchData() {
			// The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired. This can be useful in scenarios where you want to cancel the fetch due to a timeout, navigation events, or other conditions.
			const controller = new AbortController();

			// The signal property of the AbortController interface returns an AbortSignal object instance, which can be used to communicate with/abort a DOM request (such as Fetch) or an AbortController.
			const abortSignal = controller.signal;

			try {
				setIsLoading(true);

				// Start the fetch request. Pass the AbortSignal to the fetch options to allow for potential cancelation.
				const response = await fetch(
					"https://pokeapi.co/api/v2/pokemon?limit=151",
					{ signal: abortSignal }
				);

				// Simulate a 3-second delay before parsing the response.
				// await new Promise((resolve) => setTimeout(resolve, 3000));

				const data = await response.json();

				setData(data);
			} catch (error) {
				setIsError(true);
				setError(error as Error);
			} finally {
				setIsLoading(false);
			}

			// Return a cleanup function that aborts the fetch request if the component is unmounted before the request is completed.
			return () => controller.abort();
		}

		fetchData();
	}, []);

	console.log(`🍌 data 🍌`, data);

	return (
		<div>
			<h1>Pokedex</h1>
			{isLoading && <p>Loading...</p>}
			{isError && <p>{error?.message}</p>}

			<div>
				{data &&
					data.results.map((poke) => (
						<div key={poke.name}>
							<h2>{poke.name}</h2>
							<p>{poke.url}</p>
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
