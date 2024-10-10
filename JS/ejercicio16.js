let input = document.querySelector('.input');

function reversa(){
    let res = input.value.split("").reverse().join("");
    if (res == input.value){
        alert("es un palindromo")
    }else{
        alert("no es un palindromo")
    }
}