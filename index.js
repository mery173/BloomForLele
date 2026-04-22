
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const carta = document.getElementById("carta");
const contenido = document.getElementById("contenido");

// BOTÓN SI
btnSi.addEventListener("click", () => {
  carta.style.display = "none";
  contenido.style.display = "block";

  document.body.classList.remove("not-loaded");
  document.getElementById("corazones-container").style.display = "none";

  iniciarLluvia();
  lanzarConfeti();

  // 🎉 repetir cada 2 segundos
  setInterval(lanzarConfeti, 5000);
});
setInterval(lanzarCorazones, 800);

// 😈 BOTÓN NO

const frasesNo = [
  "¿Seguro? 😢",
  "Piénsalo bien 😳",
  "No seas así 💔",
  "Me romperás el corazón 😭",
  "Última oportunidad 😏"
];

let intento = 0;

// 💻 PC → huye cuando te acercas
btnNo.addEventListener("mouseover", moverBoton);

btnNo.addEventListener("touchstart", (e) => {
  e.preventDefault(); // 👈 bloquea el click
  moverBoton();
});// 😏 si logran hacer click
btnNo.addEventListener("click", () => {
  btnNo.innerText = frasesNo[intento];
  intento++;

  moverBoton(); // 👈 AGREGA ESTA LÍNEA

  // 🔄 si llega al final → vuelve a "No"
  if (intento >= frasesNo.length) {
    intento = 0;
    setTimeout(() => {
      btnNo.innerText = "No";
    }, 1000);
  }
});

function moverBoton() {
  // movimiento corto (no desaparece)
  const x = Math.random() * 140 - 85;
  const y = Math.random() * 120 - 80;

  btnNo.style.transform = `translate(${x}px, ${y}px)`;
}
function iniciarEventos() {
  const btnSi = document.getElementById("btnSi");
  const btnNo = document.getElementById("btnNo");
  const carta = document.getElementById("carta");

  btnSi.addEventListener("click", () => {
    carta.style.display = "none";
    document.body.classList.remove("not-loaded");

    iniciarLluvia(); // 🔥 llamas aquí
  });

  btnNo.addEventListener("mouseover", moverBoton);
}
// 🌧 lluvia de palabras
const palabras = [
  "Buenas Dormilon ❤️",
  "Te quiero muchoo 💕",
  "Eres genial ✨",
  "Tu = Bonito 😊",
  "Lele ❤️",
  "Espero la pasese super🌸",
  "Coma muchoo💖",
  "Eres el mejor",
  "Eres Maravilloso"
];

function iniciarLluvia() {
  setInterval(() => {

    const contenedor = document.getElementById("lluvia-palabras");

    const span = document.createElement("span");
    span.classList.add("palabra");

    span.innerText = palabras[Math.floor(Math.random() * palabras.length)];
    span.style.left = Math.random() * 250 + "vw";
    span.style.animationDuration = (3 + Math.random() * 3) + "s";

    contenedor.appendChild(span);

    setTimeout(() => span.remove(), 6000);

  }, 300);
}
function lanzarConfeti() {
  const container = document.getElementById("confeti-container");

  for (let i = 0; i < 100; i++) {
    const confeti = document.createElement("div");
    confeti.classList.add("confeti");

    // posición horizontal aleatoria
    confeti.style.left = Math.random() * 100 + "vw";

    // colores bonitos
    const colores = ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2", "#f72585", "#ffffff"];
    confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];

    // duración aleatoria
    confeti.style.animationDuration = (Math.random() * 3 + 2) + "s";

    container.appendChild(confeti);

    setTimeout(() => confeti.remove(), 5000);
  }
}
function crearBrillos() {
  const cont = document.createElement("div");
  cont.classList.add("brillos");
  document.body.appendChild(cont);

  for (let i = 0; i < 30; i++) {
    const b = document.createElement("div");
    b.classList.add("brillo");

    b.style.top = Math.random() * 100 + "vh";
    b.style.left = Math.random() * 100 + "vw";
    b.style.animationDelay = Math.random() * 2 + "s";

    cont.appendChild(b);
  }
}
//corazones
function lanzarCorazones() {
  const container = document.getElementById("corazones-container");

  const corazon = document.createElement("div");
  corazon.classList.add("corazon");

  // distintos corazones
  const corazones = ["💖", "💕", "💗", "💘", "❤️"];
  corazon.innerText = corazones[Math.floor(Math.random() * corazones.length)];

  // 👇 POSICIÓN EN TODA LA PANTALLA
  corazon.style.left = Math.random() * 100 + "vw";

  // duración
  corazon.style.animationDuration = (2 + Math.random() * 3) + "s";

  container.appendChild(corazon);

  setTimeout(() => corazon.remove(), 7000);
}