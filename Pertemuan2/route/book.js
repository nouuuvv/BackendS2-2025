const express = require("express");
const router = express.Router();

//routing
router.get('/:id',(req, res)=>{
    res.send(`user id : ${req.params.id}`);
});
router.post('/post',(req, res)=>{
    res.send(`Ini halaman kirim data`);
});
router.put('/edit-data',(req, res)=>{
    res.send("Ini Halaman Edit");
});
router.delete('/hapus-data',(req, res)=>{
    res.send("Ini Halaman Delete");
});

module.exports = router; 