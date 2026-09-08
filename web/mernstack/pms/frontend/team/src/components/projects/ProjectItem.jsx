import { AlarmClockMinus, Flag, FolderClosed } from "lucide-react";
import moment from "moment";
import React from "react";
import { Divider } from "../ComponentLib";

const ProjectItem = ({ project }) => {
  return (
    <div className="p-3 border border-gray-200 shadow rounded-lg w-full">
      <div className="flex justify-between items-center">
        <div>
          <FolderClosed />
        </div>
        <div className="text-[12px] capitalize">
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
        </div>
      </div>
      <div className="font-bold my-2 text-xl">{project.projectTitle}</div>
      <p className="mb-1 text-gray-600 text-[14px]">{project.notes}</p>

      <div className="flex items-center gap-2">
        <Flag size={20} /> <span>{moment(project.startDate).format("ll")}</span>
      </div>

      <Divider />

      <div className="text-gray-500 font-bold flex items-center justify-end gap-2">
        <AlarmClockMinus size={20} />
        <span className="italic">{moment(project.startDate).format("ll")}</span>
      </div>
    </div>
  );
};

export default ProjectItem;
