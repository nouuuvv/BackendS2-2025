const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.get('/', dataController.getAllData);
router.get('/:id', dataController.getDataById);
router.post('/', dataController.tambahData);
router.put('/:id', dataController.ubahData);
router.delete('/:id', dataController.hapusData);

module.exports = router;