// Express is a simple HTTP server framework for Node.js
const express = require('express')

// Used for retrieving memes from the meme database
const memeManager = require('../memeManager')

// Used for routing requests in Express
var router = express.Router()

memeManager.init()

// Gets a random meme image from the database
router.all('/random', async function(req, res, next) {
    res.sendFile(memeManager.getMeme())
})

// Gets memes created by other users
router.all('/all', async function(req, res, next) {
    res.send(await memeManager.getMemes())
})

// Saves a meme creation to the database
router.post('/', async function(req, res, next) {
    res.sendStatus(201)
    memeManager.saveMeme(req.body['top_text'], req.body['bottom_text'], req.body['meme_id'], req.body['username'])
})

module.exports = router