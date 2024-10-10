

function aniadir(){
    let newli = document.createElement('li');
    let nuevocont = document.createTextNode("nuevo nodo");
    newli.appendChild(nuevocont);

    var etiqueta = document.querySelector("#miLista")
    etiqueta.appendChild(newli);
}
