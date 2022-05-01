import {useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import LoginUser from "../../api/LoginUser";

import "./login.css";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newUser = {
			username,
			password,
		};
		LoginUser(newUser, dispatch, navigate);
	};

	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					type="text"
					className="loginInput"
					placeholder="Enter your username..."
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Password</label>
				<input
					type="password"
					className="loginInput"
					placeholder="Enter your password..."
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="loginButton" type="submit">
					Login
				</button>
			</form>
			<button className="loginRegisterButton">
				<Link className="link" to="/register">
					Register
				</Link>
			</button>
		</div>
	);
}
