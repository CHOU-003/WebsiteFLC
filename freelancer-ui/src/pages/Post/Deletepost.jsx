import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Deletepost() {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate()


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

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.delete(`/Server/posts/${id}`, post);
            alert("Xóa dự án thành công!");
            navigate("/mypost");
        } catch (error) {
            console.error("Không thể cập nhật dự án", error);
        }
    };

    if (!post) {
        return <div className="editjob">Đang tải dự án...</div>;
    }

    return (
        <div className="deletePost">
            <form>
                <label>
                    <p>{post.ten_du_an}</p>
                    Tiêu Đề:
                    <input type="text" name="tieu_de" value={post.tieu_de} />
                </label>
                <img src={post.img} alt="" />
                <label>
                    Nội Dung:
                    <input type="text" name="nganh_nghe" value={post.noi_dung}  />
                </label>
                <button onClick={handleSubmit} type="submit">Xóa Bài Viết</button>
            </form>
        </div>
    );
}

export default Deletepost;
