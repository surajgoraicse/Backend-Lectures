require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000
const PORT = process.env.PORT;
console.log(PORT);

app.get('/', (req, res) => {
  res.send('Hello World! ')
})

app.get('/api/data', (req, res) => {
    res.send("Your data is here")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})