import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { userModel } from "../schemas/user.schema.js";
import { dbConnect } from "./index.js";

async function seedDB() {
  dbConnect();
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(process.env.JWT_SECRET, salt);

  const user = {
    _id: mongoose.Types.ObjectId(1),
    name: "Admin",
    email: "admin@jsonapi.com",
    password: hashPassword,
    created_at: new Date(),
    profile_image: "../../images/admin.jpg",
  };

  const admin = new userModel(user);
  await admin.save();

  console.log("DB seeded");
}

seedDB().then(() => {
  mongoose.connection.close();
});
