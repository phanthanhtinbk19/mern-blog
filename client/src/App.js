import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/settings/Settings";
function App() {
	return (
		<Router>
			<TopBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post/:postId" element={<Single />} />
				<Route path="/write" element={<Write />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;
