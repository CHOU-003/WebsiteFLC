import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Logindn = () => {

    const [input, setInput] = useState({
        mat_khau: "",
        email: "",
    })

    const [error, setError] = useState(null)

    const navigate = useNavigate()


    const handleChange = (e) => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const login = async (input) => {
        try {
          const res = await axios.post("/Server/accounts/login", input);
          if (res.data) {
            return res; // Trả về đối tượng phản hồi
          }
        } catch (error) {
          console.error("Lỗi đăng nhập:", error);
          return { status: 500, data: { message: 'Lỗi khi đăng nhập' } }; // Trả về đối tượng phản hồi với thông báo lỗi
        }
    }

        const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await login(input);
            if (response.status === 200) {
                navigate("/");
            } else {
                setError(response.data);
            }
        };
        
    
    

    return ( 
        <div className="auth">
            <h1>ĐĂNG NHẬP TÀI KHOẢN DOANH NGHIỆP</h1>
            <form>
                <input type="text" placeholder="Nhập Email" name="email" onChange={handleChange} />
                <input type="password" placeholder="Mật khẩu" name="mat_khau" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>
                    Đăng Nhập
                </button>
                {error && <p>{error.message}</p>}
                <span >Chưa đăng ký ?<Link to='/registerbn' >Tạo tài khoản</Link></span>
            </form>
        </div>
     );
}

export default Logindn;