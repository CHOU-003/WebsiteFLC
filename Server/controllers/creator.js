import TacphamModel from "../Models/tacpham.js";

export const renderCreator = async (rep, res) => {
    const creator = await TacphamModel.find({});
        res.json({
            code: 200,
            message: "Get thanh cong!",
            creator: creator
        });
}

export const deleteCreator = async (req, res) => {
    try {
        const _id = req.params._id;
        await TacphamModel.deleteOne({ _id: _id})
    return res.status(200).send({message: "delete success"})
    } catch (err) {
        return res.status(400).send(err);
    }
}

export const detailCreator = async (req, res) => {
const _id = req.params._id;

    try {
        const creator = await TacphamModel.findOne({ _id: _id });
        if (!creator) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.status(200).json(creator);
    } catch (err) {
        return res.status(500).send(err);
    }
}

export const editCreator = async (req, res) => {
    try {
        const _id = req.params._id;
    
        await TacphamModel.updateOne({ _id: _id}, req.body);
    
        return res.status(200).json({message: "Edit successfully"})
        } catch (error) {
            return res.status(500).send(err);
    }
}
