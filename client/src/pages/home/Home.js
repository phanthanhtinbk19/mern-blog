import React, {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import axios from "axios";
import "./home.css";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

function Home() {
	const [posts, setPosts] = useState([]);
	const {search} = useLocation();
	const user = useSelector((state) => state.user.userupdate?.user);
	console.log(user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (!user) {
			navigate("/login");
			return;
		}
		const fetchPosts = async () => {
			const res = await axios.get("/posts" + search);

			setPosts(res.data);
		};
		fetchPosts();
	}, [search, navigate, user, dispatch]);

	return (
		<>
			<Header />
			<div className="home">
				<Posts posts={posts} />
				<SideBar />
			</div>
		</>
	);
}

export default Home;
