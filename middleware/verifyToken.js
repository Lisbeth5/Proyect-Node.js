const jwt = require("jsonwebtoken");

function verifyToken(req, res, next){
    return new Promise ((resolve, reject)=>{
        const token = req.headers.authorization;
        if(!token){
            reject({
                status:401,
                message: "Token de autenticacion no proporcionada"
            });
        }

    jwt.verify(
        (token.split(" ")[1]),
        "25fcba18398fe8d9360e6e805f74e7a16cc0eed2b7d531bbfcdf8c9a1b0dede1",
        (error, decodedToken)=>{
            if(error){
                reject({status:401,message:"Token de autenticacion no valido"});
            } else{
                req.userId = decodedToken.userId //agregamos el ID de usuario decodificado para su posterior uso
                resolve()
            }
        }
    ); 
    })
    .then(() => next()) //continua el seguimiento del siguiente middleware o controllador
    .catch((error) =>
        res.status(error.status || 500).json({message: error.message})
    );
}

module.exports = verifyToken