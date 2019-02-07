const express = require('express')
const pathLib = require('path')
var router = express.Router()

router.all('/impact', function(req, res, next) {
    let path = __dirname.split(pathLib.sep)
    path.pop()
    res.sendFile(`${path.join(pathLib.sep)}/fonts/impact.ttf`)
})

module.exports = router