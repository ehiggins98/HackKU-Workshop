const { Client } = require('pg')
const fs = require('fs')

const text = fs.readFileSync('auth.json')
const client = new Client(JSON.parse(text))

const memeCount = 7

module.exports = {
	init: async () => {
		await client.connect()
	},

	getMeme: () => {
		return `${__dirname}/images/${Math.floor(Math.random() * memeCount)}.jpg`
	},

	saveMeme: async (topText, bottomText, memeId, username) => {
		await client.query('INSERT INTO "Meme".memes(top_text, bottom_text, meme_id, username) VALUES($1::text, $2::text, $3::integer, $4::text)', [topText, bottomText, memeId, username])
	},

	getMemes: async () => {
		const result = await client.query('SELECT * FROM "Meme".memes')
		return result.rows;
	}
}