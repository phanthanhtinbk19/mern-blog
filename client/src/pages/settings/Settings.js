import "./settings.css";
import Sidebar from "../../components/sidebar/SideBar";
import {useEffect, useState} from "react";

import axios from "axios";
import {
	updateFail,
	updateStart,
	updateSuccess,
} from "../../redux/user/userSlice";
import {useDispatch, useSelector} from "react-redux";

export default function Settings() {
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.userupdate?.user);

	console.log(user);
	const PF = "http://localhost:5000/images/";

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(updateStart());
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;
			try {
				await axios.post("/upload", data);
			} catch (err) {}
		}
		try {
			const res = await axios.put("/users/" + user._id, updatedUser);
			console.log(res.data);
			setSuccess(true);
			dispatch(updateSuccess(res.data));
		} catch (err) {
			dispatch(updateFail());
		}
	};
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm" onSubmit={handleSubmit}>
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src={file ? URL.createObjectURL(file) : PF + user?.profilePic}
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon far fa-user-circle"></i>
						</label>
						<input
							type="file"
							id="fileInput"
							style={{display: "none"}}
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<label>Username</label>
					<input
						type="text"
						placeholder={user?.username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label>Email</label>
					<input
						type="email"
						placeholder={user?.email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="settingsSubmit" type="submit">
						Update
					</button>
					{success && (
						<span
							style={{color: "green", textAlign: "center", marginTop: "20px"}}
						>
							Profile has been updated...
						</span>
					)}
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
