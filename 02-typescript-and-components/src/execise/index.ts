/* eslint-disable @typescript-eslint/no-unused-vars */

//Marianas example

interface Employee {
	name: string;
	age: number;
	department: string;
}

interface Intern extends Employee {
	startInternship: string;
	endInternship: string;
}

interface FormerEmployee extends Employee {
	stopEmployment: string;
}

const annaMitchel: Intern = {
	name: "Anna",
	age: 23,
	department: "HR",
	startInternship: "24-02-2023",
	endInternship: "24-02-2024",
};

const rickJones: FormerEmployee = {
	name: "Rick Jones",
	age: 23,
	department: "HR",
	stopEmployment: "24-02-2024",
};

// Sanas example
interface Library {
	name: string;
	numberOfBooks: number;
	boring?: boolean;
}

interface FictionalBooks extends Library {
	fictional: boolean;
}
interface CourseBooks extends Library {
	levelSchool: string;
}

const fictionalBooks: FictionalBooks = {
	name: "harry potter",
	numberOfBooks: 8,
	fictional: true,
};

const CourseBooks: CourseBooks = {
	name: "harry potter",
	numberOfBooks: 8,
	levelSchool: "gymnasium",
	boring: true,
};
