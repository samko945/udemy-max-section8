import React from "react";
import AddUser from "./compenents/Users/AddUser";
import UsersList from "./compenents/Users/UsersList";

function App() {
	return (
		<div>
			<AddUser />
			<UsersList users={[]} />
		</div>
	);
}

export default App;
