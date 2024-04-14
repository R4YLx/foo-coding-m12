import Button from "../button";
import Input from "../input";
import Textarea from "../textarea";
import { FormProps } from "./form.types";

import "./form.css";

function Form({ className, ...rest }: FormProps) {
	return (
		<form {...rest} className={`base-form ${className}`}>
			<Input name="title" type="text" />
			<Textarea name="body" />

			<Button type="submit">Post</Button>
		</form>
	);
}

export default Form;
