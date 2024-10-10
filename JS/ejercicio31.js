
function ejecutarCallback(callback) {
    callback();
}

const mensaje = () => {
    console.log("¡Este es un mensaje desde el callback!");
};

ejecutarCallback(mensaje);
