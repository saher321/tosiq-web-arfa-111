import Project from "./project.model.js";
import Customer from "../customers/customer.model.js";

export const customerData = async (req, res) => {
  try {
    const customerData = await Customer.find({}).select("_id fullName").lean();

    const customers = customerData.map(({ _id, fullName }) => ({
      id: _id,
      text: fullName,
    }));

    if (customers.length > 0) {
      return res.send({
        status: true,
        customers,
      });
    } else {
      return res.send({
        status: true,
        customers: [],
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const projects = async (req, res) => {
  try {
    const allProjects = await Project.find({}).populate("customer");

    return res.send({
      status: true,
      projects: allProjects,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const addProject = async (req, res) => {
  const { projectTitle, customer, startDate, deadLine, projectStatus, notes } =
    req.body;

  if (!projectTitle || !customer || !deadLine) {
    return res.send({
      status: false,
      message: "Fill all the fields",
    });
  }

  try {
    const project = {
      projectTitle,
      customer,
      startDate,
      deadLine,
      projectStatus,
      notes,
    };

    const response = await Project.create(project);
    if (response) {
      return res.send({
        status: true,
        message: "Project has been added",
      });
    } else {
      return res.send({
        status: false,
        message: "Failed to add project",
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.send({
      status: false,
      message: "ID not found!",
    });
  }
  try {
    const project = await Project.findByIdAndDelete({ _id: id });
    if (!project) {
      return res.send({
        status: false,
        message: "Project not found",
      });
    }

    return res.send({
      status: true,
      message: "Project has been deleted!",
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const editProject = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.send({
      status: false,
      message: "ID not found!",
    });
  }
  try {
    const project = await Project.findById({ _id: id });
    if (!project) {
      return res.send({
        status: false,
        message: "Project not found",
      });
    }

    // 2026-04-02T09:30:00
    let sDate = project.startDate.toISOString().split("T")[0];
    let dLine = project.deadLine.toISOString().split("T")[0];
    const editedProject = {
      projectTitle: project.projectTitle,
      customer: project.customer,
      startDate: sDate,
      deadLine: dLine,
      projectStatus: project.projectStatus,
      notes: project.notes,
    };

    return res.send({
      status: true,
      project: editedProject,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateProject = async (req, res) => {
  const project = req.body
  if (!project.id) {
    return res.send({
      status: false,
      message: "ID not found!",
    });
  }
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      { _id: project.id }, project, {new: true}
    );
    if (!updatedProject) {
      return res.send({
        status: false,
        message: "Project not found",
      });
    }

    return res.send({
      status: true,
      message: "Project updated successfull",
    });
  } catch (error) {
    throw new Error(error);
  }
};
