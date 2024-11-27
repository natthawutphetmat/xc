"use client";

import './post.css';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [posts, setPosts] = useState([]); // State for posts

  // Fetch posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let response = await fetch('https://api-post-get.myads.dev/get'); 
        let data = await response.json();
        setPosts(data); // Update the state with fetched posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // Run effect once on mount



const urlimg = 'https://api-post.myads.dev/public';
let videoId = 'GgzFZSj0VDs&t';
 
const embedUrl = `https://www.youtube.com/watch?v=GgzFZSj0VDs&t=52s`;
  return (
    <div className="container   mx-auto">
      {posts.map((post) => (
        <> 
        <div className="card mx-auto mt-5" key={post.id}>

          <div className="title h3 text-center">{post.title}</div>

          {post.name ? (
            
            <>
           <iframe
                width="560"
                height="315"
                className='vdoimg'
                src={`https://www.youtube.com/embed/${post.name}`}
                title="YouTube video player"
                frameBorder="0"
                allow=" "
                allowFullScreen
            ></iframe>
          
          
          </>
        
        
        ):(<> 
          <img src={urlimg+post.imgvdo} className="vdoimg" alt="item" /> 
        
        </>) }



        


          <div className="card-body">
            <h3>{post.title}</h3>
            <p className="card-text">
              {post.content}
              </p>



          </div>

        </div>
      
      <br />
      <hr />
      </>
      ))}
       
    </div>
  );
}
