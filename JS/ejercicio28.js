function maxMin(array) {
    if (array.length === 0) {
        return "El array está vacío";
    } else {
        let max = array[0];
        let min = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
            if (array[i] < min) {
                min = array[i];
            }
        }

        return {
            max: max,
            min: min
        };
    }
}

let arr = [4, 5, 6, 7, 8];
console.log(maxMin(arr));
