/* ---------- Alterna digitação entre duas frases ---------- */
const subnomeEl = document.querySelector(".subnome");
const frases = [
  "Análise e Desenvolvimento de Sistemas💻",
  "Analista de Cyber Threat Intelligence🛡️",
  "Consultor de Montagem e Manutenção de Computadores🖥️"
  
];
let idxTexto = 0, idxLetra = 0, apagando = false;

function maquinaDigitar() {
  const atual = frases[idxTexto];

  if (!apagando && idxLetra <= atual.length - 1) {
    subnomeEl.textContent = atual.substring(0, idxLetra + 1);
    idxLetra++;
    setTimeout(maquinaDigitar, 90); // velocidade escrever
  } else if (apagando && idxLetra > 0) {
    subnomeEl.textContent = atual.substring(0, idxLetra - 1);
    idxLetra--;
    setTimeout(maquinaDigitar, 45); // velocidade apagar
  } else {
    if (!apagando) {
      apagando = true;
      setTimeout(maquinaDigitar, 1400); // pausa antes apagar
    } else {
      apagando = false;
      idxTexto = (idxTexto + 1) % frases.length;
      setTimeout(maquinaDigitar, 650); // pausa antes de começar a digitar próximo
    }
  }
}

/* Add cursor class for CSS fallback */
function addCursorClass() {
  subnomeEl.classList.add('cursor');
}

/* ---------- Smooth scroll for anchors (already native via CSS but ensure behavior) ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---------- Fade-in on scroll ---------- */
const fadeEls = document.querySelectorAll('.fade-in');
function handleFadeIn() {
  const trigger = window.innerHeight * 0.85;
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('show');
  });
}
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', () => {
  maquinaDigitar();
  addCursorClass();
  handleFadeIn();
});
