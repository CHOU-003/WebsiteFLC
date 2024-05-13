import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {

    const [input, setInput] = useState({
        mat_khau: "",
        email: "",
    })

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const {  login } = useContext(AuthContext)

    const handleChange = (e) => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await login(input)
        if (response.status === 200) {
            navigate("/")
        } else {
            setError(response.data)
        }
    }
    
    

    return ( 
        <div className="auth">
            <h1>ĐĂNG NHẬP</h1>
            <form>
                <input type="text" placeholder="Nhập Email" name="email" onChange={handleChange} />
                <input type="password" placeholder="Mật khẩu" name="mat_khau" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>
                    Đăng Nhập
                </button>
                {error && <p>{error.message}</p>}
                <span >Chưa đăng ký ?<Link to='/register' >Tạo tài khoản</Link></span>
            </form>
        </div>
     );
}

export default Login;