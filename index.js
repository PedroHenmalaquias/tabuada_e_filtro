function tabuada() {
    let num = document.getElementById("txtnumero").value
    let tabuada = []
    for (let i = 1; i <= 10; i++) {
        num = Number(num) * i
        tabuada.push(num)
        num = document.getElementById("txtnumero").value
    }
    if (num == 0) {
        document.getElementById("result").innerText = null
    }
    else {
        document.getElementById("result").innerText = tabuada.join(", ")
    }
}
function filtro() {
    let digita = document.getElementById("txtpalavra").value.toLowerCase();
    let nomes = document.getElementsByTagName("li");
    for (let verificacao of nomes) {
        if (verificacao.innerText.toLowerCase().includes(digita)) {
            verificacao.style.display = "block"
            verificacao.style.fontWeight = "bolder";
        }
        else {
            verificacao.style.display = "none";
        }
    }
}