const express = require("express");
const router = express.Router();

//routing
router.get('/:id',(req, res)=>{
    res.send(`user id : ${req.params.id}`);
});

router.post('/post-guru', (req, res)=>{
    res.send("Ini halaman input data guru");
});
router.put('/put-guru', (req, res)=>{
    res.send("Ini halaman Edit data guru");
});
router.delete('/delete-guru', (req, res)=>{
    res.send("Ini halaman Hapus data guru");
});


module.exports = router;





















































