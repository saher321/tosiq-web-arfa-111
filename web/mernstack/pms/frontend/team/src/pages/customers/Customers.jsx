import React from "react";
import RoleBasedLayout from "../../layouts/RoleBasedLayout.jsx";
import { Button, NavigateLink } from "../../components/ComponentLib.jsx";
import { useState } from "react";
import { ALL_CUST_API, DEL_CUST_API } from "../../utils/api.js";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import moment from "moment";
import {
  Link,
  UNSAFE_createClientRoutesWithHMRRevalidationOptOut,
} from "react-router";
import { Eye, SquarePen, Trash2 } from "lucide-react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const getAllCustomers = async () => {
    try {
      const response = await axios.get(ALL_CUST_API);
      if (response.data.status == true) {
        setCustomers(response.data.customers);
      } else {
        toast.error("No record were found");
      }
    } catch (error) {
      toast.error("Internal server error");
      throw new Error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      toast.error("ID not found!");
      return;
    }
    try {
      const response = await axios.delete(`${DEL_CUST_API}/${id}/delete`);
      if (response.data.status == true) {
        toast.success(response.data.message);
        await getAllCustomers();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Internal server error");
      throw new Error(error);
    }
  };

  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <RoleBasedLayout>
      <div className="bg-white p-3 rounded-lg">
        <div className="my-3 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-[18px]">Customer List</h1>
          </div>
          <div>
            <NavigateLink
              url="/customers/add"
              className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold"
            >
              Add customer
            </NavigateLink>
          </div>
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
                  Contact
                </th>
                <th scope="col" className="px-6 py-4">
                  Address
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
              {customers.length == 0 ? (
                <tr>
                  <td className="px-6 py-4" colSpan={7}>
                    No customer were found
                  </td>
                </tr>
              ) : (
                customers.map((customer, i) => {
                  return (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                        {customer.fullName}
                      </td>

                      <td className="px-6 py-4">{customer.email}</td>

                      <td className="px-6 py-4">{customer.contact}</td>

                      <td className="text-wrap whitespace-nowrap px-6 py-4">
                        <span className="block w-[140px] truncate">{customer.address}</span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        {moment(customer.createdAt).format("LL")}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex gap-3">
                          <Link to={`/customers/${customer._id}/details`}>
                            <Eye
                              size={32}
                              className="rounded-lg text-purple-600 bg-gray-200 p-2"
                            />
                          </Link>
                          <Link onClick={() => handleDelete(customer._id)}>
                            <Trash2
                              size={32}
                              className="rounded-lg text-purple-600 bg-gray-200 p-2"
                            />
                          </Link>
                          <Link to={`/customers/${customer._id}/edit`}>
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

export default Customers;
