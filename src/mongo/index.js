import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = () => {
  mongoose.connection.once("open", () => console.log("DB connection"));
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@wditech.jq6moad.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {}
  );
};
