let refIndex = document.getElementById("refIndex");
let refQuienSoy = document.getElementById("refQuienSoy");
let refServicios = document.getElementById("refServicios");
let refContacto = document.getElementById("refContacto");

refIndex.onclick = () => {
    window.location.href = "../index.html";
}

refQuienSoy.onclick = () => {
    window.location.href = "../quiensoy.html";
}

refServicios.onclick = () => {
    window.location.href = "../servicios.html";
}

refContacto.onclick = () =>{
    document.location.href = "../contacto.html";
}

