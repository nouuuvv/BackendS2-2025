const express = require("express");
const router = express.Router();

//routing
router.get('/:id',(req, res)=>{
    res.send(`user id : ${req.params.id}`);
});

router.post('/post-jadwal', (req, res)=>{
    res.send("Ini halaman input data jadwal");
});
router.put('/put-jadwal', (req, res)=>{
    res.send("Ini halaman Edit data jadwal");
});
router.delete('/delete-jadwal', (req, res)=>{
    res.send("Ini halaman Hapus data jadwal");
});


module.exports = router;