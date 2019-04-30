function lightTheme(){
  document.body.style.backgroundColor = '#fff'
  document.body.style.color = '#333'
}
function darkTheme(){
  let screen = document.getElementById('screen')
  document.body.style.backgroundColor = '#333'
  document.body.style.color = 'white'
}
function sepiaTheme(){
  let screen = document.getElementById('screen')
  document.body.style.backgroundColor = '#cc9d68'
  document.body.style.color = '#333'
}
function turnPage(){
  let screen = document.getElementById('screen')
  screen.classList.add('page')
  setTimeout(function(){
    screen.classList.remove('page')
  }, 1400)
}
