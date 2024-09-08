const express = require("express");
const {
  crearGenero,
  editarGenero,
  eliminarGenero,
  obtenerGeneros,
} = require("../controllers/generoController");
const router = express.Router();

router.get("/", obtenerGeneros);
router.post("/", crearGenero);
router.put("/:id", editarGenero);
router.delete("/:id", eliminarGenero);

module.exports = router;
