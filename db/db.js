// importamos Mongoose paar crear la conexion a la bd de mongoDB
const mongoose = require("mongoose")

// conectamos la bd utilizando el metodo connect() de mongoose
const mongoURL= "mongodb+srv://libedol22:LBbWhMNREq1qCKzl@cluster0.wtmxbjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/proyect1"

// funcion para conectarnos a la BD
function connectDB(){
    return new Promise((res, rej) =>{
        //conectar a la base de datos usando la URL proporcionada
        mongoose.connect(mongoURL)
        .then(() => {
            console.log("Conexion a la BD establecida correctamente");
            //si la conexion es exitosa resolvemos la promesa
            res();
        })
        .catch((err) => {
            //si hay un error al conectar, imprimir el error y rechazar la promesa
            console.error("error al conectar a la BD", err);
            rej(err);
        });
    })
}



module.exports = connectDB;