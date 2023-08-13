const User = require('../model/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const getUser = async(req,res) => {
    res.status(200).json(req.user);
}

// Register a USer
const createUser = async(req,res) => {
    const {name,email,password} = req.body

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //Create User
    const result = await User.create({name,email,password:hashedPassword});
    if(result){
        res.status(201).json({_id:result.id,
        name:result.name,
        email:result.email,
        token: generateToken(result._id)
})
    }
    
}

// Login a User
const loginUser = async(req,res) => {
    const {email,password} = req.body;
    
    const user = await User.findOne({ email })
    //get the user
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        })
      } else {
        res.status(400)
        throw new Error('Invalid credentials')
      }
}

//Generate JWT token
const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}

const updateUser = async(req,res) => {
    const result  = await User.findOneAndUpdate(req.params.id,req.body);
    res.status(200).json({result})
}

const deleteUser = async(req,res) => {
    const result = await User.find(req.params.id);
    result.deleteOne();
    res.status(200).json("Deletion Successsfull")
}

const SearchUser = async(req,res) => {
    const result = await User.findById(req.params.id);
    res.status(200).json({result})
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    SearchUser,
    loginUser
}