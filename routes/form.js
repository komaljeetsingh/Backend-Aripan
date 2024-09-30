const express = require('express');
const router = express.Router();

const { addForm, getForms } = require('../controller/formController');


// add a language
router.post('/add', addForm);
router.get('/', getForms);


module.exports = router;
