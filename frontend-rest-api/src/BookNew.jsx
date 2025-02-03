import React from 'react';

const BookNew = ({author,title,setAuthor,setTitle,handleSubmit}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Add New Book</h2>
            <label >Title</label>
            <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label >Author</label>
            <input type="text" name="author" value={author} onChange={(e)=>setAuthor(e.target.value)} />
            <input type="submit" />
        </form>
    </div>
  );
};

export default BookNew;