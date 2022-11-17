const absoluto= 22;
let nombre;
let edad;
let peso;
let carga;
let meta;
let velocidad;
let salir= false;

let start = document.getElementById("b-start");
const app = document.getElementById("app-sp");

start.addEventListener("click", comenzar)

function comenzar (){
	let guide = document.getElementById("guide");
	guide.innerText= "Nos gustaría saber tu nombre.\nComo te llamas?";
	start.remove();	
	let input = document.createElement(`input`);
	app.appendChild(input);
	let button = document.createElement(`button`);
	button.innerText="CONTINUAR";
	button.className= "continuar"
	app.appendChild(button);	
}

/*while (salir != true){
	//nombre = prompt("Nos gustaría saber tu nombre.\nComo te llamas?");
	if (nombre != ""){
		salir=true
	}
}

//edad = parseInt(prompt("Hola"+ " " + nombre + "!" + " Indicanos tu edad:"))
for (salir = false; salir = true;){
	if (edad >= 18){
		salir = true
		break;	
	}else if (edad < 18){
		//alert ("Debes que ser mayor de 18 años para tomar decisiones en cuanto a tu alimentación basados en éste tipo de analisis sencillo. Es por tu salud.")
		edad = parseInt(prompt("Indicanos tu edad:"))
	}else{
		//alert("Opción no válida.")
		edad = parseInt(prompt("Indicanos tu edad:"))
	}
}

salir=false
//peso= parseInt(prompt("Para empezar, indicanos cual es tu peso actual (No vale mentir)"));
for (salir = false; salir = true;){
	if (peso > 30){
		salir = true
		break;	
	}else if (peso < 30){
		//alert ("El peso que indicaste es demasiado bajo!! \nIndicanos cual es tu peso actual (No vale mentir)")
		peso = parseInt(prompt("Indicanos tu peso actual:"))
	}else{
		//alert("Opción no válida.")
		peso = parseInt(prompt("Indicanos tu peso actual:"))
	}
}


salir=false
function basales (peso,absoluto,carga){
	while (salir != true){
		let actividad= parseInt(prompt("Ahora indicanos cual es tu nivel de actividad \n1- Poco o nada de ejercicio \n2- Entrenamiento ligero (1-3 veces por semana) \n3- Entrenamiento moderado (3-4 veces por semana) \n4- Entrenamiento fuerte (5-7 veces por semana) \n5- Entrenamiento muy fuerte (6 o más y dobles sesiones diarias por semana"))
		switch (actividad){
			case 1:
				carga=1.2;
				salir=true;
				break;
			case 2:
				carga=1.4;
				salir=true;
				break;
			case 3:
				carga=1.6;
				salir=true;
				break;
			case 4: 
				carga=1.8;
				salir=true;
				break;
			case 5:
				carga=2;
				salir=true;
				break;
			default:
				//alert ("Opción no válida")	
				break;
		}
	}
	return peso * absoluto * carga
}
let calsBase = basales (peso, absoluto, carga);
//alert ("Muy bien! Ya sabemos tus calorías basales:\n" + " " + calsBase + " calorías al día es lo que consumes con tu actividad actual")


salir= false;
while (salir != true){
	let objetivo=  parseInt(prompt("Bien! Contanos cual es tu objetivo:\n1- Bajar de peso \n2 - Ganar músculo"))
	switch (objetivo) {
		case 1:
			meta=1;
			salir=true;
			break;
		case 2:
			meta=2;
			salir=true;
			break;
		default:
			//alert ("Opción no válida")
			break;			
	}
}

function calsObjetivo(calsBase, velocidad){
	if (meta == 1){
		let final = parseInt(prompt("Indicanos que tan rápido deseas conseguir tu objetivo de bajar de peso:\n1- Lento\n2- Moderado\n3- Rápido\n\n(Ten en cuenta que la opción 3 es recomendable solo en personas que gocen de una buena salud y se encuentren en un estado fisico optimo con un periodo de entrenamiento avanzado y quieran lograr un objetivo estético extremo. Si no es tu caso, te recomendamos la opción 1 o 2. (Lo hacemos por tu salud)"))
		switch (final){
			case 1:
			velocidad = calsBase*0.10;
			//alert(calsBase-velocidad + " " + "calorías diarias es lo que debes consumir para lograr tu objetivo")
			break;
			case 2:
			velocidad = calsBase*0.20;
			//alert (calsBase-velocidad + " " + "calorías diarias es lo que debes consumir para lograr tu objetivo")
			break;
			case 3:
			velocidad = calsBase*0.30;
			//alert (calsBase-velocidad + " " + "calorías diarias es lo que debes consumir para lograr tu objetivo")
			break;
			default:
			//alert ("Opción no válida")
			break;
		}
	}else if (meta == 2){
		final = parseInt(prompt("Indicanos que tan rápido deseas conseguir tu objetivo de ganar músculo:\n1- Lento\n2- Moderado\n3- Rápido\n\n(Ten en cuenta que la opción 3 rápido es recomendable para personas que tengan dificultad para ganar peso, ya sea tanto en músculo como en grasa. Si éste no es tu caso, te recomendamos las opciones 1 o 2, ésto con el fin de evitar que tengas un aumento de grasa significativo en tu proceso de aumento de masa muscular y debas pasar por un proceso de definicion extenso para lograr que tus ganancias se luzcan como todos queremos. Elije inteligentemente"))
		switch (final){
			case 1:
			velocidad = calsBase*1.10;
			//alert (calsBase+velocidad + " " + "calorías diarias es lo que debes consumir para lograr tu objetivo")
			break;
			case 2:
			velocidad = calsBase*1.15;
			//alert (calsBase+velocidad + " " + "calorías diarias es lo que debes consumir para lograr tu objetivo")
			break;
			case 3:
			velocidad = calsBase*1.20;
			//alert (calsBase+velocidad + " " + "calorías diarias es lo que debes consumir para lograr tu objetivo")
			break;
			default:
			//alert ("Opción no válida")
			break;
		}
	}
		if (meta == 1){
			return calsBase - velocidad
		}else if (meta == 2){
			return calsBase + velocidad
		}	
}

let calsFinales = calsObjetivo(calsBase, velocidad)

const listaUsuarios = [];

class usuario {
	constructor(nombre, edad, peso, calsBase, meta, calsFinales){
		this.nombre = nombre;
		this.edad = edad;
		this.peso = peso;
		this.calsBase = calsBase;
		this.meta = meta;
		this.calsFinales = calsFinales;
	}
	datosUsuario(){
		console.log("Datos del usuario:" + " " + this.nombre + " " + this.edad + " años" + " " + this.peso + "kg")
	}
}

listaUsuarios.push(nuevoUsuario = new usuario (nombre, edad, peso, calsBase, meta, calsFinales));
listaUsuarios.push(usuario1 = new usuario ("Pedro", 28, 98, 2500, 1, 2000));
listaUsuarios.push(usuario2 = new usuario ("Manuel", 50, 73, 2241, 2, 2741));
listaUsuarios.push(usuario3 = new usuario ("Ricardo", 37, 81, 2635, 2, 3120));

nuevoUsuario.datosUsuario([0]);

console.log(listaUsuarios);

const findUsuario = listaUsuarios.find((usuario)=>usuario.nombre==="Pedro");
const userMeta = listaUsuarios.filter((usuario)=>usuario.meta===1);
const listaCals = listaUsuarios.map(usuario => usuario.peso);

console.log(findUsuario);
console.log(userMeta);
console.log(listaCals);

//alert ("Gracias por usar DFit!");*/