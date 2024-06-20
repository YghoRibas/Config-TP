const express = require('express')
const mongoose = require('mongoose')
const { restart } = require('nodemon')
const app = express()
var cors = require('cors')

app.options('*', cors())

const User = require('./models/User')

app.use(
    (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
        res.header("Access-Control-Allow-Headers", 'Content-Type');
        res.header("Access-Control-Allow-Credentials", 'true');
        app.use(cors());
        next();
    },
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

app.use(
    '/user', userRoutes,
    (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
        res.header("Access-Control-Allow-Headers", 'Content-Type');
        res.header("Access-Control-Allow-Credentials", 'true');
        app.use(cors());
        next();
    }    
)

app.use(
    '/product', productRoutes,
    (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
        res.header("Access-Control-Allow-Headers", 'Content-Type');
        res.header("Access-Control-Allow-Credentials", 'true');
        app.use(cors());
        next();
    }    
)


app.get('/', (req, res) => {
    res.send('API Funcionando')
})

const DB_USER = ''
const DB_PASSWORD = encodeURIComponent('')
mongoose
    .connect(`mongodb+srv://gerencia:gerencia@gerencia.ku71gr7.mongodb.net/?retryWrites=true&w=majority&appName=Gerencia`)
    .then(() => {
        console.log("Conectado com sucesso");
        app.listen(3000)
    })
    .catch((err) => {
        console.log(err);
    })
