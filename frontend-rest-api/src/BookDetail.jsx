import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const BookDetail = () => {
    const [book,setBook]= useState({})
    const location = useLocation();
    const book_id = location.state;
    useEffect(()=>{
        axios.get(`http://127.0.0.1:5000/books/${book_id}`)
        .then((response)=>{setBook(response.data)
            console.log(response.data)
        })
        .catch(error=> console.error('Error fetching book:', error))
    },[])
  return (
    <>
    <h2>{book.title}</h2>
    <span>By {book.author}</span>
    {/* {book.author?<span>{book.author}</span>:<span>Nothing</span>} */}
    </>
  );
};

export default BookDetail;