// importar express y las rutas de usuario y la conexion a la db
const express = require("express")
const connectDB = require("./db/db")


// creamos una instancia de expres

//importar las rutas
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")
const sessionRoutes = require("./routes/sessionRoutes")

const app = express()
const PORT = 3000

//Middleware
app.use(express.json()) //invocamos al middleware parsee los datos del body de las solicitudes en formato json

//Rutas de autenticacion
app.use("/api/auth", authRoutes)

//Rutas de usuarios
app.use("/api/users", userRoutes) //creamos las rutas de usuario en la ruta /api/users

//Rutas de usuario actual}
app.use("/api/session", sessionRoutes)

//iniciamos la db
connectDB()

//inicializamos el servidor y lo ponemos en escucha en el puerto que pusimos arriba

app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto"+PORT)
})

module.exports = app;