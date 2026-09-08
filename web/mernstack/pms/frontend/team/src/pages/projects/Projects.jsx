import React from "react";
import RoleBasedLayout from "../../layouts/RoleBasedLayout.jsx";
import { NavigateLink } from "../../components/ComponentLib.jsx";
import { useState } from "react";
import { ALL_CSTMR_API, ALL_PRO_API, DEL_PRO_API } from "../../utils/api.js";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router";
import { SquarePen, Trash2 } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const getAllProjects = async () => {
    try {
      const response = await axios.get(ALL_PRO_API);
      if (response.data.status == true) {
        console.log(response.data.projects);
        setProjects(response.data.projects);
      } else {
        toast.error("No record were found");
      }
    } catch (error) {
      toast.error("Internal server error");
      throw new Error(error);
    }
  };

  const handleProjectDelete = async (id) => {
    if (!id) {
      toast.error("ID not found!");
      return;
    }
    try {
      const response = await axios.delete(`${DEL_PRO_API}/${id}/delete`);
      if (response.data.status == true) {
        toast.success(response.data.message);
        await getAllProjects();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Internal server error");
      throw new Error(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <RoleBasedLayout>
      <div className="bg-white p-3 rounded-lg">
        <div className="my-3 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-[18px]">Project List</h1>
          </div>
          <div>
            <NavigateLink
              url="/projects/add"
              className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold"
            >
              Add project
            </NavigateLink>
          </div>
        </div>

        <div className="my-5 w-full overflow-x-auto rounded-lg shadow">
          <table className="w-full min-w-[900px] text-left text-sm text-gray-600">
            <thead className="bg-purple-600 text-xs uppercase text-white">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Project title
                </th>
                <th scope="col" className="px-6 py-4">
                  Customer name
                </th>
                <th scope="col" className="px-6 py-4">
                  Start date
                </th>
                <th scope="col" className="px-6 py-4">
                  Dead line
                </th>
                <th scope="col" className="px-6 py-4">
                  Project Status
                </th>
                <th scope="col" className="px-6 py-4">
                  Created At
                </th>
                <th scope="col" className="px-6 py-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {projects.length == 0 ? (
                <tr>
                  <td className="px-6 py-4" colSpan={7}>
                    No project were found
                  </td>
                </tr>
              ) : (
                projects.map((project, i) => {
                  return (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                        {project.projectTitle}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                        {project.customer?.fullName ?? "Customer id not assigned"}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        {moment(project.startDate).format("LL")}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        {moment(project.deadLine).format("LL")}
                      </td>

                      <td className="px-6 py-4">
                        {project.projectStatus == "active" ? (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                            Active
                          </span>
                        ) : project.projectStatus == "pending" ? (
                          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                            Pending
                          </span>
                        ) : project.projectStatus == "proccessing" ? (
                          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                            Proccessing
                          </span>
                        ) : project.projectStatus == "completed" ? (
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                            Completed
                          </span>
                        ) : (
                          project.projectStatus == "cancelled" && (
                            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                              Cancelled
                            </span>
                          )
                        )}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        {moment(project.createdAt).format("LL")}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex gap-3">
                          <Link
                            onClick={() => handleProjectDelete(project._id)}
                          >
                            <Trash2
                              size={32}
                              className="rounded-lg text-purple-600 bg-gray-200 p-2"
                            />
                          </Link>
                          <Link to={`/projects/${project._id}/edit`}>
                            <SquarePen
                              size={32}
                              className="rounded-lg text-purple-600 bg-gray-200 p-2"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </RoleBasedLayout>
  );
};

export default Projects;
