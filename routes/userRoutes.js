// importar  express y crear un router

const express = require("express")
const router = express.Router()

// importar controlador de usuario
const userController = require("../controllers/userController")

//definir rutas para el crud usuarios

router.get("/",userController.getAllUsers)
router.post("/",userController.createUser)
router.put("/:id",userController.updateUser)
router.delete("/:id",userController.deleteUser)

module.exports = router
