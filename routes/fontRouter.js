const express = require('express')
const pathLib = require('path')
const fs = require('fs')
var router = express.Router()

function getFileName(relativePath) {
    let path = __dirname.split(pathLib.sep)
    path.pop()
    return `${path.join(pathLib.sep)}/${relativePath}`
}

router.all('/css/impact', async function(req, res, next) {
    res.sendFile(getFileName('fonts/css/impact.css'))
})

router.all('/impact', function(req, res, next) {
    res.sendFile(getFileName('fonts/impact.ttf'))
})

module.exports = router