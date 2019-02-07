// Express is a simple HTTP server framework for Node.js
const express = require('express')

//Used for getting the path to this directory in the file system
const pathLib = require('path')

// Used for routing requests in Express
var router = express.Router()

/* Turns a relative file path into an absolute path */
function getFileName(relativePath) {
    let path = __dirname.split(pathLib.sep)
    path.pop()
    return `${path.join(pathLib.sep)}/${relativePath}`
}

/*
* Gets a CSS file for importing the Impact font into a webpage.
* All requests to /fonts/css/impact will be handled here
*/
router.all('/css/impact', async function(req, res, next) {
    res.sendFile(getFileName('fonts/css/impact.css'))
})

/*
* Gets the TTF file for the Impact font. 
* All requests to /fonts/impact will be handled here. 
*/
router.all('/impact', function(req, res, next) {
    res.sendFile(getFileName('fonts/impact.ttf'))
})

module.exports = router