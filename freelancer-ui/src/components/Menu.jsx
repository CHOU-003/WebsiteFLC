import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Menu() {

  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/Server/posts?${cat}`);
        setPosts(res.data)
      }catch (err) {
        console.log(err)
      }
    }
    fetchPost();
  }, [cat])

    return ( 
        <div className="menu">
            <h1>Những công việc liên quan</h1>
            {posts.slice(0, 6).map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.tieu_de}</h2>
                    <button>Đọc thêm</button>
                </div>
            ))}
        </div>
     );
}

export default Menu;