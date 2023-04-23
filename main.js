const express = require('express');
const app = express();
const routes = require('./routes/index');
app.set('view engine', 'pug') 
const PORT = 3000;
app.use(routes);
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});

