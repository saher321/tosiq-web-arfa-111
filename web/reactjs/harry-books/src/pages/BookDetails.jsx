import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { useParams } from 'react-router'
import axios from 'axios';
import { ALL_BOOKS } from '../utils/api.js';

const BookDetails = () => {
    const params = useParams();
    const [ book, setBook ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    const getBookDetails = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(ALL_BOOKS)
            if (response.data && response.data.length > 0){
                const findBook = response.data.find((item) => { 
                    return item.number == params.bookNumber 
                })
                setBook(findBook)
                setIsLoading(false)
            }
        } catch (error) {
            console.log("ERR: ", error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getBookDetails();
    }, [])

    return (
        <WebLayout>
            <div className='my-10'>
                <div className='flex items-start justify-between'>
                    <div className='flex items-start gap-5'>
                        <div>
                            <img className='rounded-3xl' src={book?.cover} alt="" />
                        </div>
                        <div className='max-w-2xl text-[60px] font-bold'>
                            {book?.originalTitle}
                        </div>
                    </div>
                    <div className='text-4xl h-20 w-20 bg-gray-200 font-bold rounded-full'>
                        <span className='p-8 grid place-content-center-safe'>
                            {book?.number}
                        </span>
                    </div>
                </div>
                <div className='mt-20 text-xl'>
                    {book?.description}
                </div>
            </div>
        </WebLayout>
    )
}

export default BookDetails
