const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const { CLIENT_RENEG_LIMIT } = require('tls');

const app = express();
const port = 3000;

app.use('/public', express.static(path.join('dist', 'assets')));

app.get('',(req, res)=>{
    res.sendFile(path.join(__dirname,'dist', 'index.html'));
});

app.get('/news', (req, res)=>{

    const search = req.query.q;
    const apiKey = '6bdb05031ff149c0b5bd95e37112a80a';
    const url = `https://newsapi.org/v2/everything?q=${search}&from=2021-02-13&sortBy=popularity&apiKey=${apiKey}`;
    console.log(url);
    fetch(url).then(response => {
        return response.json();
    })
    .then(data => {
        res.send(data);
    })
    .catch(e=>{
        res.status(400).end();

    })
});

app.listen(port, () => {
    console.log(`app is listening in port ${port}`);
});