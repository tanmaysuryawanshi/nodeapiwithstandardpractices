import { Router } from "express";
import { handleInputErrors } from "../middlewares/validationMiddleware";
import { body } from "express-validator";
import { createProductController, deleteProductController, getAllProductsController, getOneProductController, updateProductController } from "../controllers/productController";

const productRouter=Router()
productRouter.get("/", getAllProductsController);
  
  productRouter.get("/:id", getOneProductController);
  
  productRouter.post("/",body('name').isString(),handleInputErrors, createProductController);
  

  productRouter.put("/:id", body('name').isString(),handleInputErrors, updateProductController);
  
  productRouter.delete("/:id", deleteProductController);
  export default productRouter
  