//Initial Data
let currentColor = 'black';
let canDraw = false;

let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let context = screen.getContext('2d');

//Events
document.querySelectorAll('.colorArea .color').forEach((item) => {
  item.addEventListener('click', handleColorClick);
});

screen.addEventListener('mousedown', handleMouseDown); // When clicking with the mouse, activate -> drawing mode

screen.addEventListener('mousemove', handleMouseMove); // If the mouse is moving and is pressed -> draw

screen.addEventListener('mouseup', handleMouseUp); // On mouse up, disable -> drawing mode

document.querySelector('.clear').addEventListener('click', handleClearScreen);

//Functions
function handleColorClick(event) {
  currentColor = event.target.getAttribute('data-color');
  document.querySelector('.color.active').classList.remove('active');
  event.target.classList.add('active');
}

function handleMouseDown(event) {
  canDraw = true;
  mouseX = event.pageX - screen.offsetLeft; //calcula a posição inicial do canvas no eixo HORIZONTAL
  mouseY = event.pageY - screen.offsetTop; //calcular a posição inicial do canvas no eixo VERTICAL
}

function handleMouseMove(e) {
  if (canDraw) {
    draw(e.pageX, e.pageY);
  }
}

function handleMouseUp() {
  canDraw = false;
}

function draw(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  context.beginPath();
  context.lineWidth = 5;
  context.lineJoin = 'round';
  context.moveTo(mouseX, mouseY);
  context.lineTo(pointX, pointY);
  context.closePath();
  context.strokeStyle = currentColor;
  context.stroke();

  mouseX = pointX;
  mouseY = pointY;
}

function handleClearScreen() {
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
