var fotosBanner = [
    "img/Fotos/Forfun1.jpg",
    "img/Fotos/Forfun2.jpg",
    "img/Fotos/Forfun3.jpg",
    "img/Fotos/ForfunShow.jpg",
    "img/Fotos/ForfunShow2.jpg"
]
var fotoAtual = 0

function efeitoBanner() {
    fotoAtual = (fotoAtual+1)%5
    document.querySelector('#banner img').src = fotosBanner[fotoAtual]
}

setInterval(efeitoBanner, 2000)




var galeria = [
    "img/Galeria/ShowRioDeJaneiro.png",
    "img/Galeria/ShowPortoAlegre.png",
    "img/Galeria/ShowSaoPaulo.png",
    "img/Galeria/ShowSantos.png"
]
var legenda = [
    "Rio de Janeiro",
    "Porto Alegre",
    "São Paulo",
    "Santos"
]

var galeriaAtual = 0
var legendaAtual = 0

function Avancar() {
    if (galeriaAtual == galeria.length-1) {
        galeriaAtual = 0
        legendaAtual = 0
        document.getElementById('fotoAtual').src = galeria[galeriaAtual]
        document.getElementById('legenda').innerText = legenda[legendaAtual]
    } else {
        galeriaAtual++
        legendaAtual++
        document.getElementById('fotoAtual').src = galeria[galeriaAtual]
        document.getElementById('legenda').innerText = legenda[legendaAtual]
    }
    }
    

function Voltar() {
    if (galeriaAtual == 0) {
        galeriaAtual = (galeria.length-1)
        legendaAtual = (legenda.length-1)
        document.getElementById('fotoAtual').src = galeria[galeriaAtual]
        document.getElementById('legenda').innerText = legenda[legendaAtual]

    } else {
        galeriaAtual--
        legendaAtual--
        document.getElementById('fotoAtual').src = galeria[galeriaAtual]
        document.getElementById('legenda').innerText = legenda[legendaAtual]
        }
    }
    