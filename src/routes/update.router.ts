import { Router } from "express";
import { handleInputErrors } from "../middlewares/validationMiddleware";
import { body } from "express-validator";
import { createUpdateController, deleteUpdateController, getAllUpdatesController, getOneUpdateController, updateUpdatesController } from "../controllers/updateController";

const updateRouter=Router()

updateRouter.get("/", getAllUpdatesController);
  
updateRouter.get("/:id",body('title').optional(),
 getOneUpdateController);

updateRouter.post("/", 
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('productId').exists().isString()
  ,handleInputErrors
  ,createUpdateController);

updateRouter.put("/:id",
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional(),
  handleInputErrors,
 updateUpdatesController);

updateRouter.delete("/:id", deleteUpdateController);
export default updateRouter