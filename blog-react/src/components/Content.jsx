import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios';
import './Content.css';

const Content = () => {
  const apiKey = 'fYox4E6Cu8kjLeek8AM6qTHj'
const [posts, setPosts] = useState([]);
  useEffect(()=>{
    axios.get('https://dev.to/api/articles')
    .then((response)=> setPosts(response.data))
    .catch(error=> console.error('There was an error fetching data',error));
    
  },[])
  console.log(posts[0]);
  return (
    <div>
      <h1>Our Articles</h1>
      <ul className='articles'> 
      {posts.map((post)=>
        <li key={post.id}><BlogCard title = {post.title} description={post.description} imageUrl = {post.cover_image} author={post.user.name} date = {post.readable_publish_date}/></li>
      )
      }
      </ul>
      
    </div>
  );
};

export default Content;