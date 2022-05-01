import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";
import route from "./routes/index.js";
import cors from "cors";
import multer from "multer";
import path from "path";
import {fileURLToPath} from "url";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "/images")));
const url = process.env.DATABASE_URL;
mongoose
	.connect(url, {
		useNewUrlParser: true,

		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("connect to db successfully");
	})
	.catch(() => {
		console.log("connect to db failure");
	});
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "30mb"}));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});
const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
	res.status(200).json("File has been uploaded");
});
route(app);
const port = 5000;

app.listen(port, () => {
	console.log("server is runing on port " + port);
});
