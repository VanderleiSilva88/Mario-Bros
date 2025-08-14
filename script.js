const form = document.querySelector(".formulario-fale-conosco")
const mask = document.querySelector(".mascara-formulario")


function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mask.style.visibility = "visible"
}
function esconderFormulario() {
    form.style.left = "-300px"
    form.style.transform = "translatex(0%)"
    mask.style.visibility = "hidden"
    
}