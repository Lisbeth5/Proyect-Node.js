// importamos Mongoose para definir y tener el esquema de usuario y el modelo
const mongoose = require("mongoose")
const bcryptService = require("../services/bcryptService")

//definir el esquema de usuario utilizando el cosntructor de Mongoose llamado Schema

const userSchema =  new mongoose.Schema({
    nombre: {type: String, required: true}, //nombre obligarorio
    edad: {type: Number, require: true},
    email: {type: String, required:true, unique:true}, // correo unico
    contraseña: {type: String, required: true}
})

// antes de guaradar un nuevo usuario vamos a hashear la contraseña
userSchema.pre("save", function(next){
    if(!this.isModified("contraseña")){
        return next()
    }
    bcryptService.hashPassword(this.contraseña)
    .then(hashedPassword=>{
        this.contraseña = hashedPassword;
        next()
    })
    .catch(error=>{
        console.error(error);
        next(error)
    })
})


//crear modelo user utilizando el esquema

const User= mongoose.model("User", userSchema)

//exportar modelo para utilizarlo en otra parte
module.exports= User;