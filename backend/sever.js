let express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    databaes = require('./database')


//Connect DB
mongoose.set('strictQuery', true)
mongoose.Promise = global.Promise
mongoose.connect(databaes.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected')
}, error => {
    console.log('Cannot connect to databaes ' + error)
})

const infoAPI = require('../backend/routes/infoRoutes')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(cors())

//API
app.use('/api', infoAPI)

//Create Port
const port = 4000
const server = app.listen(port, () => {
    console.log('Connected to post ' + port)
})

//404 Handler
app.use((req, res, next) => {
    next(createError(404))
})

//Error handler
app.use((err, req, res, next) => {
    console.log(err.message)
    if(!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})