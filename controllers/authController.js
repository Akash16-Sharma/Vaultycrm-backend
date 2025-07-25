const User=require('../models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

exports.register=async(req,res)=>{
    const{name,email,password,role}=req.body;

    try
    {
        const exsisting=await User.findOne({email});
        if(exsisting) return res.status(400).json({message: 'User already exists'});

        const hashed=await bcrypt.hash(password,10);
        const user=await User.create({name,email,password:hashed,role});

        const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn: '1d'});
        res.status(201).json({token});
    }
    catch(err)
    {
        res.status(500).json({ message: 'Register error' });
    }
};


exports.login=async(req,res)=>{

        const{email,password}=req.body;

        try
        {
            const user=await User.findOne({email});
             if (!user) return res.status(400).json({ message: 'Invalid credentials' });

             const isMatch = await bcrypt.compare(password, user.password);
             if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
             res.json({ token });
        } 
    catch (err) 
    {
    res.status(500).json({ message: 'Login error' });
    }
        
};