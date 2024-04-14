import { LabelProps } from "./label.types";
import "./label.css";

function Label({ children, text }: LabelProps) {
	return (
		<label className="base-label">
			<span className="visually-hidden">{text}</span>
			{children}
		</label>
	);
}

export default Label;
