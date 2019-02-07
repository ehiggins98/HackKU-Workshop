/* Fetches a random meme from the images folder */

// Interface with the database (Postgres)
// Note the const: it declares a variable to be immutable (i.e. it can't be changed)
const { Client } = require('pg')

// Library for reading files
const fs = require('fs')

// This contains all the authentication information. You'll need to create one yourself.
const text = fs.readFileSync('auth.json')

// Initializes the Postgres client
const client = new Client(JSON.parse(text))

const memeCount = 15

module.exports = {
	init: async () => {
		await client.connect()
	},

	getMeme: () => {
		return `${__dirname}/images/${Math.floor(Math.random() * memeCount)}.jpg`
	},

	/* Saves a meme in the database */
	saveMeme: async (topText, bottomText, memeId, username) => {
		await client.query('INSERT INTO "Meme".memes(top_text, bottom_text, meme_id, username) VALUES($1::text, $2::text, $3::integer, $4::text)', [topText, bottomText, memeId, username])
	},

	/* Gets all memes saved in the datbase */
	getMemes: async () => {
		const result = await client.query('SELECT * FROM "Meme".memes')
		return result.rows;
	}
}