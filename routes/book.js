const express = require('express');
const router = express.Router()

router.get('/book', (req, res) => {
    res.send('All books');
});

router.get('/book/:id', (req, res) => {
    res.send(`Single books ${req.params.id}`);
});

module.exports = router;