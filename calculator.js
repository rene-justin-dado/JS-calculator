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
// Check the percent difference
  if (this.classList.contains('percent')) {
    //Make the last number in memory /100 and replace existing last number
    var splitAtOperator = memory.join('').search(/\+|\-|\/|\*/g) + 1
    var percentOperation = '(' + memory.join('').substring(splitAtOperator, memory.length) + '/100)' + '*' + memory.join('').substring(0, splitAtOperator - 1)
    memory.splice(splitAtOperator, memory.length, percentOperation)
  }

  if (this.classList.contains('number') || this.classList.contains('operator')) {
    document.getElementsByClassName('display')[0].innerHTML += this.innerHTML
    memory.push(this.innerHTML)
  }
}
//  Run the current equation on screen
function equals (event) {
  if (this.classList.contains('equals')) {
    var result = eval(memory.join(''))
    document.getElementsByClassName('display')[0].innerHTML = result
    memory = [result]
  }
}
// Clear memory
function allClear (event) {
  if (this.classList.contains('all-clear')) {
    document.getElementsByClassName('display')[0].innerHTML = ''
    memory = []
  }
}