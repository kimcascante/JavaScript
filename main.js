
//alert("Hola!!");


var nombre = "Kimberly Cascante";
var altura = 140;

//document.write(nombre);

var concatenacion = nombre + " " + altura;

//document.write(concatenacion);

var datos = document.getElementById("datos");

//datos.innerHTML = concatenacion;

/*
datos.innerHTML = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura} cm</h3>
`;

if(altura>=190){
    datos.innerHTML += '<h1> Eres alto </h1>';
} else {
    datos.innerHTML += '<h1> Eres bajo </h1>';
}

for(var i=0; i<=2020; i++){
    datos.innerHTML += "<h2>Estamos en el anno: " + i;s
}*/

function muestraMiNombre(nombre, altura) {
    var misDatos = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura} cm</h3>
    `;

    return misDatos
}


//muestraMiNombre("Kim", 160);

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre("Kimb", 159);
}

imprimir();

var nombres = ['K', 'I', 'M'];

//alert(nombres[0]);

document.write('<h1>Listado de nombres</h1>');

/*for(i=0; i<nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}*/

nombres.forEach(function(nombre){
    document.write(nombre + '<br/>');
})

nombres.forEach((nombre) => {
    document.write(nombre + '<br/>')
});