const express = require("express");
const MahasiswaController = require("../controllers/MahasiswaController");

const router = express.Router();

// Route to get all mahasiswa
router.get("/", MahasiswaController.getAllMahasiswa);

// Route to get a single mahasiswa by ID
router.get("/:id", MahasiswaController.getMahasiswaById);

// Route to create a new mahasiswa
router.post("/", MahasiswaController.createMahasiswa);

// Route to update an existing mahasiswa by ID
router.put("/:id", MahasiswaController.updateMahasiswa);

// Route to delete a mahasiswa by ID
router.delete("/:id", MahasiswaController.deleteMahasiswa);

module.exports = router;
