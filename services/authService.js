const jwt = require ("jsonwebtoken");

// almacenar la clave secreta

const JWR_SECRET= 
"25fcba18398fe8d9360e6e805f74e7a16cc0eed2b7d531bbfcdf8c9a1b0dede1";

// creamos una funcion para generar un token JWT

function generateToken(user){
    const payload = {
        userId: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, JWR_SECRET, { expiresIn: "1h" });
    return token
}

module.exports= {generateToken}