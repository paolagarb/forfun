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
