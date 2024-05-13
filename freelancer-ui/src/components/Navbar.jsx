import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png"
import { AuthContext } from "../context/authContext";

function Navbar() {
    const {  currentUser, logout } = useContext(AuthContext)

    return ( 
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to={"/"}>
                        <h6>HOME</h6>
                    </Link>
                    <Link className="link" to={"/managerjob"}>
                        <h6>QUẢN LÝ DỰ ÁN CỦA BẠN</h6>
                    </Link>
                    {currentUser ? (
                        <div className="links">
                            <div className="header__navbar-item-user-menu"></div>
                            <Link className="link" to={"/quiz"}>
                                <h6>THỰC HIỆN ĐÁNH GIÁ</h6>
                            </Link>
                            <span>{currentUser?.ho_ten}
                                <div className="dropdown">
                                    <Link className="link" to={"/managerjob"}>
                                        <h5>QUẢN LÝ DỰ ÁN CỦA BẠN</h5>
                                    </Link>
                                    <Link className="link" to={"/mypost"}>
                                        <h5>QUẢN LÝ BÀI VIẾT CỦA BẠN</h5>
                                    </Link>
                                    <Link className="link">
                                        <h5 onClick={logout} >ĐĂNG XUẤT</h5>
                                    </Link>
                                    
                                </div>
                            </span>
                            <span className="write">
                                <Link className="link" to="/write">WRITE</Link>
                            </span>
                        </div>
                    ) : (
                        <>
                            <Link className="link" to={"/registerbn"}>
                                <h6>NĂNG CẤP TÀI KHOẢN DOANH NGHIỆP</h6>
                            </Link>
                            <Link className="link" to={"/register"}>
                                <h6>NĂNG CẤP TÀI KHOẢN FREELANCER</h6>
                            </Link>
                            <Link className="link" to="/allauth">
                                <button className="btn-login">Login</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
     );
}

export default Navbar;
