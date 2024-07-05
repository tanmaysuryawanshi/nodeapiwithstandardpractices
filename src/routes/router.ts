import {Router} from "express"
import { body,validationResult } from "express-validator";
import { handleInputErrors } from "../middlewares/validationMiddleware";
import productRouter from "./product.router";
import updateRouter from "./update.router";
import updatePointRouter from "./updatepoint";
const router =Router();
//Products
router.use("/product",productRouter)

  /**
   * Update
   */
  router.use("/update",updateRouter)

  /**
   * UpdatePoint
   */
  router.use("/updatepoint",updatePointRouter)
 
  export default router;