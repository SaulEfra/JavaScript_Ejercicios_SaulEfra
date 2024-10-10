function parimpar(input1){
    

    if(input1%2 == 0){
        return true
        
    }else{
        return false
    }
    
}

let res = parimpar(5)
let res2 = parimpar(10)


document.write(`<p>${res}</p>`)
document.write(`<p>${res2}</p>`)
