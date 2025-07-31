const servicios = {
  "Manicure": {
    descripcion: "Ofrecemos manicure tradicional, semipermanente, acrílico y press.",
    imagenes: ["images/manicure/manicure1.png", "images/manicure/manicure2.png"],
    precios: [
      { tipo: "Tradicional manos", valor: "23.000" },
      { tipo: "Semipermanente manos", valor: "46.000" },
      { tipo: "Press on", valor: "80.000" },
      { tipo: "Acrílico Forrado", valor: "85.000" },
      { tipo: "Acrílico Esculpidas", valor: "Desde 100.000" }
    ]
  },
  "Pedicure": {
    descripcion: "Pedicure con cuidado profesional y relajación.",
    imagenes: ["images/pedicure/1.jpg", "images/pedicure/2.jpg"],
    precios: [
      { tipo: "Tradicional", valor: "30.000" },
      { tipo: "Semipermanente", valor: "43.000" }
    ]
  },
  "Cejas-Pestañas": {
    descripcion: "Diseño de cejas, punto a punto y lifting.",
    imagenes: ["images/cejas-pestañas/pestanas1.png", "images/cejas-pestañas/pestanas2.png"],
    precios: [
      { tipo: "Diseño de cejas", valor: "20.000" },
      { tipo: "Lifting", valor: "50.000" }
    ]
  },
  "Maquillaje": {
    descripcion: "Maquillaje profesional para eventos y sesiones.",
    imagenes: ["images/maquillaje/maquillaje1.png", "images/maquillaje/maquillaje2.png"],
    precios: [
      { tipo: "Social", valor: "80.000" },
      { tipo: "Matrimonio", valor: "120.000" }
    ]
  },
  "Peinados": {
    descripcion: "Peinados para eventos, fiestas o uso diario.",
    imagenes: ["images/maquillaje/maquillaje1.png", "images/maquillaje/maquillaje2.png"],
    precios: [
      { tipo: "Ondas", valor: "30.000" },
      { tipo: "Recogido", valor: "50.000" }
    ]
  }
};

document.getElementById("categoria").addEventListener("change", function () {
  const categoria = this.value;
  const contenedor = document.getElementById("contenido");

  if (servicios[categoria]) {
    const { descripcion, imagenes, precios } = servicios[categoria]; // <-- aquí corregido
    let html = `<div class="servicio">
  <h3 class="titulo-servicio">${categoria.replace("-", " ")}</h3>
  <p class="descripcion-servicio">${descripcion}</p>
  <ul class="lista-precios">`;

precios.forEach(p => {
  html += `<li class="precio-item"><span class="nombre">${p.tipo}:</span> <span class="valor">$${p.valor}</span></li>`;
});

html += `</ul><div class="galeria">`;
imagenes.forEach(img => {
  html += `<img src="${img}" alt="${categoria}">`;
});
html += `</div></div>`;


    contenedor.innerHTML = html;
  } else {
    contenedor.innerHTML = "";
  }
});
