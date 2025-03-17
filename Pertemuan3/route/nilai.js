const express = require("express");
const router = express.Router();

//routing
router.get('/:id',(req, res)=>{
    res.send(`user id : ${req.params.id}`);
});

router.post('/post-nilai', (req, res)=>{
    res.send("Ini halaman input data nilai");
});
router.put('/put-nilai', (req, res)=>{
    res.send("Ini halaman Edit data nilai");
});
router.delete('/delete-nilai', (req, res)=>{
    res.send("Ini halaman Hapus data nilai");
});


module.exports = router;