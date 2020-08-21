const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('/index')
})

app.get('/Restaurant', (req, res) => {
    res.sendFile(path.resolve('public/Restaurant.html'))
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
