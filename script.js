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
    "img/Galeria/ShowSantos.png",
    "img/Galeria/ShowRJ.png",
    "img/Galeria/ShowAM.png",
    "img/Galeria/ShowRN.png"
]
var legenda = [
    "02-01-2020  Rio de Janeiro - RJ",
    "30-12-2019 Porto Alegre - RS",
    "25-12-2019 São Paulo - SP",
    "20-12-2019 Santos - SP",
    "11-11-2019 Rio de Janeiro - RJ",
    "07-11-2019 Manaus - AM",
    "05-11-2019 Natal - RN"
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

    function verMais() {
        document.getElementById('verMaisForfun').style.display = 'block'
        document.getElementById('forfunInicial').style.display = 'none'
    }

    function verMenos() {
        document.getElementById('verMaisForfun').style.display = 'none'
        document.getElementById('forfunInicial').style.display = 'block'
    }