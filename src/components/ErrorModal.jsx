import React from "react";
import "./errorModal.css";

const ErrorModal = () => {
	return (
		<div className="overlay">
			<div className="error-modal">
				<header className="header">
					<h2>Title</h2>
				</header>
				<div className="content">
					<p>Lorem ipsum dolor sit.</p>
				</div>
				<footer>
					<button>Okay</button>
				</footer>
			</div>
		</div>
	);
};

export default ErrorModal;
