var dv = {};
var i;
for (i=0; i<36;i++){
    var a = "dv"+(i+1);
    dv[a] = "dv"+(i+1);
}
//Objeto con todos los cuadrados
var r,g,b;
//Variables que luego seran llenadas con los colores
function DV1 (box) {
	var a = document.getElementById(box);
	r = Math.floor(Math.random()*255);
	g = Math.floor(Math.random()*255);
	b = Math.floor(Math.random()*255);
	//console.log("rgb("+r+","+g+","+b+")");
	a.style.backgroundColor = "rgb("+r+","+g+","+b+")";	
}
//Funcion reutilizable que cambia de color el cuadrado
var DVV = {};
var cond = {};
var i;
for (i=0; i<36;i++){
    var c = "dv"+(i+1);
    DVV[c] = true;
	var b = "dv"+(i+1);
    cond[b] = true;
}

//var cond = true;
//var DVV = true;
function color(ope) {
	if (cond[ope]) {
		console.log("Activa intervalo");
		cond[ope] = false;
		DVV[ope] = true;
		setTimeout(function () {if (DVV[ope]) {DV1(ope);cond[ope]=true;color(ope);}},1200);
	}
	else {
		console.log("No hace nada");
		DVV[ope] = false;
		cond[ope] = true;
	}
}