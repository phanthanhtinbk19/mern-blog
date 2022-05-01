import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single() {
	return (
		<div className="single row">
			<div className="col-sm-9">
				<SinglePost />
			</div>
			<div className="col-sm-3">
				<SideBar />
			</div>
		</div>
	);
}
