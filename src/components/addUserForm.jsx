import React, { useState } from "react";
import "./addUserForm.css";

const AddUserForm = (props) => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();
		setUserName("");
		setUserAge("");

		const userData = {
			name: userName,
			age: userAge,
		};

		props.onSaveData(userData);
	};
	const userNameHandler = (event) => {
		setUserName(event.target.value);
	};
	const userAgeHandler = (event) => {
		setUserAge(event.target.value);
	};

	return (
		<form onSubmit={submitHandler} className="add-user-form">
			<div className="form-group">
				<label htmlFor="name">Username</label>
				<input
					id="username"
					type="text"
					onChange={userNameHandler}
					value={userName}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="age">Age (Years)</label>
				<input
					id="age"
					type="number"
					onChange={userAgeHandler}
					value={userAge}
					min={13}
				/>
			</div>
			<button type="submit">Add User</button>
		</form>
	);
};

export default AddUserForm;
