
const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.API_KEY

exports.searchNews = (req, res)=>{

    const search = req.query.q;
    const url = `https://newsapi.org/v2/everything?q=${search}&from=2021-02-13&sortBy=popularity&apiKey=${API_KEY}`;
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
};

