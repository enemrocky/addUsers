import "./users.css";

const Users = (props) => {
	return (
		<>
			<ul className="container">
				{props.users.length === 0 && <p>No users found</p>}
				{props.users.map((user) => (
					<li className="user-field" key={user.id}>
						{user.name} ({user.age} years old)
					</li>
				))}
			</ul>
		</>
	);
};

export default Users;
