const express = require("express");
const {
  crearDirector,
  editarDirector,
  eliminarDirector,
  obtenerDirector,
} = require("../controllers/directorController");
const router = express.Router();

router.get("/", obtenerDirector);
router.post("/", crearDirector);
router.put("/:id", editarDirector);
router.delete("/:id", eliminarDirector);

module.exports = router;
