var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function RolarParaDireita() {
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
    leonardo.style = "display:none"
    bruna.style = "display:flex"
}

function RolarParaEsquerda() {
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
    bruna.style = "display:none"
    leonardo.style = "display:flex"
}