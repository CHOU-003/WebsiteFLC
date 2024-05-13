import BaivietModel from "../Models/baiviet.js";
import NguoilaodongModel from "../Models/nguoilaodong.js";
import DoanhnghiepModel from "../Models/doanhnghiep.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
    let query = {};
    if (req.query.cat) {
        query.cat = req.query.cat;
    }

    try {
        const data = await BaivietModel.find(query);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).send(err);
    }
}

export const managerPost = async (req, res) => {

    let account = "";
    let user = "";
    if(req.cookies.tokenAcc){
        const token = req.cookies.tokenAcc;
    
     account = await DoanhnghiepModel.findOne({
        token: token
    });
    }
    if(req.cookies.tokenUser){
        const token = req.cookies.tokenUser;
    
     user = await NguoilaodongModel.findOne({
        token: token
    });
    }


    const id = "";
    if(account ?  id == account.id : id == user.id ){

    }
    //find

    const find = {
        id_nguoi_tao: id
    };
    
    const tasks = await BaivietModel.find(find);
    res.json(tasks);
}



export const getPost = async (req, res) => {
    const id = req.params.id;

    
    try {
        const post = await BaivietModel.findOne({ _id: id });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.status(200).json(post);
    } catch (err) {
        return res.status(500).send(err);
    }
};

  


export const addPost = async (req, res) => {
    try {

        if(req.cookies.tokenAcc) {
            const user = await NguoilaodongModel.findOne({
                token: req.cookies.tokenUser
            })

            req.body.id_nguoi_tao = user.id;
        }
        const post = new BaivietModel(req.body);
        await post.save();

        res.json({
            code: 200,
            message: "success"
        })
    } catch {
        res.json({
            code: 400,
            message: "Error"
        })
  }
}

export const updatePost = (req, res) => {
    res.json("from post controller");
}

export const deletePost = async (req, res) => {
    try {
        const _id = req.params._id;
        await BaivietModel.deleteOne({ _id: _id})
    return res.status(200).send({message: "delete success"})
    } catch (err) {
        return res.status(400).send(err);
    }
}
