const absoluto = 22;
let salir = false;

let usuarios;
let newUsuario;

let app = document.getElementById("app-sp");
let guide_1 = document.getElementById("guide");
let btn_start = document.getElementById("b-start");

let input_nombre = document.createElement("input");
let guide_2 = document.createElement("h2");
let input_edad = document.createElement("input");
let guide_3 = document.createElement("h2");
let input_peso = document.createElement("input");
let btn_continuar = document.createElement("button");

btn_start.addEventListener("click", comenzar);

function comenzar() {
  guide_1.innerText =
    "PRIMERO QUE NADA NECESITAMOS UNOS DATOS\n\nIndicanos tu nombre";
  btn_start.remove();
  input_nombre.name = "name_input_nombre";
  input_nombre.id = "id_input_nombre";
  input_nombre.type = "text";
  input_nombre.className = "input-style";
  app.appendChild(input_nombre);
  guide_2.innerText = "Indicanos tu edad.";
  guide_2.id = "guide_2";
  app.appendChild(guide_2);
  input_edad.name = "name_input_edad";
  input_edad.id = "id_input_edad";
  input_edad.type = "number";
  input_edad.className = "input-style";
  app.appendChild(input_edad);
  guide_3.innerText = "Indicanos tu peso actual.";
  guide_3.id = "guide_3";
  app.appendChild(guide_3);
  input_peso.name = "name_input_peso";
  input_peso.id = "id_input_peso";
  input_peso.type = "number";
  input_peso.className = "input-style";
  app.appendChild(input_peso);
  btn_continuar.name = "name_btn_continuar";
  btn_continuar.id = "id_btn_continuar";
  btn_continuar.className = "btn-style";
  btn_continuar.innerText = "CONTINUAR";
  app.appendChild(btn_continuar);
}

if (localStorage.getItem("usuarios")) {
  usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
  usuarios = [];
}

class Usuario {
  constructor(nombre, edad, peso, carga, meta) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.carga = carga;
    this.meta = meta;
  }
}

function almacUsuario(usuario) {
  return usuarios.unshift(usuario);
}

function almacStorage(user) {
  let storage = localStorage.setItem("usuarios", JSON.stringify(user));
  return storage;
}

btn_continuar.addEventListener("click", () => {
  if (input_nombre.value == "") {
    alert("Los campos son obligatorios");
  } else if (input_edad.value == "") {
    alert("Los campos son obligatorios");
  } else if (input_peso.value == "") {
    alert("Los campos son obligatorios");
  } else {
    selectActiv();
  }
});

let guide_4 = document.createElement("h2");
let option1 = document.createElement("input");
let option1Label = document.createElement("label");
let option1Texto = document.createTextNode("Poco o nada");
let option2 = document.createElement("input");
let option2Label = document.createElement("label");
let option2Texto = document.createTextNode("Entrenamiento ligero");
let option3 = document.createElement("input");
let option3Label = document.createElement("label");
let option3Texto = document.createTextNode("Entrenamiento moderado");
let option4 = document.createElement("input");
let option4Label = document.createElement("label");
let option4Texto = document.createTextNode("Entrenamiento fuerte");
let option5 = document.createElement("input");
let option5Label = document.createElement("label");
let option5Texto = document.createTextNode("Entrenamiento muy fuerte");
let btn_continuar_2 = document.createElement("button");

function selectActiv() {
  guide_1.innerText = "BIEVENIDO/A!";
  input_nombre.remove();
  guide_2.remove();
  input_edad.remove();
  guide_3.remove();
  input_peso.remove();
  btn_continuar.remove();
  guide_4.innerText = "Indicanos cual es tu nivel de actividad:";
  guide_4.id = "guide_4";
  app.appendChild(guide_4);
  option1.type = "radio";
  option1.id = "option1";
  option1.className = "radio-btn";
  option1.value = 1.2;
  option1.name = "carga1";
  option1Label.htmlFor = "option1";
  option1Label.appendChild(option1Texto);
  app.appendChild(option1);
  app.appendChild(option1Label);
  option2.type = "radio";
  option2.id = "option2";
  option2.className = "radio-btn";
  option2.value = 1.4;
  option2.name = "carga2";
  option2Label.htmlFor = "option2";
  option2Label.appendChild(option2Texto);
  app.appendChild(option2);
  app.appendChild(option2Label);
  option3.type = "radio";
  option3.id = "option3";
  option3.className = "radio-btn";
  option3.value = 1.6;
  option3.name = "carga3";
  option3Label.htmlFor = "option3";
  option3Label.appendChild(option3Texto);
  app.appendChild(option3);
  app.appendChild(option3Label);
  option4.type = "radio";
  option4.id = "option4";
  option4.className = "radio-btn";
  option4.value = 1.8;
  option4.name = "carga4";
  option4Label.htmlFor = "option4";
  option4Label.appendChild(option4Texto);
  app.appendChild(option4);
  app.appendChild(option4Label);
  option5.type = "radio";
  option5.id = "option5";
  option5.className = "radio-btn";
  option5.value = 2.0;
  option5.name = "carga5";
  option5Label.htmlFor = "option5";
  option5Label.appendChild(option5Texto);
  app.appendChild(option5);
  app.appendChild(option5Label);
  btn_continuar_2.name = "name_btn_continuar_2";
  btn_continuar_2.id = "id_btn_continuar_2";
  btn_continuar_2.className = "btn-style";
  btn_continuar_2.innerText = "CONTINUAR";
  app.appendChild(btn_continuar_2);
}

btn_continuar_2.addEventListener("click", () => {
  if (document.getElementById("option1").checked) {
    selectObjetivo();
  } else if (document.getElementById("option2").checked) {
    selectObjetivo();
  } else if (document.getElementById("option3").checked) {
    selectObjetivo();
  } else if (document.getElementById("option4").checked) {
    selectObjetivo();
  } else if (document.getElementById("option5").checked) {
    selectObjetivo();
  } else {
    alert("Debe seleccionar al menos una opción!");
  }
});

let guide_5 = document.createElement("h2");
let objetivo1 = document.createElement("input");
let objetivo1Label = document.createElement("label");
let objetivo1Texto = document.createTextNode("Bajar de peso");
let objetivo2 = document.createElement("input");
let objetivo2Label = document.createElement("label");
let objetivo2Texto = document.createTextNode("Aumentar músculo");
let btn_continuar_3 = document.createElement("button");

function selectObjetivo() {
  guide_1.innerText = "MUY BIEN!";
  guide_4.remove();
  option1.remove();
  option2.remove();
  option3.remove();
  option4.remove();
  option5.remove();
  option1Label.remove();
  option2Label.remove();
  option3Label.remove();
  option4Label.remove();
  option5Label.remove();
  option1Texto.remove();
  option2Texto.remove();
  option3Texto.remove();
  option4Texto.remove();
  option5Texto.remove();
  btn_continuar_2.remove();
  guide_5.innerText =
    "Ahora que ya sabemos tu actividad\n¿Cual es tu objetivo?";
  app.appendChild(guide_5);
  objetivo1.type = "radio";
  objetivo1.id = "objetivo1";
  objetivo1.className = "radio-btn";
  objetivo1.value = "Bajar de peso";
  objetivo1.name = "meta";
  objetivo1Label.htmlFor = "objetivo1";
  objetivo1Label.appendChild(objetivo1Texto);
  app.appendChild(objetivo1);
  app.appendChild(objetivo1Label);
  objetivo2.type = "radio";
  objetivo2.id = "objetivo2";
  objetivo2.className = "radio-btn";
  objetivo2.value = "Aumentar músculo";
  objetivo2.name = "meta";
  objetivo2Label.htmlFor = "objetivo2";
  objetivo2Label.appendChild(objetivo2Texto);
  app.appendChild(objetivo2);
  app.appendChild(objetivo2Label);
  btn_continuar_3.name = "name_btn_continuar_3";
  btn_continuar_3.id = "id_btn_continuar_3";
  btn_continuar_3.className = "btn-style";
  btn_continuar_3.innerText = "CONTINUAR";
  app.appendChild(btn_continuar_3);
}

btn_continuar_3.addEventListener("click", () => {
  if (document.getElementById("objetivo1").checked) {
    newUsuario = new Usuario(
      input_nombre.value,
      input_edad.value,
      input_peso.value,
      option1.value,
      objetivo1.value
    );
    almacUsuario(newUsuario);
    almacStorage(usuarios);
    selectVeloc();
  } else if (document.getElementById("objetivo2").checked) {
    newUsuario = new Usuario(
      input_nombre.value,
      input_edad.value,
      input_peso.value,
      option2.value,
      objetivo2.value
    );
    almacUsuario(newUsuario);
    almacStorage(usuarios);
    selectVeloc();
  } else {
    alert("Debe seleccionar al menos una opción!");
  }
});

let calsBase = usuarios[0].peso * absoluto * usuarios[0].carga;
console.log(calsBase);

let guide_6 = document.createElement("h2");
let veloc1 = document.createElement("input");
let veloc1Label = document.createElement("label");
let veloc1Texto = document.createTextNode("Lento");
let veloc2 = document.createElement("input");
let veloc2Label = document.createElement("label");
let veloc2Texto = document.createTextNode("Moderado");
let veloc3 = document.createElement("input");
let veloc3Label = document.createElement("label");
let veloc3Texto = document.createTextNode("Rápido");
let btn_continuar_4 = document.createElement("button");

function selectVeloc() {
  guide_1.innerText = "EXCELENTE " + usuarios[0].nombre.toUpperCase() + "!";
  guide_5.remove();
  objetivo1.remove();
  objetivo2.remove();
  objetivo1Label.remove();
  objetivo2Label.remove();
  objetivo1Texto.remove();
  objetivo2Texto.remove();
  btn_continuar_3.remove();
  guide_6.innerText =
    "Te felicitamos por tu objetivo de " +
    usuarios[0].meta.toLowerCase() +
    "!" +
    "\nAhora indicanos que tan rápido deseas alcanzarlo.";
  app.appendChild(guide_6);
  if (usuarios[0].meta === "Bajar de peso") {
    veloc1.type = "radio";
    veloc1.id = "veloc1";
    veloc1.className = "radio-btn";
    veloc1.value = calsBase * 0.1;
    veloc1.name = "veloc";
    veloc1Label.htmlFor = "veloc1";
    veloc1Label.appendChild(veloc1Texto);
    app.appendChild(veloc1);
    app.appendChild(veloc1Label);
    veloc2.type = "radio";
    veloc2.id = "veloc2";
    veloc2.className = "radio-btn";
    veloc2.value = calsBase * 0.2;
    veloc2.name = "veloc";
    veloc2Label.htmlFor = "veloc2";
    veloc2Label.appendChild(veloc2Texto);
    app.appendChild(veloc2);
    app.appendChild(veloc2Label);
    veloc3.type = "radio";
    veloc3.id = "veloc3";
    veloc3.className = "radio-btn";
    veloc3.value = calsBase * 0.3;
    veloc3.name = "veloc";
    veloc3Label.htmlFor = "veloc3";
    veloc3Label.appendChild(veloc3Texto);
    app.appendChild(veloc3);
    app.appendChild(veloc3Label);
  } else if (usuarios[0].meta === "Aumentar músculo") {
    veloc1.type = "radio";
    veloc1.id = "veloc1";
    veloc1.className = "radio-btn";
    veloc1.value = calsBase * 1.1;
    veloc1.name = "veloc";
    veloc1Label.htmlFor = "veloc1";
    veloc1Label.appendChild(veloc1Texto);
    app.appendChild(veloc1);
    app.appendChild(veloc1Label);
    veloc2.type = "radio";
    veloc2.id = "veloc2";
    veloc2.className = "radio-btn";
    veloc2.value = calsBase * 1.15;
    veloc2.name = "veloc";
    veloc2Label.htmlFor = "veloc2";
    veloc2Label.appendChild(veloc2Texto);
    app.appendChild(veloc2);
    app.appendChild(veloc2Label);
    veloc3.type = "radio";
    veloc3.id = "veloc3";
    veloc3.className = "radio-btn";
    veloc3.value = calsBase * 1.2;
    veloc3.name = "veloc";
    veloc3Label.htmlFor = "veloc3";
    veloc3Label.appendChild(veloc3Texto);
    app.appendChild(veloc3);
    app.appendChild(veloc3Label);
  }
  btn_continuar_4.name = "name_btn_continuar_4";
  btn_continuar_4.id = "id_btn_continuar_4";
  btn_continuar_4.className = "btn-style";
  btn_continuar_4.innerText = "CONTINUAR";
  app.appendChild(btn_continuar_4);
}

let calsFinales;

btn_continuar_4.addEventListener("click", () => {
  if (usuarios[0].meta === "Bajar de peso") {
    if (document.getElementById("veloc1").checked) {
      calsFinales = veloc1.value;
      mensajeFinal();
      console.log(calsFinales);
    } else if (document.getElementById("veloc2").checked) {
      calsFinales = veloc2.value;
      mensajeFinal();
      console.log(calsFinales);
    } else if (document.getElementById("veloc3").checked) {
      calsFinales = veloc3.value;
      mensajeFinal();
      console.log(calsFinales);
    }
  } else if (usuarios[0].meta === "Aumentar músculo") {
    if (document.getElementById("veloc1").checked) {
      calsFinales = veloc1.value;
      mensajeFinal();
      console.log(calsFinales);
    } else if (document.getElementById("veloc2").checked) {
      calsFinales = veloc2.value;
      mensajeFinal();
      console.log(calsFinales);
    } else if (document.getElementById("veloc3").checked) {
      calsFinales = veloc3.value;
      mensajeFinal();
      console.log(calsFinales);
    }
  } else {
    alert("Debe seleccionar al menos una opción!");
  }
});

let guide_7 = document.createElement("h2");
let resultado = document.createElement("h3");
let btn_finalizar = document.createElement("button");

function mensajeFinal() {
  guide_1.innerText =
    "FELICITACIONES " + usuarios[0].nombre.toUpperCase() + "!";
  guide_6.remove();
  veloc1.remove();
  veloc2.remove();
  veloc3.remove();
  veloc1Label.remove();
  veloc2Label.remove();
  veloc3Label.remove();
  veloc1Texto.remove();
  veloc2Texto.remove();
  veloc2Texto.remove();
  btn_continuar_4.remove();
  guide_7.innerText =
    "Ya tenemos tus resultados.\nLas calorías que debes consumir diariamente para alcanzar tu objetivo de " +
    usuarios[0].meta.toLowerCase() +
    " son:";
  app.appendChild(guide_7);
  resultado.innerText = calsFinales + " kcal";
  resultado.id = "id-resultado";
  app.appendChild(resultado);
  btn_finalizar.name = "name_btn_finalizar";
  btn_finalizar.id = "id_btn_finalizar";
  btn_finalizar.className = "btn-style";
  btn_finalizar.innerText = "FINALIZAR";
  app.appendChild(btn_finalizar);
}

btn_finalizar.addEventListener("click", () => {
  guide_1.remove();
  guide_7.remove();
  resultado.remove();
  btn_finalizar.remove();
  let greetings = document.createElement("h2");
  greetings.innerText = "GRACIAS POR USAR DFIT!";
  app.appendChild(greetings);
});
