function cerrarAnuncio() {

    document.getElementById("header").style.marginTop = "0px";
    document.getElementById("header").style.top = "0";
}

window.onscroll = function (e) {
    if (window.scrollY > 300) {
        document.getElementById("logo").style.visibility = "visible";
        document.getElementById("logo").style.opacity = "1";
        document.getElementById("logo").style.transition = "all 0.4s ease-in";
        document.getElementById("boton_cerrar_anuncio").click()
    }

    if (window.scrollY < 300) {
        document.getElementById("logo").style.visibility = "hidden";
        document.getElementById("logo").style.opacity = "0";
        document.getElementById("logo").style.transition = "all 0.4s ease-in";
    }
} 