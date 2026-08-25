
const userModel = require('../models/user.model');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function registerUser(req,res){

    const{username,email,password,role="user"} = req.body;

    const isUserAlreadyExists = await userModel.findOne({

        $or:[
        {username},
        {email}
        ]
    })
    if(isUserAlreadyExists){
        return res.status(409).json({message:"User already exists"})
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password : hash,
        role
    })

    const token =jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)


     /*storing token in cookie*/
     
    res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
});

console.log("Cookie sent");

    res.status(201).json({
        message:"User registered successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role

        }
    })


}

async function loginUser(req,res){

    const {username,email,password}=req.body;

    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(!user){
    return res.status(401).json({
        message:"invalid credentials"
    })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password) /*checks and compare password from database*/

    if(!isPasswordValid){
        return res.status(401).json({
            message:"invalid credentials"
        })
    }
const token = jwt.sign({
    id:user._id,
    role:user.role,
},process.env.JWT_SECRET)

res.cookie("token",token)

res.status(200).json({
    message:"Logged in Successfully",
    user:{
        id:user._id,
        username:user.username,
        email:user.email,
        role:user.role,

    }
})
}
async function changePassword(req, res) {

    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
    return res.status(400).json({
        message: "Current password and new password are required",
    });
}

    const user = await userModel.findById(req.user.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }
    const isPasswordValid = await bcrypt.compare(
    currentPassword,
    user.password
);

if (!isPasswordValid) {
    return res.status(401).json({
        message: "Current password is incorrect",
    });
}
if (currentPassword === newPassword) {
    return res.status(400).json({
        message: "New password must be different from the current password",
    });
}
const hashedPassword = await bcrypt.hash(newPassword, 10);

user.password = hashedPassword;

await user.save();
res.clearCookie("token");

return res.status(200).json({
    message: "Password changed successfully. Please login again.",
});
}



module.exports={registerUser,loginUser, changePassword}