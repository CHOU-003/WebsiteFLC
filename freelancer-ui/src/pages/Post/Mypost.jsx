import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Mypost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`Server/posts/manu`);
        setPosts(response.data);
      } catch (error) {
        console.error("Không thể tải dự án", error);
      }
    };

    fetchPost();
  }, []);

if (!posts.length) {
    return <div className="managerjob">Không có dự án nào.</div>;
} 


    return ( 
        <div className="home">
            <div className="posts">
                {posts.map((post, index) => (
                    <div className="post" key={index}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post._id}`}>
                                <h1>{post.tieu_de}</h1>
                            </Link>
                            <p>{post.noi_dung}</p>
                        </div>
                        <div className="btn">
                            <button className="btn-delete">Chỉnh sửa</button>
                            <Link to={`/deletepost/${post._id}`}>
                                <button className="btn-delete">Xóa</button>
                            </Link>  
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default Mypost;