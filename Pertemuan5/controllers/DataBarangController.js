const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../data/dataBarang.json");

//read data
const readData = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

//fungsi menulis data ke json
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

//GET: mengambil data barang
exports.getAllBarangs = (req, res) => {
  const barangs = readData();
  res.json(barangs);
};

//GET: mengambil by id
exports.getBarangById = (req, res) => {
  const barangs = readData();
  const barang = barangs.find((u) => u.id == req.params.id);
  if (!barang) return res.status(404).json({ message: "barang not found" });
  res.json(barang);
};

//POST: menambah data barangs
exports.createBarang = (req, res) => {
  const barangs = readData();
  const newbarang = { id: barangs.length + 1, ...req.body };
  barangs.push(newbarang);
  writeData(barangs);
  res.status(201).json({ message: "barang created successfully!", newbarang });
};

//PUT: Update data barang
exports.updateBarang = (req, res) => {
  let barangs = readData();
  const index = barangs.findIndex((u) => u.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "barang not found" });

  barangs[index] = { ...barangs[index], ...req.body };
  writeData(barangs);
  res.json({ message: "barang updated successfully!", barang: barangs[index] });
};

//DELETE: hapus data
exports.deleteBarang = (req, res) => {
  let barangs = readData();
  const newbarangs = barangs.filter((u) => u.id != req.params.id);
  if (barangs.length === newbarangs.length)
    return res.status(404).json({ message: "barang not found" });

  writeData(newbarangs);
  res.json({ message: "barang deleted successfully" });
};
