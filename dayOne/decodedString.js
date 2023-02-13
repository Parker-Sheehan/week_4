const alphabet = {
    1 : "a",
    2 : "b",
    3 : "c",
    4 : "d",
    5 : "e",
    6 : "f",
    7 : "g",
    8 : "h",
    9 : "i",
    10 : "j",
    11 : "k",
    12 : "l",
    13 : "m",
    14 : "n",
    15 : "o",
    16 : "p",
    17 : "q",
    18 : "r",
    19 : "s",
    20 : "t",
    21 : "u",
    22 : "v",
    23 : "w",
    24 : "x",
    25 : "y",
    26 : "z",
}

const decoder = (str) =>{

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }


let word = ""
for (let i = 1; i < str.length; i++){
    let x = getKeyByValue(alphabet, str[i])
    x = +x + +(str[0])
    word += alphabet[x]
}

return(word)
}

console.log(decoder("2fcjjm"))