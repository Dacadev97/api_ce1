const express = require("express");
const {
  crearTipo,
  editarTipo,
  eliminarTipo,
  obtenerTipo,
} = require("../controllers/tipoController");
const router = express.Router();

router.get("/", obtenerTipo);
router.post("/", crearTipo);
router.put("/:id", editarTipo);
router.delete("/:id", eliminarTipo);

module.exports = router;
