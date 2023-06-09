const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsMiddleware = require("./dogs")
const temperamentsMiddleware = require("./temperaments")
const usersMiddleware = require("./users")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogsMiddleware)
router.use("/temperaments", temperamentsMiddleware)
router.use("/users", usersMiddleware)

module.exports = router;
