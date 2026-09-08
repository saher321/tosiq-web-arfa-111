import React, { useEffect, useState } from "react";
import RoleBasedLayout from "../../layouts/RoleBasedLayout.jsx";
import { NavigateLink } from "../../components/ComponentLib.jsx";
import { MoveLeft, UserRound } from "lucide-react";
import { useParams } from "react-router";
import axios from "axios";
import { VIW_CUST_API } from "../../utils/api.js";
import ProjectItem from "../../components/projects/ProjectItem.jsx";

const CustomerDetails = () => {
  const [ customer, setCustomer ] = useState({})
  const params = useParams()

  const getCustomerDetails = async () => {
    try {
      const response = await axios.get(`${VIW_CUST_API}/${params.id}/details`)
      if (response.data.status == true) {
        console.log(response.data)
        setCustomer(response.data.customer)
      } 
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getCustomerDetails()
  }, [params.id])

  return (
    <RoleBasedLayout>
      <div>
        <NavigateLink url="/customers" className="text-purple-600 text-[12px]">
          <div className="flex gap-2 items-center hover:gap-3 transition-all">
            <MoveLeft /> <span>Go back</span>
          </div>
        </NavigateLink>
      </div>

      <div className="my-5 bg-white p-5 rounded-lg shadow">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <div className="grid place-items-center bg-gray-200 rounded-full h-20 w-20">
              <UserRound size={44} className="mt-[1px]" />
            </div>
            <div>
              <h2 className="font-bold text-2xl">{customer.name}</h2>
              <span className="text-gray-500">{customer.email}</span>
            </div>
          </div>
          <div className="text-gray-500">{customer.contact}</div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg shadow">
        <span className="font-bold border-b border-b-gray-200 mb-5 pb-2 block">
          Projects
        </span>

        <div className="grid grid-cols-12 gap-5">
          { customer?.projects?.length == 0 ? <div className="col-span-12 text-gray-500 italic text-sm">No projects were found</div> :
            customer?.projects?.map((project, i) => {
            return (
              <div key={i} className="col-span-4">
                <ProjectItem project={project}/>
              </div>
            )
          })}
        </div>
      </div>
    </RoleBasedLayout>
  );
};

export default CustomerDetails;
