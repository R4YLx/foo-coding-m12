/* eslint-disable @typescript-eslint/no-unused-vars */

// https://blog.logrocket.com/types-vs-interfaces-typescript/

let firstName = "John";
let age = 25;
let hasPet = true;
let petNames = ["Mimi", "Momo", "Mumu"];

firstName = "Jane";
age = 30;
hasPet = false;
petNames = [];

interface PersonInterface {
	name: string;
	age: number;
	hasPet: boolean;
	petNames: string[];
	hobbies?: string[];
	favoriteFood?: string;
}

type PersonType = {
	name: string;
	age: number;
	hasPet: boolean;
	petNames: string[];
	hobbies?: string[];
	favoriteFood?: string;
};

const John: PersonInterface = {
	name: "John",
	age: 25,
	hasPet: true,
	petNames: ["Mimi", "Momo", "Mumu"],
};

console.log(`🍌 John.name 🍌`, John.name); // "John"

const Raymond: PersonType = {
	name: "Raymond",
	age: 33,
	hasPet: true,
	petNames: ["Molly", "Leo"],
	hobbies: ["Coding", "Gaming", "Fighting"],
	favoriteFood: "Pizza",
};

console.log(`🍌 Raymond.favoriteFood 🍌`, Raymond.favoriteFood); // "Pizza"
console.log(
	`🍌 Raymond's pets 🍌`,
	Raymond.petNames.map((petName) => petName)
); // ["Molly", "Leo"]

// Discriminated Unions
interface Circle {
	kind: "circle";
	radius: number;
}

const circle: Circle = {
	kind: "circle",
	radius: 34,
};

interface Rectangle {
	kind: "rectangle";
	width: number;
	height: number;
}

// Objects inside of object
interface Shape2 {
	rectangle: Rectangle;
	circle: Circle;
}

// Expects one object
type Shape = Circle | Rectangle;

function area(shape: Shape) {
	// Now TypeScript KNOWS that "shape" must be a Circle
	// So you can use its members (property) safely
	if (shape.kind === "circle") {
		return shape.radius * 3.14;
	} else {
		// The shape wasn't a Circle?
		// No worries, TypeScript will figure this out and it must be a Rectangle
		// So you can use its members safely
		return shape.height * shape.width;
	}
}

area(circle); // 106,76
