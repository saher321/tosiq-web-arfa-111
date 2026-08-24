import express from "express";
import {
  customers,
  addCustomer,
  deleteCustomer,
  editCustomer,
  updateCustomer,
} from "./customer.controller.js";

const customerRouter = express.Router();

// http://localhost:5000/api/v1/customers
customerRouter.get("/customers/", customers);
customerRouter.post("/customers/add", addCustomer);
customerRouter.delete("/customers/:id/delete", deleteCustomer);
customerRouter.get("/customers/:id/edit", editCustomer);
customerRouter.patch("/customers/update", updateCustomer);

export default customerRouter;
