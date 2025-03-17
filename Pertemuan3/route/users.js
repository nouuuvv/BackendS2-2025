const express = require("express");
const router = express.Router();

//routing
router.get('/:id',(req, res)=>{
    res.send(`user id : ${req.params.id}`);
});

router.post('/post-users', (req, res)=>{
    res.send("Ini halaman input data users");
});
router.put('/put-users', (req, res)=>{
    res.send("Ini halaman Edit data users");
});
router.delete('/delete-users', (req, res)=>{
    res.send("Ini halaman Hapus data users");
});


module.exports = router;