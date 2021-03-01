//API KEY
//6bdb05031ff149c0b5bd95e37112a80a 
const router = require('express').Router();
const path = require('path');

router.route('/')
    .get( async(req, res)=>{
        let search = req.params;
        if(search){
            const fetch = require('node-fetch');
            fetch( 'http://newsapi.org/v2/everything?' +
            'q=' + search + '&' +
            'from=2021-02-13&' +
            'sortBy=popularity&' +
            'apiKey=6bdb05031ff149c0b5bd95e37112a80a')
            .then(res => res.json())
            .then(data => {
                const elemento = document.getElementById('news-template');
                elemento.style.display = "block";
                const templateSource = document.getElementById('news-template').innerHTML;
                const template = Handlebars.compile(templateSource);
                document.getElementById('news-template').innerHTML = template({
                    news: data.articles
                });
            });
        }
    })
function getNews(topic) {
    var url = 'http://newsapi.org/v2/everything?' +
        'q=' + topic + '&' +
        'from=2021-02-13&' +
        'sortBy=popularity&' +
        'apiKey=6bdb05031ff149c0b5bd95e37112a80a';
    var req = new Request(url);
    fetch(req)
        .then(response => response.json())
        .then(data => {
        const elemento = document.getElementById('news-template');
        elemento.style.display = "block";
        const templateSource = document.getElementById('news-template').innerHTML;
        const template = Handlebars.compile(templateSource);
        document.getElementById('news-template').innerHTML = template({
            news: data.articles
        });
    });
}
function getInputValue() {
    // Selecting the input element and get its value 
    var inputValue = document.getElementById("myInput").value;
    if (inputValue)
        getNews(inputValue);
    else {
        alert("Introduzca un tema a buscar");
        const templateSource = document.getElementById('news-template');
        templateSource.style.display = "none";
        return;
    }
}
module.exports = router;