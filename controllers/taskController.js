const Task =require("../models/Task");
const{validationResult}=require('express-validator');


//create task

exports.createTask=async(req,res)=>{
    const error=validationResult(req);
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });


    try{
        const task=await Task.create({
            ...req.body,
            createdBy:req.user.id,
        });
        res.status(201).json(task);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Error creating task' });
    }

};


//get task by project

exports.getTasksByProjects=async(req,res)=>{
    try{
        const task=await Task.find({
            projectId:req.params.projectId,
            createdBy:req.user.id,
        });
        res.json(task);
    }
    catch(err){
        console.error(err)
        res.status(500).json({ message: 'Error fetching tasks' });   
    }
};


//Update task
exports.updateTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndUpdate(
            {_id:req.params.id,createdBy:req.user.id},
            req.body,
            { new: true, runValidators: true }
        );
        if (!task) return res.status(404).json({ message: 'Task not found or unauthorized' });
        res.json(task);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Error updating task' });
    }
};

//Delete task
exports.deleteTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndDelete({
            _id: req.params.id,
             createdBy: req.user.id,
        });
        res.json({ message: 'Task deleted' });
    }
    catch (err) {
    res.status(500).json({ message: 'Error deleting task' });
  }
};
