import authRouter from "./auth.js";
import userRouter from "./user.js";
import postRouter from "./post.js";
import catsRouter from "./category.js";

function route(app) {
	app.use("/api/auth", authRouter);
	app.use("/api/users", userRouter);
	app.use("/api/posts", postRouter);
	app.use("/api/categories", catsRouter);
}
export default route;
