// importar express y crear un router
const express = require("express");
const router = express.Router();

// importar controlador de authRoutes
const authController = require("../controllers/authController")

const verifyToken = require("../middleware/verifyToken")

//rutas para al Auth del User
router.post("/login", authController.login)


router.post("/logout", verifyToken, authController.logout)

module.exports = router;