let x = document.getElementById('profileBtn')
let paras = document.getElementsByClassName('para')
// function functionName(){}
function hideElement(){
  paras[3].classList.add('hidden')
}

// thisIsCalled CamelCase
// this_is_called snake_case

//takes two arguments: 1. the event 2.The function to run when event happened
paras[0].addEventListener('click', hideElement)
