// VALIDACIÓN DEL FORMULARIO

document
.getElementById("formulario")
.addEventListener("submit", function(event){

let nombre =
document.getElementById("nombre").value.trim();

let correo =
document.getElementById("correo").value.trim();

let mensaje =
document.getElementById("mensaje").value.trim();

if(nombre === ""){

event.preventDefault();
alert("Debe ingresar su nombre.");
return;

}

if(correo === ""){

event.preventDefault();
alert("Debe ingresar su correo.");
return;

}

if(mensaje === ""){

event.preventDefault();
alert("Debe ingresar un mensaje.");
return;

}

alert(
"Formulario validado correctamente. Se enviará la consulta."
);

});


// BOTÓN VOLVER ARRIBA

const btnArriba =
document.getElementById("btnArriba");

window.addEventListener("scroll", function(){

if(window.scrollY > 300){

btnArriba.style.display = "block";

}else{

btnArriba.style.display = "none";

}

});

btnArriba.addEventListener("click", function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});
```
