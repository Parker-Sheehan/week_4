const shirtSorter = (str) =>{

shirts = {
    s : 0,
    m : 0,
    l : 0
}

for (let i = 0; i < str.length; i++){
    if (str[i] === 's'){
        shirts.s++
    }else if(str[i] === 'm'){
        shirts.m++
    } else if (str[i] === 'l'){
        shirts.l++
    }
}
return('s'.repeat(shirts.s)+'m'.repeat(shirts.m)+'l'.repeat(shirts.l))

}

console.log(shirtSorter("slsmmsllsmsmslsmsmmslsmlmsslmlslmssmlsmslmsmsssmssmsmmsmllllsllsmmlmsls"))