const express= require("express");
const app = express();
const port = 3000;
const users = require("./route/users");
const mapel = require("./route/mapel");
const siswa = require("./route/siswa");
const guru = require("./route/guru");
const kelas = require("./route/kelas");
const jadwal = require("./route/jadwal");
const nilai = require("./route/nilai");
const presensi = require("./route/presensi");


app.use("/users", users);
app.use("/mapel", mapel);
app.use("/siswa", siswa);
app.use("/guru", guru);
app.use("/kelas", kelas);
app.use("/jadwal", jadwal);
app.use("/nilai", nilai);
app.use("/presensi", presensi);



app.listen(port, ()=> {
    console.log(`Aplikasi berjalan di ${port}`);
});