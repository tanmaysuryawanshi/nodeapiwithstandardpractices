import { Router } from "express";
import { handleInputErrors } from "../middlewares/validationMiddleware";
import { body } from "express-validator";

const updatePointRouter=Router()
updatePointRouter.get("/", (req, res) => {});

updatePointRouter.get("/:id",
   (req, res) => {});

updatePointRouter.post("/",  body('name').isString(), 
body('description').isString(),
body('updateId').exists().isString(),
 (req, res) => {});

updatePointRouter.put("/:id",
  body('name').optional().isString(), 
  body('description').optional().isString(),
  (req, res) => {});

updatePointRouter.delete("/:id", (req, res) => {});

export default updatePointRouter