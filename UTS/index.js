const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const barangRoute = require('./routes/dataRoute');


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/datas', barangRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);   
});