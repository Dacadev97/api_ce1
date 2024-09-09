const express = require("express");
const {
  crearProductora,
  editarProductora,
  eliminarProductora,
  obtenerProductora,
} = require("../controllers/productoraController");
const router = express.Router();

router.get("/", obtenerProductora);
router.post("/", crearProductora);
router.put("/:id", editarProductora);
router.delete("/:id", eliminarProductora);

module.exports = router;
