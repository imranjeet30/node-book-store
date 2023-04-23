const express = require('express');
const path = require('path');
const router = express.Router()
const bookRouter = require('./book');

router.get('/', (req, res) => {
    let absPath = path.join('index');
    res.render(absPath,  {name:"Ranjeet"});
})
router.use(bookRouter);
router.all('/*', (req, res) => {
    res.send('No route found');
});
module.exports = router;