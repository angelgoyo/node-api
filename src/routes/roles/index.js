import express from "express";
import {
  addRolRouteHandler,
  getRolRouteHandler,
  getAllRolesRouteHandler,
  updateRolRouteHandler,
} from "../../services/roles/index.js";
import { checkPermission } from "../../middleware/rbac.middleware.js";
import { permissions } from "../../enum/permissions/index.js";
const router = express.Router();

router.post(
  "/add",
  checkPermission(permissions.roles.create_rol),
  async (req, res) => {
    /* 	#swagger.tags = ['Roles']
      #swagger.description = 'Endpoint to create a specific rol' 
  */
    const { name, permissions } = req.body.data.attributes;
    await addRolRouteHandler(req, res, name, permissions);
  }
);

router.put(
  "/update",
  checkPermission(permissions.roles.update_rol),
  async (req, res) => {
    /* 	#swagger.tags = ['Roles']
      #swagger.description = 'Endpoint to update a specific rol' 
  */
    const { id, name, permissions } = req.body.data.attributes;
    await updateRolRouteHandler(req, res, id, name, permissions);
  }
);

router.get(
  "/get",
  checkPermission(permissions.roles.read_rol),
  async (req, res) => {
    /* 	#swagger.tags = ['Roles']
      #swagger.description = 'Endpoint to get a specific rol' 
  */
    const { name } = req.body.data.attributes;
    await getRolRouteHandler(req, res, name);
  }
);

router.get(
  "/getAll",
  checkPermission(permissions.roles.read_rol),
  async (req, res) => {
    /* 	#swagger.tags = ['Roles']
      #swagger.description = 'Endpoint to get all roles' 
  */
    await getAllRolesRouteHandler(req, res);
  }
);

export default router;
