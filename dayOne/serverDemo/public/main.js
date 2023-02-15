// const { response } = require("express")

// const { response } = require("express")

console.log("hello world")
const getNamesBtn = document.querySelector("#get-names")
const list = document.querySelector('ul')
const firstNamesBtn = document.querySelector("#first")
const lastNamesBtn = document.querySelector("#last")
const complimentButton = document.querySelector('#complement')
const body = document.querySelector('span')
const nameForm = document.querySelector('#name-form')
const adjForm = document.querySelector('#adj-form')
const newNameInput = document.querySelector("#name-input")
const newAdjInput = document.querySelector("#adj-input")


const createList = (arr) => {
    list.innerHTML = ""
    arr.forEach(element => {
        let newItem = document.createElement('li')
        newItem.textContent = element
        list.appendChild(newItem)
    })
}

const createHeading = (compliment) =>{
    body.innerText = ""
    let newH1 = document.createElement('H1')
    newH1.textContent = compliment
    body.appendChild(newH1)
}

const getNames = evt => {
    axios.get('http://localhost:4000/api/names')
        .then(response => {
            createList(response.data)
        })
        .catch(err => console.log(err))
}

const getFirstOrLast = evt => {
    console.log(evt.target)
    axios.get(`http://localhost:4000/api/names/${evt.target.id}`)
        .then(response => {
            createList(response.data)
        })
        .catch(err => console.log(err))
}

const complimentMe = (evt) =>{
    axios.get('http://localhost:4000/api/compliment')
        .then(response => {
            createHeading(response.data)
        })
}

const addName = (evt) =>{
    evt.preventDefault()
    axios.get(`http://localhost:4000/api/compliment/name/${newNameInput.value}`)
        .catch(err => console.log(err))

}

const addAdj = (evt) =>{
    evt.preventDefault()
    console.log()
    axios.get(`http://localhost:4000/api/compliment/adj/${newAdjInput.value}`)
        .catch(err => console.log(err))

}

firstNamesBtn.addEventListener("click", getFirstOrLast)
lastNamesBtn.addEventListener("click", getFirstOrLast)
getNamesBtn.addEventListener('click', getNames)
complimentButton.addEventListener("click", complimentMe)
nameForm.addEventListener("submit", addName)
adjForm.addEventListener("submit", addAdj)
