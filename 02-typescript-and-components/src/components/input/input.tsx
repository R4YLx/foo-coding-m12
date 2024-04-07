import type { InputProps } from "./input.types";

import "./input.css";

function Input({ className, type = "email", ...rest }: InputProps) {
	return <input {...rest} type={type} className={`base-input ${className}`} />;
}

export default Input;
