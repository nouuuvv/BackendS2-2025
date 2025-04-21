const db = require("../configs/db.js");

// ammbil data mahasiswa
exports.getAllMahasiswa = (req, res) => {
  db.query("SELECT * FROM mahasiswa", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// ambil data mahasiswa berdasarkan id
exports.getMahasiswaById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM mahasiswa WHERE id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
};

// Tambah data mahasiswa
exports.createMahasiswa = (req, res) => {
  const { nama, nim, jurusan } = req.body;
  db.query(
    "INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?, ?, ?)",
    [nama, nim, jurusan],
    (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, nama, nim, jurusan });
    }
  );
};

// Update data mahasiswa
exports.updateMahasiswa = (req, res) => {
  const id = req.params.id;
  const { nama, nim, jurusan } = req.body;
  db.query(
    "UPDATE mahasiswa SET nama = ?, nim = ?, jurusan = ? WHERE id = ?",
    [nama, nim, jurusan, idd],
    (err, results) => {
      if (err) throw err;
      res.json({ id, nama, nim, jurusan });
    }
  );
};

// Hapus data mahasiswa
exports.deleteMahasiswa = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM mahasiswa WHERE id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json({ message: "Mahasiswa deleted successfully" });
  });
};
