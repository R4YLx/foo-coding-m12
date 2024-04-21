export interface Pokemon {
	id: number;
	name: string;
	sprites?: {
		front_default: string;
	};
}

export interface PokemonResponse {
	count: number;
	next: string;
	previous: string;
	results: PokemonResponseResult[];
}

export interface PokemonResponseResult {
	name: string;
	url: string;
}
