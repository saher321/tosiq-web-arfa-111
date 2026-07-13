import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router'
import WebLayout from '../layouts/WebLayout'

const UserDetails = () => {
    const params = useParams()

    return (
        <WebLayout>
            User detail page &mdash; #{params.id}
        </WebLayout>
    )
}

export default UserDetails