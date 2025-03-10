const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Ini Get data!");
});

app.post("/tambah-data", (req, res) => {
    res.send("Ini halaman Tambah data!");
});

app.put("/edit-data", (req, res) => {
    res.send("ini halaman edit data!");
});

app.delete("/hapus-data", (req, res) => {
    res.send("ini hapus data");
});

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
});
