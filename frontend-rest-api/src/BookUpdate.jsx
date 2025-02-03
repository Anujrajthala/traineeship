import React from 'react';
import { useState } from 'react';

const BookUpdate = ({author,title,setAuthor,setTitle,handleSubmit}) => {
    const [id,setID]= useState(0);
  return (
    <div>
       <form onSubmit={(e)=>{handleSubmit(e,id)}}>
            <h2>Update Book</h2>
            <label >ID</label>
            <input type="text" value={id} onChange={(e)=>setID(e.target.value)}/>
            <label >Title</label>
            <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label >Author</label>
            <input type="text" name="author" value={author} onChange={(e)=>setAuthor(e.target.value)} />
            <input type="submit" />
        </form>
    </div>
  );
};

export default BookUpdate;