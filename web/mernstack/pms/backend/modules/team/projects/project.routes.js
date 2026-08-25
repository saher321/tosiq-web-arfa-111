import express from "express";
import {
  projects,
  addProject,
  deleteProject,
  editProject,
  updateProject,
  customerData, // customers (_id, fullName) for project
} from "./project.controller.js";

const projectRouter = express.Router();

// http://localhost:5000/api/v1/projects
projectRouter.get("/customers-data", customerData);
projectRouter.get("/projects/", projects);
projectRouter.post("/projects/add", addProject);
projectRouter.delete("/projects/:id/delete", deleteProject);
projectRouter.get("/projects/:id/edit", editProject);
projectRouter.patch("/projects/update", updateProject);

export default projectRouter;
