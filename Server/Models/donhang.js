import mongoose from 'mongoose';

const donHangSchema = new mongoose.Schema({
        id_nguoi_mua: String,
        id_san_pham: String,
        phuong_thuc_thanh_toan: String,
    },
    { timestamps: true }

);
        


const donHangModel = new mongoose.model("donHangModel", donHangSchema, "donhang");

export default donHangModel;