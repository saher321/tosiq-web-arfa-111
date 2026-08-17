import React from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout.jsx';
import { Button, NavigateLink } from '../../components/ComponentLib.jsx';

const Customers = () => {

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
                                <th scope="col" class="px-6 py-4">Address</th>
                                <th scope="col" class="px-6 py-4">Project Status</th>
                                <th scope="col" class="px-6 py-4">Created At</th>
                                <th scope="col" class="px-6 py-4">Updated At</th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr class="hover:bg-gray-50">
                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                                    John Doe
                                </td>

                                <td class="px-6 py-4">
                                    john@example.com
                                </td>

                                <td class="px-6 py-4">
                                    +92 300 1234567
                                </td>

                                <td class="px-6 py-4">
                                    Lahore, Pakistan
                                </td>

                                <td class="px-6 py-4">
                                    <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                        Active
                                    </span>
                                </td>

                                <td class="whitespace-nowrap px-6 py-4">
                                    Aug 17, 2026
                                </td>

                                <td class="whitespace-nowrap px-6 py-4">
                                    Aug 17, 2026
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50">
                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                                    Sarah Khan
                                </td>

                                <td class="px-6 py-4">
                                    sarah@example.com
                                </td>

                                <td class="px-6 py-4">
                                    +92 301 9876543
                                </td>

                                <td class="px-6 py-4">
                                    Islamabad, Pakistan
                                </td>

                                <td class="px-6 py-4">
                                    <span class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                                        Processing
                                    </span>
                                </td>

                                <td class="whitespace-nowrap px-6 py-4">
                                    Aug 15, 2026
                                </td>

                                <td class="whitespace-nowrap px-6 py-4">
                                    Aug 16, 2026
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50">
                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                                    Ali Ahmed
                                </td>

                                <td class="px-6 py-4">
                                    ali@example.com
                                </td>

                                <td class="px-6 py-4">
                                    +92 302 5551234
                                </td>

                                <td class="px-6 py-4">
                                    Karachi, Pakistan
                                </td>

                                <td class="px-6 py-4">
                                    <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                                        Completed
                                    </span>
                                </td>

                                <td class="whitespace-nowrap px-6 py-4">
                                    Aug 10, 2026
                                </td>

                                <td class="whitespace-nowrap px-6 py-4">
                                    Aug 14, 2026
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50">
                                <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                                    Ahmed Raza
                                </td>

                                <td class="px-6 py-4">
                                    ahmed@example.com
                                </td>

                                <td class="px-6 py-4">
                                    +92 303 1112233
                                </td>

                                <td class="px-6 py-4">
                                    Multan, Pakistan
                                </td>

                                <td class="px-6 py-4">
                                    <span class="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                                        Cancelled
                                    </span>
                                </td>

                                <td class="whitespace-nowrap px-6 py-4">
                                    Aug 05, 2026
                                </td>

                                <td class="whitespace-nowrap px-6 py-4">
                                    Aug 08, 2026
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </RoleBasedLayout>
    )
}

export default Customers