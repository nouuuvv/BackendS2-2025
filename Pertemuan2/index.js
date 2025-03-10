const express = require("express");
const app = express();
const port = 3000;
const user = require('./route/user');
const book = require('./route/book');
const rent = require('./route/rent');

//uses
app.use('/user', user);
app.use('/book', book);
app.use('/rent', rent);


app.listen(port, ()=> {
    console.log(`Aplikasi berjalan di http://localhost:${port}`);
});