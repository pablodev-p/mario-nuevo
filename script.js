
const formulario = document.querySelector("#formulario-a-llenar")
const mascara = document.querySelector(".mascara-de-formulario")

function botonclicado(){
 formulario.style.left = "50%"
 formulario.style. transform = "translateX(-50%)"
 mascara.style.visibility = "visible"
}

function ocultarmascara(){
    mascara.style.visibility = "hidden"
    formulario.style.left = "-370px"
    formulario.style. transform = "translateX(0)"
}
