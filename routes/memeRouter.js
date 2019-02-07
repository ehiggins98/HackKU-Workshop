const express = require('express')
const memeManager = require('../memeManager')
var router = express.Router()

memeManager.init()

router.all('/random', async function(req, res, next) {
    res.sendFile(memeManager.getMeme())
})

router.all('/all', async function(req, res, next) {
    res.send(await memeManager.getMemes())
})

router.post('/', async function(req, res, next) {
    res.sendStatus(201)
    memeManager.saveMeme(req.body['top_text'], req.body['bottom_text'], req.body['meme_id'], req.body['username'])
})

module.exports = router