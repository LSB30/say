const btnYes = document.querySelector(".btnYes");
const btnNo = document.querySelector(".btnNo")

const banner = document.querySelector(".justinImg")
const gatinhoBravo = document.querySelector(".gatinhoBravo")

const title = document.querySelector(".title")

btnYes.addEventListener('click', () => {
  location.href = "wesley.html"
})

btnNo.addEventListener('click', () => {
  banner.classList.add('disable')
  gatinhoBravo.classList.remove('disable')
  title.textContent = "ENTÃO VC PREFERE DO JEITO DIFICIL"
})

function desvia(btn) {
  btn.style.position = 'absolute';
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}