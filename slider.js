function mover(elem, inicio, fim, passo, callback) {
  const novoInicio = inicio - passo
  if (novoInicio >= fim) {
    elem.style.left = novoInicio + 'px'
    setTimeout(() => mover(elem, novoInicio, fim, passo, callback), 5)
  } else {
    callback()
  }
}
const s = document.querySelector('[wm-slider] > .slide');
s.style.display = 'block'
mover(s, 1500, -400, 1, () => {
  console.log("terminou!!!")

})