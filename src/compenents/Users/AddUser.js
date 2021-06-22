import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

export default function AddUser() {
	function addUserHandler(event) {
		event.preventDefault();
	}
	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" />
				<label htmlFor="age">Age</label>
				<input id="age" type="number" />
				<Button type="submit">Submit</Button>
			</form>
		</Card>
	);
}
