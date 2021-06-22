import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

export default function AddUser() {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	function usernameChangeHandler(event) {
		const newValue = event.target.value;
		setEnteredUsername(newValue);
	}
	function ageChangeHandler(event) {
		const newValue = event.target.value;
		setEnteredAge(newValue);
	}
	function addUserHandler(event) {
		event.preventDefault();
		console.log(enteredUsername, enteredAge);
	}
	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
				<label htmlFor="age">Age</label>
				<input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
				<Button type="submit">Submit</Button>
			</form>
		</Card>
	);
}
