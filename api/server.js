const express = require('express')

const app = express()
const port = 8100

let comissaoRoute = require('./src/routes/routes')
let bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use('/api', comissaoRoute)

app.get('/', (req, res) => {
    res.send({
        message: 'API no ar!'
    })
})

module.exports = {
    app,
    port
}