import Button from "../button";
import Input from "../input";
import Textarea from "../textarea";
import { FormProps } from "./form.types";

function Form({ className, ...rest }: FormProps) {
	return (
		<form {...rest} className={`base-form ${className}`}>
			<div className="text-inputs">
				<Input name="title" />
				<Textarea name="body" />
			</div>

			<Button type="submit">Post</Button>
		</form>
	);
}

export default Form;
