const express = require("express");
const router = express.Router();

//routing
router.get('/:id',(req, res)=>{
    res.send(`user id : ${req.params.id}`);
});

router.post('/post-mapel', (req, res)=>{
    res.send("Ini halaman input data mapel");
});
router.put('/put-mapel', (req, res)=>{
    res.send("Ini halaman Edit data mapel");
});
router.delete('/delete-mapel', (req, res)=>{
    res.send("Ini halaman Hapus data mapel");
});


module.exports = router;