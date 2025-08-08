const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let ballX = 0;
let ballY = 150;
let ballSpeed = 2;
let swing = false;
let hit = false;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ball
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fillStyle = hit ? 'green' : 'red';
  ctx.fill();
  ctx.closePath();

  // Bat
  if (swing) {
    ctx.fillStyle = '#333';
    ctx.fillRect(300, 130, 10, 40);
  }

  ballX += ballSpeed;

  // Reset if ball goes off screen
  if (ballX > canvas.width) {
    ballX = 0;
    hit = false;
  }

  requestAnimationFrame(drawBall);
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    swing = true;
    // Check if ball is in hit zone
    if (ballX > 290 && ballX < 310) {
      hit = true;
    }
    setTimeout(() => {
      swing = false;
    }, 300);
  }
});

drawBall();
