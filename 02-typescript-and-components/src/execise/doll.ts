import type { Allan, Barbie, Ken } from "./doll.types";

export const myBarbie: Barbie = {
	name: "Barbie",
	gender: "female",
	house: "Malibu Dreamhouse",
	hairColor: "blonde",
	outfit: "summer dress",
	speak: (phrase: string) => {
		console.log(`🍌 ${myBarbie.name} says: ${phrase} 🍌`);
	},
	leaveBarbieland: () => {
		console.log(`🍌 ${myBarbie.name} is leaving Barbieland 🍌`);
	},
};

export const myKen: Ken = {
	name: "Ken",
	gender: "male",
	house: "Mojo Dojo Casa House",
	hairStyle: "short",
	outfit: "casual shirt and jeans",
	speak: (phrase: string) => {
		console.log(`${myKen.name} says: ${phrase}`);
	},
	doBeach: () => {
		console.log(`${myKen.name} is going to the beach`);
	},
};

export const myAllan: Allan = {
	name: "Allan",
	gender: "non-binary",
	hairStyle: "boring",
	outfit: "Shorts and plain shirt",
	beAllan: () => {
		console.log(`🧑🏻‍🦰`);
	},
};
