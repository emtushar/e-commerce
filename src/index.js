import connectDb from "./db/database.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

connectDb()
  .then(() => {
    app.on("error", () => {
      console.log("Failed to start server");
    });
    app.listen(process.env.PORT, () => {
      console.log(
        `Server started sucessfully at http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error.msg || "Failed to connect to database");
  });
