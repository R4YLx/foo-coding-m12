import Button from "../button";
import Input from "../input";
import Textarea from "../textarea";
import { FormProps } from "./form.types";

import "./form.css";
import Label from "../label";

function Form({ className, disableButton, text, ...rest }: FormProps) {
	return (
		<form {...rest} className={`base-form ${className}`}>
			<Label text="Title">
				<Input name="title" type="text" placeholder="Add title" />
			</Label>

			<Label text="Body">
				<Textarea name="body" placeholder="Write your post..." rows={6} />
			</Label>

			<Button type="submit" disabled={disableButton}>
				{text}
			</Button>
		</form>
	);
}

export default Form;
