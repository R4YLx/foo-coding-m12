interface Doll {
	name: string;
	gender: "female" | "male" | "transgender" | "non-binary";
	house?: string;
	speak: (phrase: string) => void;
}

export interface Barbie extends Doll {
	hairColor: string;
	outfit: string;
	leaveBarbieland: () => void;
}

export interface Ken extends Doll {
	hairStyle: string;
	outfit: string;
	doBeach: () => void;
}

export interface Allan extends Omit<Ken, "doBeach" | "house" | "speak"> {
	beAllan: () => void;
}
