import express from "express";
import {
  getAllUsersRouteHandler,
  getUserRouteHandler,
  registerRouteHandler,
  updateUserRouteHandler,
} from "../../services/users/index.js";
import { checkPermission } from "../../middleware/rbac.middleware.js";
import { permissions } from "../../enum/permissions/index.js";

const router = express.Router();

router.get(
  "/get",
  checkPermission(permissions.users.read_user),
  async (req, res) => {
    /* 	#swagger.tags = ['Users']
      #swagger.description = 'Endpoint to get a specific user' 
  */

    const { name } = req.body.data.attributes;
    await getUserRouteHandler(req, res, name);
  }
);

router.get(
  "/getAll",
  checkPermission(permissions.users.read_user),
  async (req, res) => {
    /* 	#swagger.tags = ['Users']
      #swagger.description = 'Endpoint to get all users' 
  */
    await getAllUsersRouteHandler(req, res);
  }
);

router.post(
  "/register",
  checkPermission(permissions.users.create_user),
  async (req, res) => {
    /* 	#swagger.tags = ['Users']
      #swagger.description = 'Endpoint to register a specific user' 
  */
    const { name, email, password, created_by } = req.body.data.attributes;
    const { rol } = req.body.data;
    await registerRouteHandler(
      req,
      res,
      name,
      email,
      password,
      created_by,
      rol
    );
  }
);

router.put(
  "/update",
  checkPermission(permissions.users.update_user),
  async (req, res) => {
    /* 	#swagger.tags = ['Users']
      #swagger.description = 'Endpoint to update a specific user' 
  */
    const { id, name, email } = req.body.data.attributes;
    const { rol } = req.body.data;
    await updateUserRouteHandler(req, res, id, name, email, rol);
  }
);

export default router;
