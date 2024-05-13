import paymentModel from "../Models/donhang.js";
import NguoilaodongModel from "../Models/nguoilaodong.js";
import TacphamModel from "../Models/tacpham.js";

export const payment = async (req, res) => {
    try {
    let obj ={};
    const token = req.cookies.tokenUser;
    const idsanpham = req.params._id;

    const user = await NguoilaodongModel.findOne({
        token: token
    })
    const userId = user.id;
    const thanhtoan = req.body.phuong_thuc_thanh_toan;
    obj.id_nguoi_mua = userId;
    obj.id_san_pham = idsanpham;
    obj.phuong_thuc_thanh_toan = thanhtoan;
    
    const pay = new paymentModel(obj);
    await pay.save();

    await TacphamModel.deleteOne({ _id: idsanpham})

    return res.status(200).send({message: " success"})
} catch (err) {
    return res.status(400).send(err);
}

}