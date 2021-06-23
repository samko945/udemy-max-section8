import React, { useState } from "react";
import AddUser from "./compenents/Users/AddUser";
import UsersList from "./compenents/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);
	//	lift state from AddUser component using handleAddUser function
	//		we move the state from AddUser to UsersList, using state in the App component (the closest shared parent)
	function handleAddUser(uName, uAge) {
		setUsersList((prevValue) => {
			return [...prevValue, { name: uName, age: uAge }];
		});
	}
	return (
		<div>
			<AddUser onAddUser={handleAddUser} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
