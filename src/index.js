const express = require('express');
var queryType = require('query-types');
require('dotenv').config();
const corsConfig = require('./configs/cors');
const connectDB = require('./configs/db');
const route = require('./routes');

connectDB();

// app
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(corsConfig);

// app.use(queryType.middleware());

// route
app.use('/api', route);
app.get('/', (req, res) => {
    res.json('Hello world 12345!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
});
