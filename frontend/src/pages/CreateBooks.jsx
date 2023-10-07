import React , {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import BackButton from '../components/backButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

export default function CreateBooks() {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [publishYear,setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true);
        axios
        .post('http://localhost:5555/books',data)
        .then(() => {
            setLoading(false);
            enqueueSnackbar('Book created Succesfully', {variant: 'Success'});
            navigate('/');
        })
        .catch((error) => {
            setLoading(false);
            enqueueSnackbar('Error', {variant: 'Error'});
            console.log(error);
        });
    }

    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Create Book</h1>
            {loading ? (<Spinner/>) : '' }
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Published Year</label>
                    <input type='number' value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
                </div>
            </div>
            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>Save</button>                
        </div>
    )
}