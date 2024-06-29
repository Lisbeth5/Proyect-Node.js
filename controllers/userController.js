// importar modelo de Mongo
const User = require("../models/User")
const bcryptService = require("../services/bcryptService")

//funcion que obtiene todos los datos de usuario

function getAllUsers(req,res){
    //metodo find() de Mongoose para encontrar todos los usuarios
    User.find()
    .then(users => res.status(200).json(users))
    .catch(err=>{
        console.error(err)
        res.status(500).send("Error al obtener usuarios")
    })
}

//crear usaurio 
function createUser(req,res){
    //extraer toda la informacion del cuerpo d ela solicitud
    const {nombre,edad,email,contraseña} = req.body

    //crear un usuario nuevo con el metodo create() de moongose
    User.create({nombre, edad, email,contraseña})
    .then(newUser => res.status(201).json(newUser))
    .catch(err=>{
        console.error(err);
        res.status(500).send("Error al crear usuario");
    })
}

//actualizar usuario
function updateUser(req,res){
    const userId = req.params.id
    const updateUser = req.body
    User.findByIdAndUpdate(userId, updateUser, {new:true}) 
    .then(user=>res.status(200).json(user))
    .catch(err=>{
        console.error(err)
        res.status(500).send("Error al actualizar usuario");
    });
}

//eliminar usuario
function deleteUser(req,res){
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
    .then(()=> res.status(200).send("Usuario eliminado correctamente")) // Envaimos una confirmacoin al cliente de que el usuario se elimino correctamente
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error al eliminar el usuario"); // En caso de tener error que envie un mensaje al cliente.
    });
    
}

module.exports= {createUser, deleteUser, getAllUsers, updateUser}