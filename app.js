const express = require('express');
const path = require('path');

const news = require('./dist/assets/scripts/main');
const app = express();
const newsRouter = require('./dist/assets/scripts/news');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res)=>{

    res.sendFile(__dirname + '/dist/views/index.html');
});

app.use(__dirname + '/dist/assets/scripts', newsRouter);


app.listen(3000);
