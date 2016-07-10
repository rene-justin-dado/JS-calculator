var memory = []

addListeners(document.getElementsByClassName('board')[0].children)
function addListeners (element) {
  for (var i = 0; i < element.length; i++) {
    // Binding Event Listeners
    element[i].addEventListener('click', readout)
    element[i].addEventListener('click', equals)
    element[i].addEventListener('click', allClear)
  }
}
//  The calculator's update window
function readout (event) {
  if (event.target.classList.contains('number') || event.target.classList.contains('operator')) {
    document.getElementsByClassName('display')[0].innerHTML += event.target.innerHTML
    memory.push(event.target.innerHTML)
  }
}
//  Run the current equation on screen
function equals (event) {
  if (event.target.classList.contains('equals')) {
    var result = eval(memory.join(''))
    document.getElementsByClassName('display')[0].innerHTML = result
    memory = [result]
  }
}
// Clear memory
function allClear (event) {
  if (event.target.classList.contains('all-clear')) {
    document.getElementsByClassName('display')[0].innerHTML = ''
    memory = []
  }
}
