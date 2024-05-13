import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Hàm đăng nhập
const login = async (input) => {
  try {
    const res = await axios.post("/Server/auth/login", input);
    if (res.data) {
      setCurrentUser(res.data.user); // Đảm bảo rằng bạn đang cập nhật với đối tượng người dùng
      return res; // Trả về đối tượng phản hồi
    }
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    return { status: 500, data: { message: 'Lỗi khi đăng nhập' } }; // Trả về đối tượng phản hồi với thông báo lỗi
  }
};


  // Hàm đăng xuất
  const logout = async () => {
    try {
      await axios.post("/Server/auth/logout");
      setCurrentUser(null);
      localStorage.removeItem("user"); // Xóa người dùng khỏi localStorage khi đăng xuất
    } catch (error) {
      console.error("Lỗi đăng xuất:", error);
    }
  };

  // Cập nhật localStorage khi currentUser thay đổi
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // Đặt currentUser dựa trên localStorage khi component được mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
