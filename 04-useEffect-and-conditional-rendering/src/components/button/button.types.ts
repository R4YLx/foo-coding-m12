// interface ButtonProps {
// 	children: string;
// 	type: "submit" | "reset" | "button";
// }

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
}
