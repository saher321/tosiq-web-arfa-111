import React, { useEffect, useState } from "react";
import RoleBasedLayout from "../../layouts/RoleBasedLayout.jsx";
import {
  Button,
  InputField,
  NavigateLink,
  SelectInput,
} from "../../components/ComponentLib.jsx";
import { MoveLeft } from "lucide-react";
import { projectStatuses as statuses } from "../../utils/common.js";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ADD_PRO_API, ALL_CSTMR_API } from "../../utils/api.js";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const AddProject = () => {
  const [projectStatuses, setProjectStatuses] = useState(statuses);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);

  const getAllCustomers = async () => {
    try {
      const response = await axios.get(ALL_CSTMR_API);
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

  useEffect(() => {
    getAllCustomers();
  }, []);

  const handleAddProject = async (data) => {
    try {
      const response = await axios.post(ADD_PRO_API, data);
      if (response.data.status == true) {
        toast.success(response.data.message);
        navigate("/projects");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Internal server error");
      throw new Error(error);
    }
  };

  return (
    <RoleBasedLayout>
      <div>
        <NavigateLink url="/projects" className="text-purple-600 text-[12px]">
          <div className="flex gap-2 items-center hover:gap-3 transition-all">
            <MoveLeft /> <span>Go back</span>
          </div>
        </NavigateLink>
      </div>

      <div className="mt-3 bg-white p-3 rounded-lg">
        <div className="my-3 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-[18px]">Add new project</h1>
          </div>
          <div>
            <NavigateLink
              url="/projects"
              className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold"
            >
              View projects
            </NavigateLink>
          </div>
        </div>

        <div className="my-5 max-w-2xl">
          <form onSubmit={handleSubmit(handleAddProject)}>
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6">
                <label>Project title</label>
                <InputField
                  {...register("projectTitle")}
                  type="text"
                  hint="Marketing Store"
                />
              </div>
              <div className="col-span-6">
                <label>Customer name</label>
                <SelectInput {...register("customerId")} data={customers} />
              </div>
              <div className="col-span-6">
                <label>Start date</label>
                <InputField {...register("startDate")} type="date" />
              </div>
              <div className="col-span-6">
                <label>Dead line</label>
                <InputField {...register("deadLine")} type="date" />
              </div>
              <div className="col-span-6">
                <label>Project status</label>
                <SelectInput
                  {...register("projectStatus")}
                  data={projectStatuses}
                />
              </div>
              <div className="col-span-12">
                <label>Notes</label>
                <InputField
                  {...register("address")}
                  type="text"
                  hint="UI UX design provided"
                />
              </div>
              <div className="col-span-12">
                <Button
                  title="Add project"
                  className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </RoleBasedLayout>
  );
};

export default AddProject;
