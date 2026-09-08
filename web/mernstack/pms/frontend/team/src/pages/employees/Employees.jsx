import React from "react";
import RoleBasedLayout from "../../layouts/RoleBasedLayout.jsx";
import { Button, NavigateLink } from "../../components/ComponentLib.jsx";
import { useState } from "react";
import { ALL_EMP_API } from "../../utils/api.js";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router";
import { Eye, SquarePen, Trash2 } from "lucide-react";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const getAllEmployees = async () => {
    try {
      const response = await axios.get(ALL_EMP_API);
      if (response.data.status == true) {
        setEmployees(response.data.employees);
      } else {
        toast.error("No record were found");
      }
    } catch (error) {
      toast.error("Internal server error");
      throw new Error(error);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <RoleBasedLayout>
      <div className="bg-white p-3 rounded-lg">
        <div className="my-3 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-[18px]">Employee List</h1>
          </div>
          {/* <div>
            <NavigateLink
              url="/employees/add"
              className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold"
            >
              Add employee
            </NavigateLink>
          </div> */}
        </div>

        <div className="my-5 w-full overflow-x-auto rounded-lg shadow">
          <table className="w-full min-w-[900px] text-left text-sm text-gray-600">
            <thead className="bg-purple-600 text-xs uppercase text-white">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Email
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
              {employees.length == 0 ? (
                <tr>
                  <td className="px-6 py-4" colSpan={7}>
                    No employee were found
                  </td>
                </tr>
              ) : (
                employees.map((employee, i) => {
                  return (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                        {employee.fullName}
                      </td>

                      <td className="px-6 py-4">{employee.email}</td>

                      <td className="whitespace-nowrap px-6 py-4">
                        {moment(employee.createdAt).format("LL")}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex gap-3">
                          <Link to={`/employees/${employee._id}/details`}>
                            <Eye
                              size={32}
                              className="rounded-lg text-purple-600 bg-gray-200 p-2"
                            />
                          </Link>
                          {/* <Link onClick={() => handleDelete(employee._id)}>
                            <Trash2
                              size={32}
                              className="rounded-lg text-purple-600 bg-gray-200 p-2"
                            />
                          </Link>
                          <Link to={`/employees/${employee._id}/edit`}>
                            <SquarePen
                              size={32}
                              className="rounded-lg text-purple-600 bg-gray-200 p-2"
                            />
                          </Link> */}
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

export default Employees;
