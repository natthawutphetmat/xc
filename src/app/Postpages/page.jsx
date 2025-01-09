"use client";

import './post.css';
import React, { useEffect, useState } from 'react';
import Head from 'next/head'; // Import Head จาก next/head

export default function Page() {
  const [posts, setPosts] = useState([]); // State for posts

  // Fetch posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let response = await fetch('https://api-post-get.myads.dev/get');
        let data = await response.json();
        setPosts(data);  
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);  

  const urlimg = 'https://api-post.myads.dev/public';

  return (
    <>
    
      <>
        <title>PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์ </title>
        <meta name="title" content="PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์ " />
        <meta
          name="description"
          content="PostPage | เนื้อหาความรู้ดีๆที่ทุกคนเข้าถึงได้ รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ"
        />
        <meta name="keywords" content="การยิงแอด#, Google, สายเทา, คอร์สเรียนGoogleAdsสายเทา, GoogleAdsสายเทา, สายเทา, บริการคอร์สเรียน, บริการคอร์สเรียน 
    ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,ads,สอนยิงแอด,สอนยิงแอด Conversion,
    สอนยิงแอดสายเทา,ยิงแอดสายเทา,ยิงโฆษณาสายเทา,รับทำ seo สายเทา,รับทำ seo สายดำ,แอดสายเทา,รับยิงแอดสายเทา,กูเกิ้ลแอดสายเทา,รับทํา google ads,สายเทา seo สายเทา,
    ตลาดสีเทา,แอดสีเทา,adsสีเทา,กราฟฟิกสายเทา,ยิงแอดเทา,รับยิงแอดfacebookสายเทา,รูปยิงแอดสายเทา,รับจ้างสายเทา,รับโฆษณาสายเทา
    ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,ads,รับยิงแอด,รับทำโฆษณา,รับโฆษณา,
    Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,
    การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา
"/>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.myads.dev/https://www.myads.dev/Postpages"
        />
        <meta
          property="og:title"
          content="PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์ "
        />
        <meta
          property="og:description"
          content="PostPage | เนื้อหาความรู้ดีๆที่ทุกคนเข้าถึงได้ รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ"
        />
        <meta property="og:image" content="https://www.myads.dev/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.myads.dev/https://www.myads.dev/Postpages"
        />
        <meta
          property="twitter:title"
          content="PostPage | รับจ้างยิงแอดทำโฆษณาออนไลน์ "
        />
        <meta
          property="twitter:description"
          content="PostPage | เนื้อหาความรู้ดีๆที่ทุกคนเข้าถึงได้ รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ"
        />
        <meta property="twitter:image" content="https://www.myads.dev/logo.png" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://www.myads.dev" />
      </>




      <div className="container mx-auto">
        {posts.map((post) => (
          <div className="card mx-auto mt-5" key={post.id}>
            <div className="title h3 text-center">{post.title}</div>
            {post.name ? (
              <iframe
                width="560"
                height="315"
                className="vdoimg"
                src={`https://www.youtube.com/embed/${post.name}`}
                title="YouTube video player"
                frameBorder="0"
                allow=" "
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={`${urlimg}${post.imgvdo}`}
                className="vdoimg"
                alt="item"
              />
            )}
            <div className="card-body">
              <h3>{post.title}</h3>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
