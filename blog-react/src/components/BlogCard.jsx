import React from 'react';
import './BlogCard.css'
const BlogCard = ({title,description,imageUrl,author,date}) => {
  return (
    <div className='blog-card'>
      <p><strong>{title}</strong></p>
      <img className='blog-card-image' src={imageUrl} alt="coverImage" width='400px'/>
      <div className='post-info'>
        <span><i>By {author}</i></span>
        <span><i>{date}</i></span>
      </div>
      
      <p>{description}</p>
      
      <button className='see-more-button'>See More</button>
      
    </div>
  );
};

export default BlogCard;