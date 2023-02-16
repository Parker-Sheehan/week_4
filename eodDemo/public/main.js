// const { response } = require("express")

// const { addName } = require("../server/controller")

const form = document.querySelector('form')
const input = document.querySelector('input')
const namesList = document.querySelector('ul')

const baseURL = 'http://localhost:4000/api/names'

const grabNames = () =>{
    axios.get(baseURL)
        .then(response => {
            console.log(response.data)
            for(let names in response.data){
                let newLi = document.createElement("li")
                let newSpan = document.createElement("span")
                newSpan.textContent = response.data[names]
                let deleteBtn = document.createElement("button")
                deleteBtn.textContent = "X"

                newLi.appendChild(newSpan)
                newLi.appendChild(deleteBtn)
                namesList.appendChild(newLi)
            }
        })
        .catch(err => console.log(err))
}

const addName = (evt) =>{
    evt.preventDefault()
    let name = input.value
    axios.post(baseURL + `/${name}`)
        .then(response => {
            let newLi = document.createElement("li")
            let newSpan = document.createElement("span")
            newSpan.textContent = response.data
            let deleteBtn = document.createElement("button")
            deleteBtn.textContent = "X"
            console.log(response.data)
            console.log(newSpan)
            console.log(newLi)

            newLi.appendChild(newSpan)
            newLi.appendChild(deleteBtn)
            namesList.appendChild(newLi)
        })
}

form.addEventListener("submit", addName)

console.log("yay")
grabNames()