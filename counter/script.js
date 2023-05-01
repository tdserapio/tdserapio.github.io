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
    document.querySelector("#addN").textContent = "Add " + String(document.querySelector("#customN").value);
}