import React from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout.jsx';
import { Button, NavigateLink } from '../../components/ComponentLib.jsx';
import { useState } from 'react';
import { ALL_CUST_API } from '../../utils/api.js';
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react';
import moment from 'moment';

const Customers = () => {
    const [customers, setCustomers] = useState([])

    const getAllCustomers = async () => {
        try {
            const response = await axios.get(ALL_CUST_API)
            if (response.data.status == true){
                setCustomers(response.data.customers)
            } else {
                toast.error("No record were found")
            }
        } catch (error) {
            throw new Error(error)
            toast.error("Internal server error")
        }
    }

    useEffect(() => {
        getAllCustomers()
    }, [])

    return (
        <RoleBasedLayout>
            <div className='bg-white p-3 rounded-lg'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-bold text-[18px]'>Customer List</h1>
                    </div>
                    <div>
                        <NavigateLink url="/customers/add"
                            className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold"
                        >
                            Add customer
                        </NavigateLink>
                    </div>
                </div>

                <div class="my-5 w-full overflow-x-auto rounded-lg shadow">
                    <table class="w-full min-w-[900px] text-left text-sm text-gray-600">
                        <thead class="bg-purple-600 text-xs uppercase text-white">
                            <tr>
                                <th scope="col" class="px-6 py-4">Name</th>
                                <th scope="col" class="px-6 py-4">Email</th>
                                <th scope="col" class="px-6 py-4">Contact</th>
                                <th scope="col" class="px-6 py-4">Project Status</th>
                                <th scope="col" class="px-6 py-4">Created At</th>
                                <th scope="col" class="px-6 py-4">Updated At</th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200 bg-white">
                            {
                                customers.length == 0 ?
                                <tr><td class="px-6 py-4" colSpan={7}>No customer were found</td></tr> :
                                customers.map((customer, i) => {
                                    return (
                                        <tr key={i} class="hover:bg-gray-50">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                                                {customer.fullName}
                                            </td>

                                            <td class="px-6 py-4">
                                                {customer.email}
                                            </td>

                                            <td class="px-6 py-4">
                                                {customer.contact}
                                            </td>

                                            <td class="px-6 py-4">
                                                {
                                                customer.projectStatus == 'active' ?
                                                <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                                    Active
                                                </span> :
                                                customer.projectStatus == 'proccessing' ?
                                                <span class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                                                    Proccessing
                                                </span> :
                                                customer.projectStatus == 'completed' ?
                                                <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                                                    Completed
                                                </span> :
                                                customer.projectStatus == 'cancelled' &&
                                                <span class="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                                                    Cancelled
                                                </span>

                                                }
                                            </td>

                                            <td class="whitespace-nowrap px-6 py-4">
                                                {moment(customer.createdAt).format('LL')}
                                            </td>

                                            <td class="whitespace-nowrap px-6 py-4">
                                                {moment(customer.updatedAt).format('LL')}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default Customers