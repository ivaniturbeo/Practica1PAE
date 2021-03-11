const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const { User} = require('./models');
const {newsRoutes, userRoutes} = require('./routes');

dotenv.config();

const port = process.env.PORT; 

app.use(bodyParser.json());

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use('/public', express.static(path.join('dist', 'assets')));

app.set('view engine', 'hbs');

app.get('/',(req, res)=>{
    //res.sendFile(path.join(__dirname,'dist','views', 'index.html'));
    res.render('index', {
    });
});

app.use('/news', newsRoutes );

app.use('/users',bodyparser.json(), userRoutes );

app.listen(port, () => {
    console.log(`app is listening in port ${port}`);
});