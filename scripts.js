
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function CliqueiNoBotao() {
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    mascara.style.visibility = 'visible'
}

function saimascara() {
    form.style.left = '-330px'
    mascara.style.visibility = 'hidden'
}