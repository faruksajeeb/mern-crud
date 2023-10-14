const WorkModel = require("../models/WorkModel");

// Create
exports.CreateWork = async (req, res) => {
    try {
        let reqBody = req.body;
        let result = await WorkModel.create(reqBody);
        res.status(200).json({ status: "success", data: result })
    } catch (e) {
        res.status(200).json({ status: "fail", data: e.toString() })
    }
}

// Read
exports.ReadWork = async (req, res) => {
    try {
        let result = await WorkModel.find();
        res.status(200).json({ status: "success", data: result })
    }
    catch (e) {
        res.status(200).json({ status: "fail", data: e.toString() })
    }
}

//Read By ID
exports.ReadWorkByID = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await WorkModel.find({ _id: id });
        res.status(200).json({ status: "success", data: result })

    } catch (err) {
        res.status(200).json({ status: "fail", data: err.toString() })
    }
}

// Update
exports.UpdateWork=async (req,res)=>{
    try {
        let id= req.params.id;
        let reqBody=req.body;
        let result=await WorkModel.updateOne({_id:id},reqBody)
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}

// Delete
exports.DeleteWork = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await WorkModel.remove({ _id: id })
        res.status(200).json({ status: "success", data: result })
    }
    catch (e) {
        res.status(200).json({ status: "fail", data: e.toString() })
    }
}



