const express = require("express");
const {
  crearMedia,
  obtenerMedias,
  obtenerMediaPorId,
  actualizarMedia,
  eliminarMedia,
} = require("../controllers/mediaController");

const router = express.Router();

router.post("/media", crearMedia);
router.get("/media", obtenerMedias);
router.get("/media/:id", obtenerMediaPorId);
router.put("/media/:id", actualizarMedia);
router.delete("/media/:id", eliminarMedia);

module.exports = router;
