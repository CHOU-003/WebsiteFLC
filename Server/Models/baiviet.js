import mongoose from 'mongoose';

const BaivietSchema = new mongoose.Schema({
        tieu_de: String,
        img: String,
        noi_dung: String,
        loai_bai_viet: String,
        id_nguoi_tao: String,
        deleted: {
                type: Boolean,
                default: false,
            },
            deletedAt: Date,
        }, { 
                timestamps: true 
});
        


const BaivietModel = new mongoose.model("Baiviet", BaivietSchema, "baiviets");

export default BaivietModel;