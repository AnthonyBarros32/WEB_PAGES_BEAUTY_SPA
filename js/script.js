const servicios = {
  "Manicure": {
    descripcion: "Ofrecemos manicure tradicional, semipermanente, acrílico y press.",
    imagenes: ["images/manicure/manicure1.png", "images/manicure/manicure2.png","images/manicure/manicure3.png","images/manicure/manicure4.png","images/manicure/manicure5.jpg","images/manicure/manicure6.jpg"],
    video: "manicure_video1.mp4",
    precios: [
      { tipo: "Tradicional manos", valor: "23.000" },
      { tipo: "Semipermanente manos", valor: "46.000" },
      { tipo: "Press on", valor: "80.000" },
      { tipo: "Acrílico Forrado", valor: "85.000" },
      { tipo: "Acrílico Esculpidas Desde", valor: "100.000" }
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
    imagenes: ["images/cejas-pestañas/pestanas1.png", "images/cejas-pestañas/pestanas2.png","images/cejas-pestañas/pestanas3.png","images/cejas-pestañas/pestanas5.png","images/cejas-pestañas/pestanas6.png","images/cejas-pestañas/pestanas7.png","images/cejas-pestañas/pestanas8.png"],
    video: "pestañas_video1.mp4",
    precios: [
      { tipo: "Diseño de cejas", valor: "20.000" },
      { tipo: "Lifting", valor: "50.000" }
    ]
  },
  "Maquillaje": {
    descripcion: "Maquillaje profesional para eventos y sesiones.",
    imagenes: ["images/maquillaje/maquillaje1.png","images/maquillaje/maquillaje2.png","images/maquillaje/maquillaje3.png"],
    precios: [
      { tipo: "Social", valor: "80.000" },
      { tipo: "Matrimonio", valor: "120.000" }
    ]
  },
  "Peinados": {
    descripcion: "Peinados para eventos, fiestas o uso diario.",
    imagenes: ["images/peinado/peinado.png", "images/peinado/peinado2.png","images/peinado/peinado3.png"],
    video: "peinado_video1.mp4",
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
    const { descripcion, imagenes, precios, video } = servicios[categoria];
    let html = `<div class="servicio">
      <h3 class="titulo-servicio">${categoria.replace("-", " ")}</h3>
      <p class="descripcion-servicio">${descripcion}</p>
      <ul class="lista-precios">`;

    if (video) {
      html += `
        <div class="video-servicio">
          <video controls style="max-width: 40%; width: 150px; height: auto;">
            <source src="${video}" type="video/mp4">
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>`;
    }

    precios.forEach(p => {
      html += `<li class="precio-item"><span class="nombre">${p.tipo}:</span> <span class="valor">$${p.valor}</span></li>`;
    });

html += `
  <div class="carrusel">
    <div class="carrusel-track">
      ${imagenes.concat(imagenes).map(img => `<img src="${img}" alt="${categoria}">`).join("")}
    </div>
  </div>
</div>`;


    // Inserta HTML en el contenedor
    contenedor.innerHTML = html;

    // Espera un pequeño tiempo para que el DOM lo cargue, y luego añade la clase .show
    setTimeout(() => {
      const nuevoServicio = contenedor.querySelector('.servicio');
      if (nuevoServicio) {
        nuevoServicio.classList.add('show');
      }
    }, 50); // 50 ms es suficiente para que el DOM procese el nuevo nodo
  } else {
    contenedor.innerHTML = "";
  }
});

// Script para cambiar pestañas
function openTab(evt, tabId) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

contents.forEach(content => {
  content.style.display = 'none';
  content.classList.remove('active');
});

const activeContent = document.getElementById(tabId);
activeContent.style.display = 'block';
setTimeout(() => activeContent.classList.add('active'), 10);

function openTab(evt, tabId) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => {
    content.classList.remove('active');
    content.style.display = 'none';
  });

  const activeContent = document.getElementById(tabId);
  activeContent.style.display = 'block';
  setTimeout(() => activeContent.classList.add('active'), 10);

  evt.currentTarget.classList.add('active');

  // Si la pestaña activa es "antes-despues" animamos las imágenes
  if (tabId === 'antes-despues') {
    const imgs = activeContent.querySelectorAll('.galeria-antes-despues img');
    imgs.forEach((img, index) => {
      img.classList.remove('show'); // reset en caso de volver a abrir la pestaña
      setTimeout(() => {
        img.classList.add('show');
      }, index * 150); // delay en cascada: 150ms entre cada imagen
    });
  }
}

function cerrarPopup() {
  const popup = document.getElementById("welcome-popup");
  popup.classList.add("hidden");
}