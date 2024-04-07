import { TextareaProps } from "./textarea.types";

function Textarea({ ...rest }: TextareaProps) {
	return <textarea {...rest} />;
}

export default Textarea;
