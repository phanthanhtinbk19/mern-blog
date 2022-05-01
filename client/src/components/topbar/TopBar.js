import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import LogoutUser from "../../api/LogoutUser";
import "./topbar.css";

export default function TopBar() {
	const PF = "http://localhost:5000/images/";

	const user = useSelector((state) => state.user.userupdate?.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		LogoutUser(dispatch, navigate);
	};
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook-square"></i>
				<i className="topIcon fab fa-twitter-square"></i>
				<i className="topIcon fab fa-pinterest-square"></i>
				<i className="topIcon fab fa-instagram-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">
							HOME
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/">
							ABOUT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/">
							CONTACT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">
							WRITE
						</Link>
					</li>
					<li className="topListItem" onClick={handleLogout}>
						{user && "LOGOUT"}
					</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<Link to="/settings">
						{user.profilePic !== " " ? (
							<img className="topImg" src={PF + user.profilePic} alt="" />
						) : (
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXNeW05OGMu4dgLwvR94x_kBUrj-ZGyIVKtF8EjQkwtF4gnLKWR_LO6puDAsj529vXwc&usqp=CAU"
								class="rounded-circle"
								style={{width: 50}}
								alt="Avatar"
							/>
						)}
					</Link>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
