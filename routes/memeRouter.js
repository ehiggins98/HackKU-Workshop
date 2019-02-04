const express = require('express')
const memeManager = require('../memeManager')
var router = express.Router()

router.get('/', async function(req, res, next) {
    res.sendFile(await memeManager.getMeme())
})

module.exports = router