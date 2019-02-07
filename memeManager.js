/* Fetches a random meme from the images folder */

// Library for reading files
const fs = require('fs')

const memeCount = 15

module.exports = {
	getMeme: () => {
		return `${__dirname}/images/${Math.floor(Math.random() * memeCount)}.jpg`
	}
}