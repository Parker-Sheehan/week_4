const paren = (arr) =>{
let open = 0
let close = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] == '('){
        open += 1
    }else if(arr[i] == ')'){
        close += 1
    }
    if (close > open ){
        break
    }
}

return(open === close)
}

console.log(paren("()()"))
