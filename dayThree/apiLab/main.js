//https://swapi.dev/api/people/4
//https://swapi.dev/api/planets/2
//"https://swapi.dev/api/starships/10/"

// question 4
//"https://swapi.dev/api/people/2/"
//"https://swapi.dev/api/species/2/"

// qustion 5
// "https://swapi.dev/api/films/1/",
// "https://swapi.dev/api/films/2/",
// "https://swapi.dev/api/films/3/",
// "https://swapi.dev/api/films/4/",
// "https://swapi.dev/api/films/5/",
// "https://swapi.dev/api/films/6/"
// "https://swapi.dev/api/people/10/"

// https://swapi.dev/api/starships/?search=Millennium Falcon

//1. body text of next post
//2. array
//3. https://practiceapi.devmountain.com/api/posts?id=555
//4. 200 or 409
//5. axios.post https://practiceapi.devmountain.com/api/posts?{parker}
//6. axiost.put https://practiceapi.devmountain.com/api/posts?id=1518
//7. https://practiceapi.devmountain.com/api/posts/filter?text=blue
//8. https://practiceapi.devmountain.com/api/posts
//9. Request was missing req.query.id or req.body.text
//10. still just get list of posts

let alderaanBtn = document.querySelector("button")
let namesDiv = document.querySelector("div")

const displayResidents = () =>{
    axios.get("https://swapi.dev/api/planets/2/")
        .then (response => {
            let resedents = (response.data.residents)
            findNames(resedents)
        })
}


const findNames = (resArr) =>{
    for (let i = 0; i < resArr.length; i++){
        axios.get(resArr[i])
            .then (response => {
                let name = response.data.name
                let hacheOne = document.createElement("h1")
                hacheOne.textContent = name
                namesDiv.appendChild(hacheOne)
            })
    }
}



alderaanBtn.addEventListener('click', displayResidents)

