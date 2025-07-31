const servicios = {
  "manicure": {
    descripcion: "Ofrecemos manicure clásico, semipermanente y spa.",
    imagenes: ["images/manicure/manicure1.png", "images/manicure/manicure2.png"]
  },
  "pedicure": {
    descripcion: "Pedicure con cuidado profesional y relajación.",
    imagenes: ["images/pedicure/1.jpg", "images/pedicure/2.jpg"]
  },
  "cejas-pestanas": {
    descripcion: "Diseño de cejas, pestañas pelo a pelo y lifting.",
    imagenes: ["images/cejas-pestañas/pestanas1.png", "images/cejas-pestañas/pestanas2.png"]
  },
  "maquillaje": {
    descripcion: "Maquillaje profesional para eventos y sesiones.",
    imagenes: ["images/maquillaje/maquillaje1.png", "images/maquillaje/maquillaje2.png"]
  }
};

document.getElementById("categoria").addEventListener("change", function () {
  const categoria = this.value;
  const contenedor = document.getElementById("contenido");

  if (servicios[categoria]) {
    const { descripcion, imagenes } = servicios[categoria];
    let html = `<div class="servicio"><h3>${categoria.replace("-", " ")}</h3><p>${descripcion}</p><div class="galeria">`;
    imagenes.forEach(img => {
      html += `<img src="${img}" alt="${categoria}">`;
    });
    html += `</div></div>`;
    contenedor.innerHTML = html;
  } else {
    contenedor.innerHTML = "";
  }
});
