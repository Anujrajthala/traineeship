import React, { useState } from 'react';
import axios from 'axios';
import { Routes,Route, Link } from 'react-router-dom';
import BookNew from './BookNew';
import BookUpdate from './BookUpdate';

const BookForm = () => {
    const [title,setTitle]= useState('');
    const [author,setAuthor]= useState('');
    const handleSubmit= function(e,id=0){
        e.preventDefault();
        if(id==0){
            axios.post('http://127.0.0.1:5000/books',{title,author})
            .then((response)=> {console.log("The book has been added successfully.",response.data)
                setAuthor('');
                setTitle('');})
            .catch(error=> console.error('Error adding book: ',error));
        }
        if(id>0){
            axios.put(`http://127.0.0.1:5000/books/${id}`,{title,author})
            .then((response)=> {console.log("The book has been updated successfully.",response.data)
                setAuthor('');
                setTitle('');})
            .catch(error=> console.error('Error adding book: ',error));
        }
        
        
    
    
    }
  return (
   
    <>
    
        
        <Link to='/add/newbook'><button >Add New Book</button></Link>
        <Link to='/add/updbook'><button >Update Book</button></Link>
        <Routes>
            <Route path='newbook' element={<BookNew handleSubmit ={handleSubmit} title={title} author={author} setTitle={setTitle} setAuthor={setAuthor}/>}/>
            <Route path='updbook' element={<BookUpdate handleSubmit ={handleSubmit} title={title} author={author} setTitle={setTitle} setAuthor={setAuthor}/>}/>
        </Routes>
   
    <h2>BookForm</h2>
    
    </>
  );
};

export default BookForm;