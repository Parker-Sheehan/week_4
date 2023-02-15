const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let namesArr = [
    {
        firstName:"Lukas",
        lastName:"Nessi"
    },
    {
        firstName:"Batuhan",
        lastName:"Sundseth"
    },
    {
        firstName:"Kyle",
        lastName:"Borcik"
    }
]

const arryOfNames = ["Parker", "Hayat"]
const arryOfAdj = ["Cool", "Nice"]



app.get(`/api/names`, (req,res) => {
    let fullNamesArr = namesArr.map(namesObj => {
        return `${namesObj.firstName} ${namesObj.lastName}`
    })

    res.status(200).send(fullNamesArr)
})

app.get('/api/names/:type', (req,res) => {
    console.log(req.params)
    let {type} = req.params
    let newNameArr = namesArr.map(namesObj => {
        if(type === "first"){
            return namesObj.firstName
        } else {
            return namesObj.lastName
        }
    })
    console.log(newNameArr)
    res.status(200).send(newNameArr)
})

app.get('/api/compliment', (req,res) => {
    const randomName = arryOfNames[Math.floor(arryOfNames.length*Math.random())]
    const randomAdj = arryOfAdj[Math.floor(arryOfAdj.length*Math.random())]
    res.status(200).send(`${randomName} is literally ${randomAdj}`)
})

app.get(`/api/compliment/name/:name`, (req,res) => {
    let {name} = (req.params)
    arryOfNames.push(name)
    res.status(200).send()
})

app.get(`/api/compliment/adj/:adj`, (req,res) => {
    let {adj} = (req.params)
    arryOfAdj.push(adj)
    res.status(200).send()
})

app.listen(4000, console.log("App running on port 4000!"))