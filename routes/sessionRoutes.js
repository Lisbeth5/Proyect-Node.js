// importar express y crear router

const express = require("express");
const router = express.Router();

// importa controlador de sessionRouter
const sessionController = require("../controllers/sessionController")
const verifyToken = require("../middleware/verifyToken")

// ruta protegida para obtener informacion sobre el usuario que inicio sesion
router.get("/currentUser", verifyToken, sessionController.getCurrentUser);

module.exports = router;
