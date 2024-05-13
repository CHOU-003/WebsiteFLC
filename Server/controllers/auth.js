import { response } from "express";
import NguoilaodongModel from "../Models/nguoilaodong.js"
import jwt from "jsonwebtoken"
import Generate from "../helpers/generate.js"

export const register = async (req, res) => {
  const emailExist = await NguoilaodongModel.findOne({email: req.body.email});
  if(emailExist) {
    res.status(500).json({ message: 'Tài khoản đã tồn tại!' });
  } else {
    req.body.token=  Generate(30)
    const records = new NguoilaodongModel(req.body);
    await records.save();

    const token = records.token;
    return res.status(200).json("User has been created.");
  }
}


export const login = async (req, res) => {
  try {
    const { email, mat_khau } = req.body;
    const nguoilaodong = await NguoilaodongModel.findOne({ email });

    // Kiểm tra email và mật khẩu
    if (!nguoilaodong || nguoilaodong.mat_khau !== mat_khau) {
      return res.status(401).json({ message: 'Sai email hoặc mật khẩu' });
    }

    const tokenUser = nguoilaodong.token;
    res.cookie("tokenUser", tokenUser);

    // Tạo token dựa trên id của người lao động
    const token = jwt.sign({ id: nguoilaodong._id }, "jwtkey", {
      expiresIn: '1h' // Token hết hạn sau 1 giờ
    });

    // Gửi token trong cookie và phản hồi thành công
    res.cookie("access_token", token, {
      httpOnly: true,
      sameSite: 'strict' // Cài đặt này giúp tăng cường bảo mật
    }).status(200).json({ message: 'Đăng nhập thành công!', user: nguoilaodong });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Lỗi khi đăng nhập' });
  }
};
  

export const  logout = (req, res) => {
      res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
      }).status(200).json("Đăng xuất thành công");
}