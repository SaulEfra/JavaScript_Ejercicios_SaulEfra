let array = [5, 3, 1, 6, 5, 7, 3, 56, 10];
let res = 0;  

for (let step = 0; step < array.length; step++) {
    res = res + array[step];  
}

document.write(`<h3>${res}</h3>`);  
