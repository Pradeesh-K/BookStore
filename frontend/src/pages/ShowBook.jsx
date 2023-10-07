import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BackButton from '../components/backButton';
import Spinner from '../components/Spinner';

export default function ShowBook() {
    const [book,setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/books/${id}`)
        .then((response) => {
            setBooks(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    },[])

    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Book Details</h1>
            {loading ? (<Spinner/>
            ) : (
                <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span>
                        <span>{book._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Book Name</span>
                        <span>{book.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Published Year</span>
                        <span>{book.publishYear}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Last Updated at</span>
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>
                </div>
                
            )}
        </div>
    )
}