/* Fetches a random meme from the images folder */

const memeCount = 15

module.exports = {
	getMeme: () => {
		return `${__dirname}/images/${Math.floor(Math.random() * memeCount)}.jpg`
	}
}