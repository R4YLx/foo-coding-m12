import { useEffect, useState } from "react";
import "./styles/App.css";
import { Pokemon, PokemonResponse } from "./types/pokemon.types";
import { capitalizeFirstLetter } from "./utils";

function App() {
	const [data, setData] = useState<PokemonResponse | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const [pokemonDetails, setPokemonDetails] = useState<Pokemon[] | null>(null);

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

	useEffect(() => {
		// Check if data is available and if it has results
		if (data && data.results) {
			// Immediately invoked async function
			(async () => {
				// Use Promise.all to fetch details for all Pokemon concurrently
				const details: Pokemon[] = await Promise.all(
					// Map over the results to create an array of promises
					data.results.map(async (pokemon: { url: string }) => {
						// Fetch details for each individual Pokemon
						const response = await fetch(pokemon.url);
						// Parse the response as JSON
						const pokemonDetails: Pokemon = await response.json();
						// Return the parsed data
						return pokemonDetails;
					})
				);

				// Once all promises have resolved, set the Pokemon details state
				setPokemonDetails(details);
			})();
		}
		// Add data as a dependency, so the effect runs whenever data changes
	}, [data]);

	return (
		<div>
			<h1>Pokedex</h1>
			{isLoading && <p>Loading...</p>}
			{isError && <p>{error?.message}</p>}

			<div className="pokemon-grid">
				{pokemonDetails &&
					pokemonDetails.map((pokemon) => (
						<div key={pokemon.id} className="pokemon-card">
							<h2>{capitalizeFirstLetter(pokemon.name)}</h2>
							<img src={pokemon.sprites?.front_default} alt={pokemon.name} />
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
