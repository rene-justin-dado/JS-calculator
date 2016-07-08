/*User Story: I can add, subtract, multiply and divide two numbers.

User Story: I can clear the input field with a clear button.

User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.
*/

// Use to store memory (Should this be an array?)
var memory = ''

 // define listeners for each button (click only OR click and keypress?)

addListeners(document.getElementsByClassName('board')[0].children)
function addListeners (element) {
  for (var i = 0; i < element.length; i++) {
    // Binding Event Listeners
    element[i].addEventListener('click', concatNum)
    element[i].addEventListener('click', readout)
    element[i].addEventListener('click', equals)
  }
}
// The calculator's update window
function readout (event) {
  if (event.target.classList.contains('number') || event.target.classList.contains('operator')) {
    document.getElementsByClassName('display')[0].innerHTML += event.target.innerHTML
  }
}

// Chain numbers on the display window
function concatNum (event) {
  if (event.target.classList.contains('number')) {
    memory += event.target.innerHTML
  } else if (event.target.classList.contains('operator')) {
    memory += event.target.innerHTML
  }
}

// Use operator given operator on numbers
function equals (event) {
  if (event.target.classList.contains('equals')) {
    document.getElementsByClassName('display')[0].innerHTML = eval(memory)
  }
}
