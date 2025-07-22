const Project=require('../models/Project');
const slugify=require('slugify');
const{validatioRequest}=require('express-validator');

exports.createProject=async(req,res)=>{
    const errors = validationResult(req);
     if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    try{
        const slug = slugify(req.body.title, { lower: true, strict: true });
        const project=await Project.create({...req.body,slug,createdBy:req.user.id});
        res.status(201).json(project);
    }
     catch (err) {
    res.status(500).json({ message: 'Error creating project' });
    }
};

exports.getProjects=async(req,res)=>{

    try{
        const project=await Project.find({createdBy:req.user.id});
        res.json(project);
    }
    catch (err) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
};

exports.updateProject=async(req,res)=>{
    try{
         const { id } = req.params;

    const updates = { ...req.body };

    // If title is being updated, regenerate slug
    if (updates.title) {
      updates.slug = slugify(updates.title, { lower: true, strict: true });
    }

    const project = await Project.findOneAndUpdate(
      { _id: id, createdBy: req.user.id },
      updates,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found or unauthorized' });
    }

    res.json(project);
    }
    catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating project' });
  }
};

exports.deleteProject=async(req,res)=>{
    try{
        await Project.findOneAndDelete({_id:req.params.id,createdBy:req.user.id});
        res.json({message:"Project Deleted"});
    }
    catch (err) {
    res.status(500).json({ message: 'Error deleting project' });
  }
};