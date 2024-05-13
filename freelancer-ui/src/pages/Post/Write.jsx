import React from "react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'react-quill/dist/quill.snow.css';
import { htmlToText } from 'html-to-text';

function Write() {
    const [value, setValue] = useState('');

    const [input, setInput] = useState({
        tieu_de: "",
        img: "",
        noi_dung: "",
        loai_bai_viet: "",
        id_nguoi_tao: "",
    })


    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("/Server/posts/addpost", input)
            navigate("/post/:id")
        }
        catch (err) {
            setError(err.response.data)
        }
    }

    return ( 
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Title" name="tieu_de" onChange={handleChange} />
                <div className="editorContainer" onChange={handleChange}>
                    <ReactQuill className="editor" 
                    theme="snow"  
                    value={value} 
                    onChange={(content) => {
                        const text = htmlToText(content, {
                            wordwrap: false,
                            ignoreHref: true,
                            ignoreImage: true,
                        });
                        setValue(content);
                        setInput(prev => ({...prev, noi_dung: text}));
                    }}  />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Đăng Bài</h1>
                    <span>
                        <b>Trạng Thái: </b> Bản Nháp
                    </span>
                    <span>
                        <b>Trạng Thái Hiển Thị: </b> Công Khai
                    </span>
                    <input name="img" onChange={handleChange} style={{display: "none"}} type="file" id="file" />
                    <label className="file" htmlFor="file">Thêm ảnh</label>
                    <div className="buttons">
                        <button>Lưu bản nháp</button>
                        <button onClick={handleSubmit}  type="submit">Cập nhật</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Danh Mục</h1>
                    <div className="cat">
                        <label>Loại Bài Viết: <select name="loai_bai_viet" onChange={handleChange}>
                        <option value="Hướng Dẫn">Hướng Dẫn</option>
                        <option value="Tin Tức">Tin Tức</option>
                        <option value="Đánh Gía">Đánh Gía</option>
                    </select></label>
                    </div>
                </div>
            </div>
            {error && <p>{error.message}</p>}
        </div>
    );
}

export default Write;