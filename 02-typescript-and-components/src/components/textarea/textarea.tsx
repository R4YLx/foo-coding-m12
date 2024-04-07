import { TextareaProps } from "./textarea.types";

import "./textarea.css";

function Textarea({ className, ...rest }: TextareaProps) {
	return <textarea {...rest} className={`base-textarea ${className}`} />;
}

export default Textarea;
