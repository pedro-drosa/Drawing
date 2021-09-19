//Initial Data
let currentColor = 'black';
let screen = document.querySelector('#tela');
let context = screen.getContext('2d');
//Events
document.querySelectorAll('.colorArea .color').forEach( (item) => {
  item.addEventListener('click', handleColorClick);
});

//Functions
function handleColorClick(event) {
  currentColor = event.target.getAttribute('data-color');
  document.querySelector('.color.active').classList.remove('active');
  event.target.classList.add('active');
}
