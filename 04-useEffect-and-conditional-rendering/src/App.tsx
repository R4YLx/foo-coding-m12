import { useEffect, useState } from "react";
import "./styles/App.css";
import { Pokemon, PokemonResponse } from "./types/pokemon.types";
import { capitalizeFirstLetter } from "./utils";
import useFetch from "./hooks/use-fetch";

function App() {
	const [pokemonDetails, setPokemonDetails] = useState<Pokemon[] | null>(null);

	const { data, isLoading, isError, error } = useFetch<PokemonResponse>(
		"https://pokeapi.co/api/v2/pokemon?limit=151"
	);

	async function fetchPokemonDetails(url: string): Promise<Pokemon> {
		// Fetch details for each individual Pokemon
		const response = await fetch(url);
		// Parse the response as JSON
		const pokemonDetails: Pokemon = await response.json();
		// Return the parsed data
		return pokemonDetails;
	}

	useEffect(() => {
		// Check if data is available and if it has results
		if (data && data.results) {
			// Immediately invoked async function
			(async function fetchPokemon() {
				// Use Promise.all to fetch details for all Pokemon concurrently
				const details: Pokemon[] = await Promise.all(
					// Map over the results to create an array of promises
					data.results.map(async (pokemon: { url: string }) => {
						return fetchPokemonDetails(pokemon.url);
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
