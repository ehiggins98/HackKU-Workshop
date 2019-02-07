const { Client } = require('pg')
const fs = require('fs')

const text = fs.readFileSync('auth.json')
const client = new Client(JSON.parse(text))

const memeCount = 15

module.exports = {
	getMeme: () => {
		return `${__dirname}/images/${Math.floor(Math.random() * memeCount)}.jpg`
	}
}