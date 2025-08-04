const Client=require('../models/Client');
const { validationResult } = require('express-validator');

//Create Client
exports.createClient=async (req,res)=> {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    try{
        const client=await Client.create({...req.body,user:req.user.id});
        res.status(201).json(client);
    }
     catch (err) {
    res.status(500).json({ message: 'Error creating client' });
  }
};

// 🔹 Get All Clients (for logged-in user)

exports.getClients=async (req,res)=>{
    try{
        const client=await Client.find({user:req.user.id});
        res.json(client);
    }
    catch (err) {
    res.status(500).json({ message: 'Error fetching clients' });
  }
};

//Update Client

exports.updateClient=async(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    try{
        const client=await Client.findOneAndUpdate(
            {_id:req.params.id,user:req.user.id},
            req.body,
            {new:true}
        );
        if (!client) return res.status(404).json({ message: 'Client not found' });
         res.json(client);
    }
    catch (err) {
    res.status(500).json({ message: 'Error updating client' });
  }
};

//Delete Client

exports.deleteClient=async(req,res)=>{
    try{
        const deleted=await Client.findOneAndDelete({_id:req.params.id,user:req.user.id});
         if (!deleted) return res.status(404).json({ message: 'Client not found' });
         res.json({ message: 'Client deleted' });
    }
    catch (err) {
    res.status(500).json({ message: 'Error deleting client' });
  }
};