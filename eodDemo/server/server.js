const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getNames,
    addName
} = require('./controller')

app.get('/api/names', getNames)
app.post('/api/names/:name', addName)
app.delete('/api/names/:name' deleteName)



app.listen(4000, console.log(`App running on port 4000!`))