import React from "react";
import { Link  } from "react-router-dom";

const Allauth = () => {
    

    return ( 
        <div className="auth">
            <h1>LỰA CHỌN PHƯƠNG THỨC ĐĂNG NHẬP</h1>
            <form>
                <Link to={"/login"}>
                    <button type="submit">
                        Đăng Nhập Người Dùng
                    </button>
                </Link> 
                <Link to='/logindn' >
                    <button type="submit">
                        Đăng Nhập Doanh Nghiệp
                    </button>
                </Link>
            </form>
        </div>
     );
}

export default Allauth;