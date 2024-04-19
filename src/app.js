import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

//
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public/temp"));
app.use(cookieParser());
app.use(cors({ origin: process.env.CORS_ORIGIN_URL, credentials: true }));

app.get("/", (req, res) => {
  res.send("<h1>App Working on home route</h1>");
});
export default app;
