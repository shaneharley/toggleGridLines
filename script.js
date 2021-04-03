let overlayGrid = document.querySelector('#gridLines').querySelectorAll("*")
let keysPressed = []



onkeydown = function (e) {
  keysPressed[e.code] = e.type == 'keydown';
  if (keysPressed['MetaLeft'] && keysPressed['AltLeft'] && keysPressed['KeyG']) {
    for (let i = 0; i < overlayGrid.length; i++) {
      overlayGrid[i].classList.toggle('showGrid')
    }
  }
}

onkeyup = function (e) {
  keysPressed = []
}
