/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Primitive types

const isSunday: boolean = true;
let daysInWeek: number = 7;
const dayOfWeek: string = "Sunday";

// Any
// Can be used when we don't know the type of the variable. May occut when we're working with a third-party library.
let anyDate: any = 31;

// Unknown
// We may need to describe the type of variables that we do not know when we are writing an application.
// These values may come from e.g. a user – or we may want to intentionally accept all values in our API.

let unknownDate: unknown = 31;

// Difference between unknown and any
// Unkown is type that is flexible, but still checks types. Any does not check types

let newYearsEve: number = anyDate;
let newYearsEve2: number = unknownDate; // as number

// null and undefined
// In TypeScript, both undefined and null actually have theirt own types named undefined and null respecively.

const nothing: null = null;
const noValue: undefined = undefined;

// Arrays
const daysOfWeek: string[] = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const daysOfWeek2: Array<string> = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

// Typing functions

// Void
// Void is a like the opposite of any: the absence of having any type at all.

function logToConsole(): void {
	console.log(`🍌 X Gon' Give It To Ya 🍌`);
}

function getCookie(): string {
	return "cookie";
}

function getFavoriteNumber(): number {
	return 1337;
}

// Union types
// Unioin types are a powerful way to express a value that can be one of the several types.

function printId(id: number | string) {
	console.log(`🍌 Your ID is: ${id} 🍌`);
}

printId(101);
printId("101");

// Tuple
// Tuple types allow you express an array with a fixed number of elements whose types are known.

let instagramPost: [string, number, boolean];
instagramPost = ["https://www.instagram.com", 100, false];

instagramPost = ["https://www.instagram.com", true, 100];

// Enum
// Helpful addition to the standard set of datatypes from JavaScript

enum TrafficLight {
	Red, // 0
	Yellow, // 1
	Green, // 2
}

const stopLight = TrafficLight.Red;

// Enum is way of giving more friendly names to sets of numeric values
console.log(stopLight); // 0

// enum TrafficLight {
// 	Red = 1,
// 	Yellow = 2,
// 	Green = 3,
// }
