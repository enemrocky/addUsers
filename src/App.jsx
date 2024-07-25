import React, { useState } from "react";
import Users from "./components/users";
import AddUserForm from "./components/addUserForm";

const dummyUsers = [];

const App = () => {
	const [newUsers, setNewUsers] = useState(dummyUsers);

	const saveDataHandler = (expectedData) => {
		setNewUsers((prevState) => {
			return [expectedData, ...prevState];
		});
	};

	return (
		<>
			<AddUserForm onSaveData={saveDataHandler} />
			<Users users={newUsers} />
		</>
	);
};

export default App;
