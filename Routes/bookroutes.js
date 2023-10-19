const express = require('express');
const { getBook, createBook, updateBook, deleteBook } = require('../controllers/bookcontrollers');
const router =express.Router();

router.route('/book').get(getBook);
router.route('/book/new').post(createBook);
router.route('/book/update/:id').put(updateBook);
router.route('/book/delete/:id').delete(deleteBook);

module.exports= router;