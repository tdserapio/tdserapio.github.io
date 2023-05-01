var curr_num = 0;

function add(numero) {
    numero = String(numero)
    if (numero.split(" ")[0] == "Add") {
        numero = Number(numero.split(" ")[1]);
    } else {
        numero = Number(numero);
    }
    curr_num += numero;
    document.querySelector("#number").textContent = curr_num;
}

function changeButton() {
    var stringy = String(document.querySelector("#customN").value);
    if (stringy == "") {
        stringy = "0";
    }
    document.querySelector("#addN").textContent = "Add " + stringy;
}

function clearThing() {
    curr_num = 0;
    document.querySelector("#number").textContent = curr_num;
}