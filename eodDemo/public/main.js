const form = document.querySelector('form')
const input = document.querySelector('input')
const namesList = document.querySelector('ul')

const baseURL = 'http://localhost:4000/api/names'

const createNamesList = arr => {
    namesList.innerHTML = ""
    arr.forEach((name,index) => {
        let item = document.createElement('li')
        
        let itemSpan = document.createElement('span')
        itemSpan.textContent = name

        item.appendChild(itemSpan)

        namesList.appendChild(item)
    })
}

const getNames = () => {
    axios.get(baseURL)
        .then(response => {
            createNamesList(response.data)
        })
        .catch(err => console.log(err))
}

const addName = evt => {
    evt.preventDefault()
    axios.post(baseURL + `/${input.value}`)
        .then(response => {
            createNamesList(response.data)
        })
        .catch(err => console.log(err))
    
    input.value = ""
}



form.addEventListener('submit', addName)
getNames()