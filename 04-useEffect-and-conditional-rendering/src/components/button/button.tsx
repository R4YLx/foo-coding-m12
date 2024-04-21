import type { ButtonProps } from "./button.types";

import "./button.css";
function Button({ className, children, ...rest }: ButtonProps) {
	return (
		<button {...rest} className={`base-button ${className}`}>
			{children}
		</button>
	);
}

export default Button;
