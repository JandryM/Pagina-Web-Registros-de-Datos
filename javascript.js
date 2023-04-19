const nombre = document.getElementById("name");
const apellidos = document.getElementById("apellido");
const email = document.getElementById("correo");
const telefono = document.getElementById("celular");
const pass = document.getElementById("contraseña");
const contra = document.getElementById("repcontra");
const terminos = document.getElementById("terminosycondiciones");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const listinput = document.querySelectorAll(".botons");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let condicion = validacion();
    if(condicion){
        enviardatos();
    }

function validacion(){
    let condicion = true;
    listinput.forEach((element) => {
        element.firstElementChild.innerHTML = "";
    });

    if(nombre.value.length <1 || nombre.value.trim() == ""){
        mjserror("name","Nombre no valido");
        condicion = false;
    }
    if(apellidos.value.length <1 || apellidos.value.trim() == ""){
        mjserror("apellido", "Apellido no valido");
        condicion = false;
    }
    if(email.value.length <1 || email.value.trim() == ""){
        mjserror("correo", "Correo no valido");
        condicion = false;
    }
    if(telefono.value.length != 10 || telefono.value.trim() == "" || isNaN(telefono.value)){
        mjserror("celular", "Celular no valido");
        condicion = false;
    }
    if(pass.value.length <1 || pass.value.trim() == ""){
        mjserror("pass", "Contrse&ntilde;a no valida");
        condicion = false;
    }
    if(contra.value != pass.value){
        mjserror("contra", "Las Contrse&ntilde;as no Coinciden");
        condicion = false;
    }
    if (!terminos.checked){
        mjserror("terminosycondiciones", "Acepte*");
        condicion = false;
    }
    return condicion;
}
})
function mjserror(classboton, mensaje){
    let elemento = document.querySelector(`.${classboton}`);
    elemento.firstElementChild.innerHTML =mensaje;
}
function enviardatos(){
    form.reset();
    form.lastElementChild.innerHTML = "Enviado";
}