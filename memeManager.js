const memeCount = 7

module.exports = {
	getMeme: () => {
		return `${__dirname}/images/${Math.floor(Math.random() * memeCount)}.jpg`
	}
}