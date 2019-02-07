const express = require('express')
const memeManager = require('../memeManager')
var router = express.Router()

memeManager.init()

router.all('/random', async function(req, res, next) {
    res.sendFile(memeManager.getMeme())
})

module.exports = router