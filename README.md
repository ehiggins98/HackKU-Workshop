# HackKU Meme Maker
This repository is a simple web server with five endpoints - one to get a random meme from `images/`, two to get and post new meme creations, and another two to get the Impact font for use in creating memes.

The `master` branch contains a basic version of the app, without the ability to store and retrieve memes. The `extension` branch then has all the features of the basic version, with the ability to save and retrieve memes. If you want to use the extended version, you'll need to follow those installation instructions (in addition to the basic instructions) below.

**If you want to modify the server you'll need to install it. Otherwise, the server is hosted on Heroku at [https://fathomless-mountain-33480.herokuapp.com/](https://fathomless-mountain-33480.herokuapp.com/).**

## Installation

### Install Node
The server is written in Node.js, a framework for building servers in Javascript, so you need to install that first. On Windows and Mac, go to the [Node.js website](https://nodejs.org/en/download/) and download and run the correct installer (.msi for Windows and .pkg for Mac).

On Linux, run the following commands to install Node.js:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt install nodejs
```

### Install API
Clone this repository using
```
https://github.com/ehiggins98/HackKU-Workshop
```
Then to install dependencies use
```
npm install
```
and run the server with
```
npm start
```
This will start a local server at `http://localhost:3000`.

### Using the server
The server provides three endpoints: one with the "basic" version and two more in the "extended" version:

* GET /meme/random: gets a random meme (basic & extended)
* GET /meme/all: gets all memes generated by users (extended only)
* POST /meme: posts a new meme
    * Body format: 
    ```
    {
        "top_text": top_text,
        "bottom_text": bottom_text,
        "username": username,
        "meme_id": meme number (from its name in images/. Ex. 1.jpg is meme 1)
    }
    ```
* GET /fonts/impact: gets the .ttf file for the Impact font
* GET /fonts/css/impact: gets the .css file used for importing the Impact font into the website.

## (Optional) Extended Installation
In addition to the above installation instructions, if you want to run the `extension` branch there are a couple more things you need to do. 

### Install Postgres
First, you need to install Postgres, which is used to store memes created by users. To do this, simply go to [the Postgres website](https://www.postgresql.org/download/) and follow the directions for your operating system. Make sure to remember the password and port number you set.

### Install pgAdmin
You'll also want to install pgAdmin, which lets you manage the database in a GUI. To install that, go to [the pgAdmin website](https://www.pgadmin.org/download/) and download the installer for your system. To connect to your local server, open pgAdmin, go to Object->Connect Server and enter the password you set when installing Postgres.

### Connect API to Postgres
First, make sure you're on the `extension` branch. To do this, run the following commands in your project directory:
```
git checkout extension
git pull
```

Next, create a file called `auth.json` in the project directory, and format it as follows:
```
{
    "user": "postgres",
    "host": "localhost",
    "database": "postgres",
    "password": <the password you set when installing Postgres>,
    "port": <the port you set when installing Postgres. default: 5432>,
    "ssl": true
}
```

### Configure SQL database
Open pgAdmin and in the left navigation pane click on Databases->postgres. Right click on the "postgres" database and click Create->Schema. Set the name as "Meme" and save the schema. Next, right click on the "Meme" schema in the left navigation pane and click Create->Table (for me it's at the very bottom of the menu, so you might not actually be able to read the text. It should be below Sequence).

Name the table "memes," make sure the schema is set to "Meme," and click on "Columns" to add some columns. Click the "+" button in the upper-right corner. For the first column, set the name to "top_text" and data type to "text." Follow the same steps to add:
* bottom_text, type: text
* username, type: text
* meme_id, type: integer (flip the "Not NULL?" switch on this one too)

You need to add one more column, but it's a bit trickier. First, click "Save" in the column dialog. Then, right click on this new table (under Schemas) in the left navigation page. Click "Query Tool." Enter the following query and push the lightning button to run it.

```
ALTER TABLE "Meme".memes
    ADD id SERIAL PRIMARY KEY
```

This will create a column that increments for each new item in the table, so you don't have to worry about setting it.