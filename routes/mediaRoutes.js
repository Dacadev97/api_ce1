const express = require("express");
const {
  crearMedia,
  obtenerMedias,
  obtenerMediaPorId,
  actualizarMedia,
  eliminarMedia,
} = require("../controllers/mediaController");

const router = express.Router();

router.post("/", crearMedia);
router.get("/", obtenerMedias);
router.get("/:id", obtenerMediaPorId);
router.put("/:id", actualizarMedia);
router.delete("/:id", eliminarMedia);

module.exports = router;
