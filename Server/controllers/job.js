import DuanModel from "../Models/duan.js";
import NguoilaodongModel from "../Models/nguoilaodong.js";
import DoanhnghiepModel from "../Models/doanhnghiep.js";

// [POST] /admin/projects/create
export const createProject = async (req, res) => {
    try {
        // Xác thực người dùng và lấy thông tin tài khoản
        const account = await NguoilaodongModel.findOne({ token: req.cookies.tokenAcc });
        if (!account) {
            return res.status(401).json({
                code: 401,
                message: "Không tìm thấy tài khoản hoặc token không hợp lệ."
            });
        }

        // Thêm id của nhà tuyển dụng vào body của request
        req.body.id_nha_tuyen_dung = account._id;

        // Tạo một dự án mới với thông tin từ body của request
        const project = new DuanModel(req.body);
        await project.save();

        // Trả về thông báo thành công
        res.status(201).json({
            code: 201,
            message: "Tạo dự án thành công!"
        });
    } catch (error) {
        // Trả về lỗi nếu có
        res.status(500).json({
            code: 500,
            message: "Có lỗi xảy ra khi tạo dự án."
        });
    }
};

export const managerJob = async (req, res) => {
    const token = req.cookies.tokenAcc;
    
    const account = await DoanhnghiepModel.findOne({
        token: token
    });
    const id = account.id;
    //find

    const find = {
        id_nha_tuyen_dung: id
    };
    
    const tasks = await DuanModel.find(find);
    res.json(tasks);
}

export const detailJob = async (req, res) => {
    try {
        const _id = req.params._id;
        const task = await DuanModel.findOne({
            _id: _id,
            deleted: false
        });
        res.json(task);
    } catch (error) {
        res.json("Không tìm thấy!");
    }
}

export const edit = async (req, res) => {
    const id = req.params.id;
    try {
        const duan = await DuanModel.findOne({_id: id});
        if (!duan) {
            return res.status(404).json({ message: "duan not found" });
        }
        return res.status(200).json(duan);
    }catch(err) {
        return res.status(500).send(err);
    }
}

export const editJob = async (req, res) => {
    try {
        const _id = req.params._id;
    
        await DuanModel.updateOne({ _id: _id}, req.body);
    
        res.json({
            code: 200,
            message: "Cập nhật thành công",
        });
        } catch (error) {
        res.json({
            code: 400,
            message: "Lỗi!"
        });
    }
}

export const deleteJob = async (req, res) => {
    try {
        const _id = req.params._id;
        await DuanModel.deleteOne({ _id: _id})
    return res.status(200).send({message: "delete success"})
    } catch (err) {
        return res.status(400).send(err);
    }
}

export const renderJob = async (req, res) => {
    const q = req.query;
    const filters = {
        ...(q.projectId && { _id: q.projectId }),
        ...(q.nganh_nghe && { nganh_nghe: q.nganh_nghe }),
        ...((q.min || q.max) && {
            muc_luong: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) },
        }),
        ...(q.search && {ten_du_an: { $regex: q.search, $options: "i" } }),
    };
    
    const project = await DuanModel.find(filters);
    res.json({
        code: 200,
        message: "Get thanh cong!",
        project: project
    });
}
export const add_ung_tuyen = async (req, res) => {
    try{
    const id = req.params._id;
    const token = req.cookies.tokenUser;
    const user = await NguoilaodongModel.findOne( {token: token})
    await DuanModel.updateOne({ _id: id}, {$push: { id_ung_tuyen: user.id}})

    return res.status(200).send({message: "add success"})
    } catch(err) {
        return res.status(400).send(err);

    }
}
