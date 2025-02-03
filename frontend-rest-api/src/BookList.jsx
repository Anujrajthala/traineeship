import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookDetail from './BookDetail';
import {Route,Routes,Link} from 'react-router-dom'
const BookList = () => {
    const [books,setBooks]= useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/books')
        .then((response)=>{
            setBooks(response.data)})
        .catch(error=> console.error('Error fetching books:', error)
        )
        
    },[])
   
  return (
   <>
    {
        books.map((book)=>{
           return <li key={book.id}>{book.title} by {book.author} <Link to='detail' state={book.id}><button>Show more</button></Link></li>
        })
    }
   </>
  );
};

export default BookList;