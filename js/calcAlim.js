let inpt_ali = document.getElementById("n-al");
let btn_buscar = document.getElementById("buscar");
let container = document.querySelector("#contenedor");

function crearCard(array) {
  container.innerHTML = "";
  array.forEach((alimento) => {
    const card = `
      <section id="container-ali" class="card">
        <div class="char">
              <h2>Nombre</h2>
              <p>${alimento.nombre}</p>
          </div><div class="char">
                  <h2>Calorías</h2>
                  <p>${alimento.cals}</p>
              </div><div class="char">
                  <h2>Carbohidratos</h2>
                  <p>${alimento.carb}</p>
              </div><div class="char">
                  <h2>Proteínas</h2>
                  <p>${alimento.prot}</p>
              </div><div class="char">
                  <h2>Grasas</h2>
                  <p>${alimento.fat}</p>
              </div></>
      </section>
    `;
    container.innerHTML += card;
  });
}

function find_ali(array) {
  const alimento = inpt_ali.value.toLowerCase();
  return array.filter((item) => item.nombre.includes(alimento));
}

btn_buscar.addEventListener("click", () => {
  fetch("data/alimentos.json")
    .then((res) => res.json())
    .then((data) => {
      const filtrado = find_ali(data);
      crearCard(filtrado);
    });
});
