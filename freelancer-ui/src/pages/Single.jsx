import React, { useState, useEffect } from "react";
import Edit from "../img/Edit.jpg";
import Delete from "../img/Delate.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import moment from "moment";


const Single = () => {

    const [post, setPost] = useState({})

    const {  currentUser } = useContext(AuthContext)
  
    const navigate = useNavigate()

    const { id } = useParams();
    const postId = id;


    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get(`http://localhost:3001/Server/posts/${id}`);
              setPost(res.data);
          } catch (err) {
              console.log(err);
          }
      };
      fetchData();
    }, [id]);
  
  
  

      const handleDelete = async ()=>{
        try {
          await axios.delete(`Server/posts/${postId}`);
          navigate("/")
        } catch (err) {
          console.log(err);
        }
      }

    return ( 
        <div className="single">
            <div className="content">
                <img src={post.img} alt="" />
                <div className="user">
                    <img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2024/1/19/1294299/St-Bld3.jpg" alt="" />
                <div className="info">
                    <span>{currentUser?.ho_ten}</span>
                    <p>Posted {moment(post.date).fromNow()}</p>
                </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img onClick={handleDelete} src={Delete} alt="" />
                    </div>
                </div>
                <h1>{post.tieu_de}</h1>
                <p>
                {post.noi_dung}
                </p>
            </div>
            <Menu />
        </div>
     );
}

export default Single;