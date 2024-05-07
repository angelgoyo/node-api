import { Enum } from "../enum.js";

const permissions = {};

permissions.users = Enum({
  create_user: "create_user",
  delete_user: "delete_user",
  update_user: "update_user",
  read_user: "read_user",
});

permissions.roles = Enum({
  create_rol: "create_rol",
  delete_rol: "delete_rol",
  update_rol: "update_rol",
  read_rol: "read_rol",
});

export { permissions };
