import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => { 

    const [input, setInput] = useState({
        ho_ten: "",
        mat_khau: "",
        email: "",
        gioi_tinh: "",
        so_dien_thoai: "",
        ngay_sinh: "",
        dia_chi: "",
        ky_nang: "",
        kinh_nghiem: "",
    })

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("/Server/auth/register", input)
            navigate("/login")
        }
        catch (err) {
            setError(err.response.data)
        }
    }

    return ( 
        <div className="auth">
            <h1>ĐĂNG KÝ TÀI KHOẢN NGƯỜI DÙNG</h1>
            <form>
                <input required type="text" placeholder="Họ và tên" name="ho_ten" onChange={handleChange} />
                <input required type="password" placeholder="Mật khẩu" name="mat_khau" onChange={handleChange} />
                <input required type="email" placeholder="email" name="email" onChange={handleChange} />
                <div className="gender-selection">
                    <label>Giới tính:</label>
                        <div>
                            <input type="radio" id="male" name="gioi_tinh" value="Nam" required onChange={handleChange} />
                            <label htmlFor="male">Nam</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="gioi_tinh" value="Nữ" required onChange={handleChange} />
                            <label htmlFor="female">Nữ</label>
                        </div>
                </div>
                <label>Kỹ Năng: <select name="ky_nang" onChange={handleChange}>
                    <option value="SQL">C#</option>
                    <option value="JAVA">JAVA</option>
                    <option value="REACTJS">REACTJS</option>
                    <option value="ASP.NET">ASP.NET</option>
                    <option value="MongoDB">MongoDB</option>
                    <option value="HTML/CSS">HTML/CSS</option>
                </select></label>
                <input type="number" placeholder="Năm Kinh Nghiệm" name="kinh_nghiem" onChange={handleChange} />
                <input required type="text" placeholder="Số điện thoại" name="so_dien_thoai" onChange={handleChange} />
                <label for="dob">Năm sinh: <input type="date"  placeholder="dd/mm/YYYY" name="ngay_sinh" onChange={handleChange} /></label>
                <input required type="text" placeholder="Địa chỉ" name="dia_chi" onChange={handleChange} /> 
                <button type="submit" onClick={handleSubmit}>
                    Đăng Ký
                </button>
                {error && <p>{error.message}</p>}
                <span >Tài khoản đã được tạo ?<Link to='/login' >Đăng Nhập</Link></span>
            </form>
        </div>
     );
}

export default Register;