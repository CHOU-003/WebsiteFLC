import React from "react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { htmlToText } from 'html-to-text';

function Addjob() {
    const [value, setValue] = useState('');

    const [input, setInput] = useState({
        ten_du_an: "",
        mo_ta_du_an: "",
        nganh_nghe: "",
        so_luong: "",
        ky_nang_can_thiet: "",
        muc_luong: "",
        thoi_han_du_an: "",
        han_chot_nop_ho_so: "",
        id_nha_tuyen_dung: "",
    })

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("/Server/job/create", input)
            navigate("/findjob")
            
        }
        catch (err) {
            setError(err.response.data)
        }
    }

    return ( 
        <div className="addJob">
            <h1>Đăng Dự Án Của Bạn</h1>
            <div className="add-job">
            <div className="content">
                <input type="text" name="ten_du_an" placeholder="Tên Dự Án" onChange={handleChange} />
                <input type="text" name="nganh_nghe" placeholder="Thuộc Nhóm Nghành" onChange={handleChange} />
                <input type="text" name="ky_nang_can_thiet" placeholder="Kỹ Năng Cần THiết" onChange={handleChange} />
                <input type="number" name="so_luong" placeholder="Số Lượng Lao Động" onChange={handleChange} />
                <input type="date" name="thoi_han_du_an" placeholder="Thời Hạn Dự Án" onChange={handleChange} />
                <input type="date" name="han_chot_nop_ho_so" placeholder="Hạn Chót Nộp Hồ Sơ" onChange={handleChange} />
                <input type="number" name="muc_luong" placeholder="Mức Lương" onChange={handleChange} />
                <div onChange={handleChange} className="editorContainer">
                <ReactQuill 
                    className="editor" 
                    theme="snow"  
                    value={value} 
                    onChange={(content) => {
                        const text = htmlToText(content, {
                            wordwrap: false,
                            ignoreHref: true,
                            ignoreImage: true,
                        });
                        setValue(content);
                        setInput(prev => ({...prev, mo_ta_du_an: text}));
                    }} 
                />
                </div>
                <button className="btn" onClick={handleSubmit} type="submit">
                    ĐĂNG DỰ ÁN
                </button>
                {error && <p>{error.message}</p>}
            </div>
            
            </div>
        </div>   
    );
}

export default Addjob;