const jwt = require ("jsonwebtoken")

function verifyToken(req) {
    const token = req.cookies.token;

    if (!token) {
        throw new Error("Unauthorized");
    }

    return jwt.verify(token, process.env.JWT_SECRET);
}

async function authArtist(req,res,next){
    const token = req.cookies.token;

console.log("TOKEN:", token);
    if(!token){
        return res.status(401).json({message:"unauthorized"})
    }
   try {

    const decoded = verifyToken(req);

    if (decoded.role !== "artist") {
        return res.status(403).json({
            message: "You don't have access",
        });
    }

    req.user = decoded;

    next();

} catch (error) {

    return res.status(401).json({
        message: "Unauthorized",
    });
}
}


async function authUser(req,res,next){

    const token =req.cookies.token;

    if(!token){
        res.status(401).json({message:"unauthorized"})
    }
    try {

    const decoded = verifyToken(req);

    if (decoded.role !== "user") {
        return res.status(403).json({
            message: "You don't have access",
        });
    }

    req.user = decoded;

    next();

} catch (error) {

    return res.status(401).json({
        message: "Unauthorized",
    });
}
}

async function auth(req, res, next) {
    try {
        req.user = verifyToken(req);
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
}

module.exports={authArtist,authUser,auth,};