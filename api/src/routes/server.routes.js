const express = require('express')
const router = express.Router()

const {
    postCalculaComissao
} = require("../controllers/resumos")


router.post('/college', postCalculaComissao)


module.exports = router;