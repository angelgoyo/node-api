import dotenv from "dotenv";
import { rolModel } from "../../schemas/roles.schema.js";
dotenv.config();

export const addRolRouteHandler = async (req, res, name, permissions) => {
  try {
    const foundRol = await rolModel.findOne({ name: name });
    if (foundRol) {
      // does not get the error
      return res.status(400).json({ message: "Rol already exists" });
    }

    if (permissions.length <= 0) {
      // does not get the error
      return res.status(400).json({ message: "Permissions are required" });
    }

    const newRoles = new rolModel({
      name: name,
    });
    for (const permission of permissions) {
      newRoles.permissions.push(permission);
    }
    const savedRoles = await newRoles.save();
    return res.status(200).json({ message: savedRoles });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRolRouteHandler = async (
  req,
  res,
  id,
  name,
  permissions
) => {
  try {
    const rolExists = await rolModel.findById({ _id: id });
    if (!rolExists) {
      // does not get the error
      return res.status(400).json({ message: "Rol not exists" });
    }
    if (rolExists.name !== name) {
      const foundRol = await rolModel.findOne({ name: name });
      if (foundRol) {
        // does not get the error
        return res.status(400).json({ message: "Rol already exists" });
      }
    }

    if (permissions.length <= 0) {
      // does not get the error
      return res.status(400).json({ message: "Permissions are required" });
    }
    rolExists.name = name;
    rolExists.permissions = [];
    for (const permission of permissions) {
      rolExists.permissions.push(permission);
    }
    const savedRoles = await rolExists.save();
    return res.status(200).json({ message: savedRoles });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRolRouteHandler = async (req, res, name) => {
  try {
    const foundRol = await rolModel.findOne({ name: name });
    if (!foundRol) {
      // does not get the error
      return res.status(400).json({ message: "Rol not exists" });
    }
    return res.status(200).json({ message: foundRol });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllRolesRouteHandler = async (req, res) => {
  try {
    const foundRoles = await rolModel.find();
    return res.status(200).json({ message: foundRoles });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
