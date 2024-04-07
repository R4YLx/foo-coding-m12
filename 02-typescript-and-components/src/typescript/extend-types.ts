/* eslint-disable @typescript-eslint/no-unused-vars */

interface Animal {
	name: string;
	numberOfLegs: number;
	knownsChristopherRobin?: boolean;
}

interface Bear extends Animal {
	honey: boolean;
	cuddly: boolean;
}

// type Bear = Animal & {
// 	honey: boolean;
// 	cuddly: boolean;
// };

interface Tiger extends Animal {
	bounce: boolean;
}

const bear: Bear = {
	name: "Winnie",
	numberOfLegs: 4,
	honey: true,
	cuddly: true,
	knownsChristopherRobin: true,
};

const tiger: Tiger = {
	name: "Tigger",
	numberOfLegs: 4,
	bounce: true,
	knownsChristopherRobin: false,
};

const pig: Animal = {
	name: "Piglet",
	numberOfLegs: 4,
};

// Can't create new property to the Animal type
const owl: Animal = {
	readBooks: true,
};
