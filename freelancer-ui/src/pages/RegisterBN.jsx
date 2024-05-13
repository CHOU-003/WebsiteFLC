import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function RegisterBN() {

    const [input, setInput] = useState({
        ten_doanh_nghiep: "",
        email: "",
        linh_vuc_hoat_dong: "",     
        dia_chi: "",
        so_dien_thoai: "",
        mat_khau: "",
        link_website: "",
        logo: "",
    })

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("/Server/accounts/register", input)
            navigate("/login")
        }
        catch (err) {
            setError(err.response.data)
        }
    }

    return ( 
        <div className="auth">
            <h1>ĐĂNG KÝ TÀI KHOẢN DOANH NGHIỆP</h1>
            <form>
                <input required name="ten_doanh_nghiep" type="text" placeholder="Tên doanh nghiệp" onChange={handleChange} />
                <input required name="linh_vuc_hoat_dong" type="text" placeholder="Lĩnh vực hoạt động" onChange={handleChange} />
                <input required name="mat_khau" type="password" placeholder="Mật khẩu" onChange={handleChange} />
                <input required name="email" type="email" placeholder="Email Doanh Nghiệp" onChange={handleChange} />
                <input required name="link_website" type="email" placeholder="Link website" onChange={handleChange} />
                <input required name="so_dien_thoai" type="text" placeholder="Số điện thoại" onChange={handleChange} />
                <input required name="dia_chi" type="text" placeholder="Địa chỉ" onChange={handleChange} />
                <label for="dob">Chọn Logo: <input type="file"  name="logo" onChange={handleChange} /></label>
                <button onClick={handleSubmit} type="submit">
                    Đăng Ký
                </button>
                {error && <p>{error.message}</p>}
                <span >Tài khoản đã được tạo ?<Link to='/logindn' >Đăng Nhập</Link></span>
            </form>
        </div>
     );
}

export default RegisterBN;