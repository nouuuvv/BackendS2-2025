const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/Data.json');

//read data dari data.json
const readData = () => {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
};

//menulis data ke data.json
const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

//Get: all data.json
exports.getAllData = (req, res) => {
    const barangs = readData();
    res.json(barangs);
};

//Get: ambil data by id
exports.getDataById = (req, res) => {
    const barangs = readData();
    const barang = barangs.find((b) => b.id === parseInt(req.params.id));
    if(!barang) return res.status(404).json({ mesage: 'Barang not found'});
    res.json(barang);
};

//POST: tambah data ke data.json
exports.tambahData = (req, res) => {
    const barangs = readData();
    const newBarang = { id: barangs.length + 1, ...req.body};
    barangs.push(newBarang);
    writeData(barangs);
    res.status(201).json({ mesage: 'Barang added successfully', data: newBarang});
}

//PUT: ubah data by id
exports.ubahData = (req, res) => {
    let barangs = readData();
    const index = barangs.findIndex((b) => b.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Barang not found'});

    barangs[index] = { ...barangs[index], ...req.body};
    writeData(barangs);
    res.json({ message: 'Barang updated successfully', data: barangs[index]});
};

//DELETE: hapus data by id
exports.hapusData = (req, res) => {
    let barangs = readData();
    const newBarangs = barangs.filter((b) => b.id != parseInt(req.params.id));
    if (barangs.length === newBarangs.length) return res.status(404).json({ message: 'Barang not found'});
    writeData(newBarangs);
    res.json({ message: 'Barang deleted succesfully'});
}


