import mongoose from 'mongoose';

const NguoilaodongSchema = new mongoose.Schema({
        ho_ten: String,
        mat_khau: String,
        email: String,
        token: String,
        gioi_tinh: String,
        so_dien_thoai: String,
        ngay_sinh: Date,
        dia_chi: String,
        ky_nang: String,
        kinh_nghiem: String
});



const NguoilaodongModel = new mongoose.model("Nguoilaodong", NguoilaodongSchema);

export default NguoilaodongModel;