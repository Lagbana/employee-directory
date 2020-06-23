/* 
Import Dependencies
  * express - is a framework for the server setup
  * path - is a node js module that provides a way of working with directories and file paths
  * compression - is a middleware that decreases the downloadable amount of data that’s served to users
*/
const express = require('express')
const path = require('path')
const compression = require('compression')

// Initialize the express application and use middleware
const app = express()
app.use(compression())

// Handling and rendering of static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname + './client/build/index.html'))
})

/*
  Set's the PORT to 3000 when in local development OR to the PORT set by Heroku's environment when deployed
  The server accepts the PORT as a parameter to listen on.
*/
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server Running On Port *${PORT}`)
})
