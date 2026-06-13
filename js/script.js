// ============================
// Datos de servicios
// ============================
const servicios = {
  "Manicure y Pedicure": {
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
function crearCarruselContinuo(imagenes, contenedor, velocidad, categoria) {

  const carrusel = document.createElement('div');
  carrusel.className = 'carrusel';

  const track = document.createElement('div');
  track.className = 'carrusel-track';

  const todasImagenes = [...imagenes, ...imagenes];

  todasImagenes.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;

    let nombreArchivo = src.split('/').pop().split('.')[0].replace(/[-_]/g, ' ');
    nombreArchivo = nombreArchivo.replace(/\b\w/g, c => c.toUpperCase());

    img.alt = `${nombreArchivo} - ${categoria}`;
    img.title = `${nombreArchivo} - Servicio de ${categoria}`;

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
// document.getElementById("categoria").addEventListener("change", function () {
//   const categoria = this.value;
//   const contenedor = document.getElementById("contenido");

//   contenedor.innerHTML = ""; // limpiar contenido previo

//   if (servicios[categoria]) {
//     const { descripcion, imagenes, precios, video } = servicios[categoria];

//     // Crear bloque de servicio
//     const servicioDiv = document.createElement('div');
//     servicioDiv.className = 'servicio';

//     const titulo = document.createElement('h3');
//     titulo.className = 'titulo-servicio';
//     titulo.textContent = categoria.replace("-", " ");
//     servicioDiv.appendChild(titulo);

//     const desc = document.createElement('p');
//     desc.className = 'descripcion-servicio';
//     desc.textContent = descripcion;
//     servicioDiv.appendChild(desc);

//     // Video si existe
//     if (video) {
//       const videoDiv = document.createElement('div');
//       videoDiv.className = 'video-servicio';
//       videoDiv.innerHTML = `
//         <video controls>
//           <source src="${video}" type="video/mp4">
//           Tu navegador no soporta la reproducción de video.
//         </video>`;
//       servicioDiv.appendChild(videoDiv);
//     }

//     // Lista de precios
//     const ul = document.createElement('ul');
//     ul.className = 'lista-precios';
//     precios.forEach(p => {
//       const li = document.createElement('li');
//       li.className = 'precio-item';
//       li.innerHTML = `<span class="nombre">${p.tipo}:</span> <span class="valor"><sup>$</sup>${p.valor}</span>`;
//       ul.appendChild(li);
//     });
//     servicioDiv.appendChild(ul);

//     contenedor.appendChild(servicioDiv);

//     // Crear carrusel con imágenes
//     crearCarruselContinuo(imagenes, '#contenido', 1, categoria);

//     // Animación fade-in
//     setTimeout(() => servicioDiv.classList.add('show'), 50);
//   }
// });

// ============================
// Manejar chips de categoría
// ============================
// const chips = document.querySelectorAll(".categoria-chip");

// chips.forEach(chip => {
//   chip.addEventListener("click", () => {
//     // activar chip seleccionado
//     chips.forEach(c => c.classList.remove("active"));
//     chip.classList.add("active");

//     // cargar contenido de esa categoría
//     mostrarCategoria(chip.dataset.cat);
//   });
// });

// Cargar la primera categoría al inicio
// mostrarCategoria("Manicure y Pedicure");

// function mostrarCategoria(categoria) {


function mostrarCategoria(categoria, elemento) {

  const card = elemento.closest(".servicio-card");
  let contenedor = card.querySelector(".contenido-servicio");

  // 👉 SI YA TIENE CONTENIDO → CERRAR
  if (contenedor && contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = "";
    return;
  }

  // 👉 CERRAR LOS DEMÁS
  document.querySelectorAll(".contenido-servicio")
    .forEach(c => c.innerHTML = "");

  if (servicios[categoria]) {

    const { descripcion, imagenes, precios, video } = servicios[categoria];

    const servicioDiv = document.createElement('div');
    servicioDiv.className = 'servicio';

    

    const desc = document.createElement('p');
    desc.textContent = descripcion;
    servicioDiv.appendChild(desc);

    if (video) {
      const videoDiv = document.createElement('div');
      videoDiv.className = "video-servicio";
      videoDiv.innerHTML = `
        <video controls>
          <source src="${video}" type="video/mp4">
        </video>
      `;
      servicioDiv.appendChild(videoDiv);
    }

    const ul = document.createElement('ul');
    ul.className = "lista-precios";

    precios.forEach(p => {
      const li = document.createElement('li');
      li.className = "precio-item";
      li.innerHTML = `
        <span class="nombre">${p.tipo}</span>
        <span class="valor">$${p.valor}</span>
      `;
      ul.appendChild(li);
    });

    servicioDiv.appendChild(ul);

    const btn = document.createElement('button');
    btn.className = "btn-reserva";
    btn.innerText = "💜 Reservar este servicio";
    btn.onclick = () => enviarWhatsApp(`Hola 😊 quisiera información o agendar una cita para ${categoria} en Glam Nails 💜`);
    servicioDiv.appendChild(btn);

    contenedor.innerHTML = "";
    contenedor.appendChild(servicioDiv);

    crearCarruselContinuo(imagenes, contenedor, 1, categoria);

    // ✅ 👇 AQUÍ VA (IMPORTANTE)
    setTimeout(() => {
      contenedor.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 200);
  }
}

//   const contenedor = document.getElementById("lista-servicios");

//   contenedor.innerHTML = ""; 

//   if (servicios[categoria]) {
//     const { descripcion, imagenes, precios, video } = servicios[categoria];

//     const servicioDiv = document.createElement('div');
//     servicioDiv.className = 'servicio';

//     const titulo = document.createElement('h3');
//     titulo.className = 'titulo-servicio';
//     titulo.textContent = categoria.replace("-", " ");
//     servicioDiv.appendChild(titulo);

//     const desc = document.createElement('p');
//     desc.className = 'descripcion-servicio';
//     desc.textContent = descripcion;
//     servicioDiv.appendChild(desc);

//     if (video) {
//       const videoDiv = document.createElement('div');
//       videoDiv.className = 'video-servicio';
//       videoDiv.innerHTML = `
//         <video controls>
//           <source src="${video}" type="video/mp4">
//           Tu navegador no soporta la reproducción de video.
//         </video>`;
//       servicioDiv.appendChild(videoDiv);
//     }

//     // precios
//     const ul = document.createElement('ul');
//     ul.className = 'lista-precios';
//     precios.forEach(p => {
//       const li = document.createElement('li');
//       li.className = 'precio-item';
//       li.innerHTML = `
//         <span class="nombre">${p.tipo}:</span> 
//         <span class="valor"><sup>$</sup>${p.valor}</span>`;
//       ul.appendChild(li);
//     });
//     servicioDiv.appendChild(ul);

//     contenedor.appendChild(servicioDiv);

// const btn = document.createElement('button');
// btn.className = "btn-reserva";
// btn.innerText = "💜 Reservar este servicio";
// btn.onclick = () => enviarWhatsApp(`Hola quiero reservar ${categoria}`);
// servicioDiv.appendChild(btn);

//     // carrusel
//     crearCarruselContinuo(imagenes, '#lista-servicios', 1, categoria);

//     setTimeout(() => servicioDiv.classList.add('show'), 50);
//   }
// }


// ============================
// Pestañas
// ============================
// function openTab(evt, tabId) {
//   const tabs = document.querySelectorAll('.tab');
//   const contents = document.querySelectorAll('.tab-content');

//   tabs.forEach(tab => tab.classList.remove('active'));
//   contents.forEach(content => {
//     content.classList.remove('active');
//     content.style.display = 'none';
//   });

//   const activeContent = document.getElementById(tabId);
//   activeContent.style.display = 'block';
//   setTimeout(() => activeContent.classList.add('active'), 10);

//   evt.currentTarget.classList.add('active');

//   // Animar galería Antes/Después
//   if (tabId === 'antes-despues') {
//     const imgs = activeContent.querySelectorAll('.galeria-antes-despues img');
//     imgs.forEach((img, index) => {
//       img.classList.remove('show');
//       setTimeout(() => img.classList.add('show'), index * 150);
//     });
//   }
// }

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
// function openTab(evt, tabName) {

//   const tabContents = document.querySelectorAll('.tab-content');
//   const tabs = document.querySelectorAll('.tab');

//   // Ocultar todas las tabs
//   tabContents.forEach(tc => {
//     tc.classList.remove('active');
//     tc.style.display = "none";
//   });

//   // Quitar active de botones
//   tabs.forEach(t => t.classList.remove('active'));

//   // Mostrar tab actual
//   const activeTab = document.getElementById(tabName);
//   activeTab.style.display = "block";
//   activeTab.classList.add('active');

//   evt.currentTarget.classList.add('active');

//   // 👇 SECCIONES EXTRA
//   const reviews = document.querySelector(".reviews-pro");
//   const porque = document.querySelector(".porque");

//   if (tabName === "selector") {
//     reviews.style.display = "block";
//     porque.style.display = "block";
//   } else {
//     reviews.style.display = "none";
//     porque.style.display = "none";
//   }

//   // Slider antes/después
//   if (tabName === 'antes-despues') {
//     clearInterval(sliderInterval);
//     sliderIndex = 0;
//     initSlider();
//   }
// }

let reviewIndex = 0;

function iniciarCarruselResenas() {
  const reviews = document.querySelectorAll('.review-card');

  function mostrarSiguiente() {
    reviews.forEach(r => r.classList.remove('active'));

    reviews[reviewIndex].classList.add('active');

    reviewIndex = (reviewIndex + 1) % reviews.length;
  }

  mostrarSiguiente(); // mostrar la primera

  setInterval(mostrarSiguiente, 3500); // cada 3 segundos
}

// iniciar cuando cargue la página
document.addEventListener("DOMContentLoaded", iniciarCarruselResenas);

document.querySelectorAll('.comparacion-slider').forEach(slider => {

    const range = slider.querySelector('.slider');
    const afterWrapper = slider.querySelector('.img-after-wrapper');
    const line = slider.querySelector('.slider-line');

    range.addEventListener('input', (e) => {

        const value = e.target.value;

        afterWrapper.style.width = value + "%";
        line.style.left = value + "%";

    });

});

// ============================
// Slider Antes y Después
// ============================

document.querySelectorAll(".comparacion-slider").forEach((sliderBox) => {

    const slider = sliderBox.querySelector(".slider");
    const afterWrapper = sliderBox.querySelector(".img-after-wrapper");
    const line = sliderBox.querySelector(".slider-line");

    slider.addEventListener("input", () => {

        const value = slider.value;

        afterWrapper.style.width = value + "%";
        line.style.left = value + "%";

    });

});