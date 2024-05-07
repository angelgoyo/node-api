import express from "express";
import {
  forgotPasswordRouteHandler,
  loginRouteHandler,
  resetPasswordRouteHandler,
} from "../../services/auth/index.js";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  /* 	#swagger.tags = ['Auth']
      #swagger.description = 'Endpoint to login app' 
  */
  const { email, password } = req.body.data.attributes;
  await loginRouteHandler(req, res, email, password);
});

router.post("/logout", (req, res) => {
  /* 	#swagger.tags = ['Auth']
      #swagger.description = 'Endpoint to logout app' 
  */
  return res.sendStatus(204);
});

router.post("/password-forgot", async (req, res) => {
  /* 	#swagger.tags = ['Auth']
      #swagger.description = 'Endpoint to remember password' 
  */
  const { email } = req.body.data.attributes;
  await forgotPasswordRouteHandler(req, res, email);
});

router.post("/password-reset", async (req, res) => {
  /* 	#swagger.tags = ['Auth']
      #swagger.description = 'Endpoint to reset password' 
  */
  await resetPasswordRouteHandler(req, res);
});

export default router;
