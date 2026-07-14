import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { USER_API_URL } from '../utils/api.js'
import { HiPencil } from "react-icons/hi";

const UserDetails = () => {
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const getSingleUser = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(USER_API_URL)
            if (response.data.status == true && response.data.users.length > 0) {
                let userDetails = response.data.users.find((usr) => usr.id == params.id)
                setUser(userDetails)
            }
        } catch (error) {
            console.log("Error: ", error)
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getSingleUser()
    }, [])
    return (
        <WebLayout>
            <div className='grid grid-cols-12 gap-4 mb-5'>
                <div className='col-span-12 bg-white p-5 rounded-md shadow'>
                    <div className='flex items-center gap-5'>
                        <div>
                            <img src={user.image} className='rounded-full h-16 w-16' alt="" />
                        </div>
                        <div>
                            <span className='font-bold block'>{user.firstName + " " + user.lastName}</span>
                            <small>{user.company?.title}</small> | <small>{user.company?.department}</small>
                        </div>
                    </div>
                </div>
                <div className='col-span-6 bg-white p-5 rounded-md shadow h-fit'>
                    <div className='pb-1 flex border-0 border-b border-gray-200 items-center justify-between'>
                        <div className='font-bold'>Personal Information</div>
                        <HiPencil size={24} />
                    </div>
                    <div className='personal-information'>
                        <table width={"100%"}>
                            <tr>
                                <td>
                                    <label>Gender</label>
                                    <span className='font-bold block capitalize'>{user.gender}</span>
                                </td>
                                <td>
                                    <label>Date of birth</label>
                                    <span className='font-bold block capitalize'>{user.birthDate}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Identify code</label>
                                    <span className='font-bold block capitalize'>{user.ein}</span>
                                </td>
                                <td>
                                    <label>Hometown</label>
                                    <span className='font-bold block capitalize'>{user.address?.city}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Nationality</label>
                                    <span className='font-bold block capitalize'>{user.address?.country}</span>
                                </td>
                                <td>
                                    <label>Blood group</label>
                                    <span className='font-bold block capitalize'>{user.bloodGroup}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Role</label>
                                    <span className='font-bold block capitalize'>{user.role}</span>
                                </td>
                                <td>
                                    <label>Age</label>
                                    <span className='font-bold block capitalize'>{user.age}</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <label>Permanent address</label>
                                    <span className='font-bold block capitalize'>
                                        {user.address?.address + ", " + user.address?.city + ", " + user.address?.country}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <label>Current address</label>
                                    <span className='font-bold block capitalize'>
                                        {user.address?.address + ", " + user.address?.city + ", " + user.address?.country}
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='col-span-6'>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 bg-white p-5 rounded-md shadow">
                            <div className='pb-1 flex border-0 border-b border-gray-200 items-center justify-between'>
                                <div className='font-bold'>Company Details</div>
                                <HiPencil size={24} />
                            </div>
                            <div className='personal-information'>
                                <table width={"100%"}>
                                    <tr>
                                        <td>
                                            <label>Gender</label>
                                            <span className='font-bold block capitalize'>{user.gender}</span>
                                        </td>
                                        <td>
                                            <label>Date of birth</label>
                                            <span className='font-bold block capitalize'>{user.birthDate}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Identify code</label>
                                            <span className='font-bold block capitalize'>{user.ein}</span>
                                        </td>
                                        <td>
                                            <label>Hometown</label>
                                            <span className='font-bold block capitalize'>{user.address?.city}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Nationality</label>
                                            <span className='font-bold block capitalize'>{user.address?.country}</span>
                                        </td>
                                        <td>
                                            <label>Blood group</label>
                                            <span className='font-bold block capitalize'>{user.bloodGroup}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Role</label>
                                            <span className='font-bold block capitalize'>{user.role}</span>
                                        </td>
                                        <td>
                                            <label>Age</label>
                                            <span className='font-bold block capitalize'>{user.age}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <label>Permanent address</label>
                                            <span className='font-bold block capitalize'>
                                                {user.address?.address + ", " + user.address?.city + ", " + user.address?.country}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <label>Current address</label>
                                            <span className='font-bold block capitalize'>
                                                {user.address?.address + ", " + user.address?.city + ", " + user.address?.country}
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="col-span-12 bg-white p-5 rounded-md shadow">
                            <div className='pb-1 flex border-0 border-b border-gray-200 items-center justify-between'>
                                <div className='font-bold'>Account Information</div>
                                <HiPencil size={24} />
                            </div>
                            <div className='personal-information'>
                                <table width={"100%"}>
                                    <tr>
                                        <td>
                                            <label>Gender</label>
                                            <span className='font-bold block capitalize'>{user.gender}</span>
                                        </td>
                                        <td>
                                            <label>Date of birth</label>
                                            <span className='font-bold block capitalize'>{user.birthDate}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Identify code</label>
                                            <span className='font-bold block capitalize'>{user.ein}</span>
                                        </td>
                                        <td>
                                            <label>Hometown</label>
                                            <span className='font-bold block capitalize'>{user.address?.city}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Nationality</label>
                                            <span className='font-bold block capitalize'>{user.address?.country}</span>
                                        </td>
                                        <td>
                                            <label>Blood group</label>
                                            <span className='font-bold block capitalize'>{user.bloodGroup}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Role</label>
                                            <span className='font-bold block capitalize'>{user.role}</span>
                                        </td>
                                        <td>
                                            <label>Age</label>
                                            <span className='font-bold block capitalize'>{user.age}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <label>Permanent address</label>
                                            <span className='font-bold block capitalize'>
                                                {user.address?.address + ", " + user.address?.city + ", " + user.address?.country}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <label>Current address</label>
                                            <span className='font-bold block capitalize'>
                                                {user.address?.address + ", " + user.address?.city + ", " + user.address?.country}
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}

export default UserDetails