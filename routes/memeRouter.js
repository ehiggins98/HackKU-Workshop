// Express is a simple HTTP server framework for Node.js
const express = require('express')

// Used for retrieving memes from the meme database
const memeManager = require('../memeManager')

// Used for routing requests in Express
var router = express.Router()

// Gets a random meme image from the database
router.all('/random', async function(req, res, next) {
    res.sendFile(memeManager.getMeme())
})

module.exports = router