let refIndex = document.getElementById("refIndex");
let refQuienSoy = document.getElementById("refQuienSoy");
let refServicios = document.getElementById("refServicios");
let refContacto = document.getElementById("refContacto");

/*Servicios*/ 
let enlaceDeEscritorio = document.getElementById("enlace-de-escritorio");
let enlaceDesarolloMovil = document.getElementById("enlace-desarrollo-movil");
let enlaceDesarrolloWeb = document.getElementById("enlace-desarrollo-web");
let aplicacionEscritorio = document.getElementById("aplicacion-escritorio");
let aplicacionMovil = document.getElementById("aplicacion-movil");
let aplicacionWeb = document.getElementById("desarrollo-web");

refIndex.onclick = () => {
    console.log("works JS");
}

refQuienSoy.onclick = () => {
    document.location.href = "../quiensoy.html";
}

refServicios.onclick = () => {
    document.location.href = "../servicios.html";
}

refContacto.onclick = () =>{
    document.location.href = "../contacto.html";
}

enlaceDeEscritorio.onclick = () => {
    document.location.href = "../servicios.html#aplicacion-escritorio";
    aplicacionEscritorio.style = "background-color: #d8e1e1;";
    aplicacionMovil.style = "background-color: white;";
    aplicacionWeb.style = "background-color: white;";
}

enlaceDesarolloMovil.onclick = () => {
    document.location.href = "../servicios.html#enlace-desarrollo-movil";
    aplicacionMovil.style = "background-color: #d8e1e1;";
    aplicacionEscritorio.style = "background-color: white;";
    aplicacionWeb.style = "background-color: white;";
}

enlaceDesarrolloWeb.onclick = () => {
    document.location.href = "../servicios.html#enlace-desarrollo-web";
    aplicacionWeb.style = "background-color: #d8e1e1;";
    aplicacionMovil.style = "background-color: white;";
    aplicacionEscritorio.style = "background-color: white;";
}
