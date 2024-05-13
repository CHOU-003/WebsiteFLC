import mongoose from 'mongoose';

const TacphamSchema = new mongoose.Schema(
    {
    loai_tac_pham: String,
    ten_tac_pham: String,
    mo_ta_tac_pham: String,
    img: String,
    gia: Number,
    id_nguoi_sang_tao: String,
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date,
},
    { timestamps: true }
);

const TacphamModel = new mongoose.model("Tacpham", TacphamSchema, "tacpham");

export default TacphamModel;