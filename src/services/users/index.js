import dotenv from "dotenv";
import { userModel } from "../../schemas/user.schema.js";
import { rolModel } from "../../schemas/roles.schema.js";
import bcrypt from "bcrypt";
dotenv.config();

export const registerRouteHandler = async (
  req,
  res,
  name,
  email,
  password,
  created_by,
  rol
) => {
  // check if user already exists
  const foundUser = await userModel.findOne({ email: email });
  if (foundUser) {
    // does not get the error
    return res.status(400).json({ message: "Email is already in use" });
  }

  // check if rol exists
  const foundRol = await rolModel.findOne({ name: rol });
  if (!foundRol) {
    // does not get the error
    return res.status(400).json({ message: "Rol not exists" });
  }

  // check if creator user exists
  const foundCreatedBy = await userModel.findById({ _id: created_by });
  if (!foundCreatedBy) {
    // does not get the error
    return res.status(400).json({ message: "Creator User not exists" });
  }

  // check password to exist and be at least 8 characters long
  if (!password || password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long." });
  }

  // hash password to save in db
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = new userModel({
    name: name,
    email: email,
    password: hashPassword,
    created_by: foundCreatedBy,
    rol: foundRol,
  });
  await newUser.save();

  return res.status(200).json({ message: "User created" });
};

export const updateUserRouteHandler = async (
  req,
  res,
  id,
  name,
  email,
  rol
) => {
  const userExists = await userModel.findById({ _id: id });
  if (!userExists) {
    return res.status(400).json({ message: "User not exists" });
  }

  // check if name already exists
  if (userExists.name !== name) {
    const foundName = await userModel.findOne({ name: name });
    if (foundName) {
      // does not get the error
      return res.status(400).json({ message: "Name is already in use" });
    }
  }

  // check if email already exists
  if (userExists.email !== email) {
    const foundUser = await userModel.findOne({ email: email });
    if (foundUser) {
      // does not get the error
      return res.status(400).json({ message: "Email is already in use" });
    }
  }

  // check if rol exists
  const foundRol = await rolModel.findOne({ name: rol });
  if (!foundRol) {
    // does not get the error
    return res.status(400).json({ message: "Rol not exists" });
  }

  userExists.name = name;
  userExists.email = email;
  userExists.rol = foundRol;

  await userExists.save();
  return res.status(200).json({ message: "User updated" });
};

export const getUserRouteHandler = async (req, res, name) => {
  try {
    const foundUser = await userModel.findOne({ name: name }).populate("rol");
    if (!foundUser) {
      // does not get the error
      return res.status(400).json({ message: "USer not exists" });
    }
    return res.status(200).json({ message: foundUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllUsersRouteHandler = async (req, res) => {
  try {
    const foundUsers = await userModel
      .find()
      .populate("rol")
      .populate("created_by");
    return res.status(200).json({ message: foundUsers });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
