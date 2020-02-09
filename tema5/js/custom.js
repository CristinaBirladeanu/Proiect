var variabilaInmultire = inmultire(12, 3);
var variabilaImpartire = impartire(12, 3);

function inmultire(a, b) {
    return a * b;
}

function impartire(a, b) {
    return a / b;
}

function calculeazaInmultire() {
    document.getElementById("rezultatInmultire").innerHTML = variabilaInmultire;
}

function calculeazaImpartire() {
    document.getElementById("rezultatImpartire").innerHTML = variabilaImpartire;
}
