import {useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import RegisterUser from "../../api/RegisterUser";
import "./register.css";

export default function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newUser = {
			username,
			password,
			email,
		};
		RegisterUser(newUser, dispatch, navigate);
	};
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your username..."
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Email</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your email..."
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					type="password"
					className="registerInput"
					placeholder="Enter your password..."
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="registerButton" type="submit">
					Register
				</button>
			</form>
			<button className="registerLoginButton">
				<Link className="link" to="/login">
					Login
				</Link>
			</button>
		</div>
	);
}
