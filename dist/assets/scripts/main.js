//API KEY
//6bdb05031ff149c0b5bd95e37112a80a
function getNews(topic) {
    var url = '/news?' + 'q=' + topic;
    var req = new Request(url);
    fetch(req)
        .then(response => response.json())
        .then(data => {
            console.log("fetch");
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
    console.log("getting input");
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
    // Displaying the value
}
