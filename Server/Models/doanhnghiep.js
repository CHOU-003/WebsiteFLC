import mongoose from 'mongoose';

const DoanhnghiepSchema = new mongoose.Schema(
    {
        ten_doanh_nghiep: String,
        email: String,
        token: String,
        linh_vuc_hoat_dong: String,     
        dia_chi: String,
        so_dien_thoai: String,
        mat_khau: String,
        link_website: String,
        logo: String,
    }
);

const DoanhnghiepModel = new mongoose.model("Doanhnghiep", DoanhnghiepSchema, "doanhnghiep");

export default DoanhnghiepModel;