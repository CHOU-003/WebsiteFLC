import DoanhnghiepModel from "../Models/doanhnghiep.js";
import Generate from "../helpers/generate.js";

export const register = async (req, res) => {
    
    const existEmail = await DoanhnghiepModel.findOne({ email: req.body.email, deleted: false});

    if(existEmail) {
        res.json({
            code: 400,
            message: "Email đã tồn tại!"
        })
    } else {
        
        req.body.token=  Generate(30)
        const account = new DoanhnghiepModel(req.body);
        account.save();
        const token = account.token;


        res.json({
            code: 200,
            message: "Đăng ký thành công!",
            tokenAcc: token
        })
    }
}

// [POST] /api/v1/accounts/login
export const login = async (req,res) => {
    const email = req.body.email;
    const password = req.body.mat_khau;

    const account = await DoanhnghiepModel.findOne({
        email: email
    });
    if(!account) {
        res.json({
            code: 400,
            message: "Email không tồn tại!"
        });
        return;
    }
    if( password !== account.mat_khau) {
        res.json({
            code: 500,
            message: "Sai mật khẩu!"
            
        })
        return;
    }
    const token = account.token;
    res.cookie("tokenAcc", token);

    res.json({
        code: 200,
        message: "Đăng nhập thành công!",
        tokenAcc: token
    })
}

export const  logout = (req, res) => {
    res.clearCookie("access_token", {
      sameSite: "none",
      secure: true
    }).status(200).json("Đăng xuất thành công");
}