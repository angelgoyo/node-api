import { rolModel } from "../schemas/roles.schema.js";

// Check if the user has the required permission for a route
export const checkPermission = (permission) => {
  return async (req, res, next) => {
    const userRole = req.user ? req.user.rol.name : "anonymous";
    const userPermissions = await rolModel.findOne({ name: userRole });
    if (userPermissions) {
      if (userPermissions.permissions.includes(permission)) {
        return next();
      } else {
        return res.status(403).json({ error: "Access denied" });
      }
    }
    return res.status(403).json({ error: "Access denied" });
  };
};
