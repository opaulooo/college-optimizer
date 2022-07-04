const express = require('express')
const json = require('express')
const cors = require("cors")

const app = express()
const port = 8000

let routes = require('./src/routes/routes')
let bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use(json());
app.use(cors());
app.use('/api', routes)

app.get('/', (req, res) => {
    res.send({
        message: 'API no ar!'
    })
})

module.exports = {
    app,
    port
}