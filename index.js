const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/rotas')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// Configura a porta da aplicação
porta = process.env.PORT || 21262;

// Configura o template engine da aplicação
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars')

// Configura os módulos de auxilio da aplicação
    //Morgan
    app.use(morgan('dev'))
    //Express
    app.use(express.json())
    //Cors
    app.use(cors())
    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    //Cookie Parser
    app.use(cookieParser());
    //Express session
    app.use(session({
        secret: 'DgE1cYgAYP8hAHo',
        resave: false,
        saveUninitialized: false
    }));
    //Rotas
    app.use(routes)
    app.use(express.static('views'));

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/views/imgs/favicon.ico'));
app.use('/favicon.ico', express.static('imgs/favicon.ico'));


// Configura a API para escutar na porta 21262
app.listen(porta, () => {
    console.log(`server created and running at http://localhost:${porta}`)
}) 
  