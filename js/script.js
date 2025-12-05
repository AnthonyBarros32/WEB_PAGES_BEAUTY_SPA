// ============================
// Datos de servicios
// ============================
const servicios = {
  "Manicure y Pedicure": {
    descripcion: "Servicios y Precios",
    imagenes: [
      "images/manicure/manicure1.png",
      "images/manicure/manicure2.png",
      "images/manicure/manicure3.png",
      "images/manicure/manicure4.png",
      "images/manicure/manicure5.png",
      "images/manicure/manicure6.png",
      "images/manicure/manicure7.png",
      "images/manicure/manicure8.png",
      "images/manicure/manicure9.png",
      "images/pedicure/pedicure1.jpg",
      "images/pedicure/pedicure2.jpg"
    ],
    video: "manicure_video1.mp4",
    precios: [
      { tipo: "Tradicional manos", valor: "25.000" },
      { tipo: "Semipermanente manos", valor: "50.000" },
      { tipo: "Press on", valor: "85.000" },
      { tipo: "Acrílico Forrado", valor: "90.000" },
      { tipo: "Acrílico Esculpidas Desde", valor: "110.000" },
      { tipo: "Tradicional pies", valor: "30.000" },
      { tipo: "Semipermanente pies", valor: "45.000" }
    ]
  },
  "Cejas y Pestañas": {
    descripcion: "Diseño de cejas y pestañas",
    imagenes: [
      "images/cejas-pestañas/pestanas1.png",
      "images/cejas-pestañas/pestanas2.png",
      "images/cejas-pestañas/pestanas3.png",
      "images/cejas-pestañas/pestanas5.png",
      "images/cejas-pestañas/pestanas6.png",
      "images/cejas-pestañas/pestanas7.png",
      "images/cejas-pestañas/pestanas8.png",
    ],
    video: "pestañas_video1.mp4",
    precios: [
      { tipo: "Diseño de cejas", valor: "20.000" },
      { tipo: "Diseño de cejas con cera", valor: "27.000" },
      { tipo: "Lifting", valor: "60.000" },
      { tipo: "Pestañas por punto", valor: "40.000 - 45.000" },
      { tipo: "Laminado de Cejas", valor: "40.000" }
    ]
  },
  "Maquillaje": {
    descripcion: "Maquillaje profesional para eventos y sesiones.",
    imagenes: [
      "images/maquillaje/maquillaje1.png",
      "images/maquillaje/maquillaje2.png",
      "images/maquillaje/maquillaje3.png"
    ],
    precios: [
      { tipo: "Social", valor: "80.000" },
      { tipo: "Matrimonio", valor: "120.000" }
    ]
  },
  "Peinados": {
    descripcion: "Peinados para eventos, fiestas o uso diario.",
    imagenes: [
      "images/peinado/peinado.png",
      "images/peinado/peinado2.png",
      "images/peinado/peinado3.png",
      "images/peinado/peinado1.jpg",
      "images/peinado/peinad4.jpg"
    ],
    video: "peinado_video1.mp4",
    precios: [
      { tipo: "Ondas", valor: "30.000" },
      { tipo: "Recogido", valor: "50.000" },
      { tipo: "Laminado Capilar (Terapia Capilar) Desde", valor: "100.000" },
      {tipo: "Trenzas Desde", valor: "15.000"},
      {tipo: "Cepellados Desde", valor: "30.000"}

    ]
  }
};

// ============================
// Función para crear carrusel continuo
// ============================
function crearCarruselContinuo(imagenes, contenedorSelector, velocidad = 1, nombreServicio = "") {
  const contenedor = document.querySelector(contenedorSelector);

  // Crear carrusel
  const carrusel = document.createElement('div');
  carrusel.className = 'carrusel';

  const track = document.createElement('div');
  track.className = 'carrusel-track';

  // Duplicar imágenes para efecto continuo
  const todasImagenes = [...imagenes, ...imagenes];
  todasImagenes.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;

    // Extraer nombre del archivo sin extensión y reemplazar guiones/underscores por espacios
    let nombreArchivo = src.split('/').pop().split('.')[0].replace(/[-_]/g, ' ');

    // Capitalizar palabras
    nombreArchivo = nombreArchivo.replace(/\b\w/g, c => c.toUpperCase());

    // Agregar alt y title descriptivos
    img.alt = `${nombreArchivo} - ${nombreServicio}`;
    img.title = `${nombreArchivo} - Servicio de ${nombreServicio}`;

    track.appendChild(img);
  });

  carrusel.appendChild(track);
  contenedor.appendChild(carrusel);

  let posicion = 0;

  function animar() {
    posicion -= velocidad;
    if (Math.abs(posicion) >= track.scrollWidth / 2) {
      posicion = 0;
    }
    track.style.transform = `translateX(${posicion}px)`;
    requestAnimationFrame(animar);
  }

  animar();
}

// ============================
// Mostrar contenido de servicios
// ============================
document.getElementById("categoria").addEventListener("change", function () {
  const categoria = this.value;
  const contenedor = document.getElementById("contenido");

  contenedor.innerHTML = ""; // limpiar contenido previo

  if (servicios[categoria]) {
    const { descripcion, imagenes, precios, video } = servicios[categoria];

    // Crear bloque de servicio
    const servicioDiv = document.createElement('div');
    servicioDiv.className = 'servicio';

    const titulo = document.createElement('h3');
    titulo.className = 'titulo-servicio';
    titulo.textContent = categoria.replace("-", " ");
    servicioDiv.appendChild(titulo);

    const desc = document.createElement('p');
    desc.className = 'descripcion-servicio';
    desc.textContent = descripcion;
    servicioDiv.appendChild(desc);

    // Video si existe
    if (video) {
      const videoDiv = document.createElement('div');
      videoDiv.className = 'video-servicio';
      videoDiv.innerHTML = `
        <video controls>
          <source src="${video}" type="video/mp4">
          Tu navegador no soporta la reproducción de video.
        </video>`;
      servicioDiv.appendChild(videoDiv);
    }

    // Lista de precios
    const ul = document.createElement('ul');
    ul.className = 'lista-precios';
    precios.forEach(p => {
      const li = document.createElement('li');
      li.className = 'precio-item';
      li.innerHTML = `<span class="nombre">${p.tipo}:</span> <span class="valor">$${p.valor}</span>`;
      ul.appendChild(li);
    });
    servicioDiv.appendChild(ul);

    contenedor.appendChild(servicioDiv);

    // Crear carrusel con imágenes
    crearCarruselContinuo(imagenes, '#contenido', 1, categoria);

    // Animación fade-in
    setTimeout(() => servicioDiv.classList.add('show'), 50);
  }
});

// ============================
// Pestañas
// ============================
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

  // Animar galería Antes/Después
  if (tabId === 'antes-despues') {
    const imgs = activeContent.querySelectorAll('.galeria-antes-despues img');
    imgs.forEach((img, index) => {
      img.classList.remove('show');
      setTimeout(() => img.classList.add('show'), index * 150);
    });
  }
}

// ============================
// Popup de bienvenida
// ============================
function cerrarPopup() {
  const popup = document.getElementById("welcome-popup");
  popup.classList.add("hidden");
}

document.addEventListener("click", (e) => {
  const popup = document.getElementById("welcome-popup");
  if (popup && !popup.contains(e.target) && !popup.classList.contains("hidden")) {
    popup.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarPopup();
});

let sliderIndex = 0;
let sliderInterval;

function initSlider() {
  const comparaciones = document.querySelectorAll('#antes-despues .slider-vertical .comparacion');

  function mostrarSiguiente() {
    comparaciones.forEach((comp, i) => {
      comp.classList.remove('active');
    });
    comparaciones[sliderIndex].classList.add('active');
    sliderIndex = (sliderIndex + 1) % comparaciones.length;
  }

  // Mostrar el primer bloque
  mostrarSiguiente();

  // Intervalo automático
  sliderInterval = setInterval(mostrarSiguiente, 3000);
}

// Inicializar slider cuando se abra la pestaña
function openTab(evt, tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabs = document.querySelectorAll('.tab');

  tabContents.forEach(tc => tc.classList.remove('active'));
  tabs.forEach(t => t.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');

  if (tabName === 'antes-despues') {
    clearInterval(sliderInterval);
    sliderIndex = 0;
    initSlider();
  }
}
