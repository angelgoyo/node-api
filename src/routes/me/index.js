import express from "express";
import {
  getProfileRouteHandler,
  patchProfileRouteHandler,
} from "../../services/me/index.js";

const router = express.Router();
// get user's profile
router.get("/", (req, res) => {
  /* 	#swagger.tags = ['Me']
      #swagger.description = 'Endpoint to get a specific user profile' 
  */
  getProfileRouteHandler(req, res);
});

// update user's profile
router.patch("/", async (req, res) => {
  /* 	#swagger.tags = ['Me']
      #swagger.description = 'Endpoint to update a specific user profile' 
  */
  patchProfileRouteHandler(req, res);
});

export default router;
