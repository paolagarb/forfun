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
    "img/Galeria/ShowFundiçaoProgresso.png",
    "img/Galeria/ShowPortoAlegre.png",
    "img/Galeria/ShowSaoPaulo.png",
    "img/Galeria/ShowSantos.png"
]
var galeriaAtual = 0

function Avancar() {
    if (galeriaAtual == galeria.length-1) {
        galeriaAtual = 0
        document.getElementById('fotoAtual').src = galeria[galeriaAtual]

    } else {
        galeriaAtual++
        document.getElementById('fotoAtual').src = galeria[galeriaAtual]
    }
    }
    

function Voltar() {
    if (galeriaAtual == 0) {
        galeriaAtual = (galeria.length-1)
        document.getElementById('fotoAtual').src = galeria[galeriaAtual]

    } else {
        galeriaAtual--
        document.getElementById('fotoAtual').src = galeria[galeriaAtual]
        }
    }
    