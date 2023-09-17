let dino = document.getElementById('dino');
let obstacle = document.getElementById('obstacle');
let gameContainer = document.getElementById('game-container');

let isJumping = false;
let obstacleInterval;

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32 && !isJumping) {
    jump();
  }
});

function jump() {
  let position = 0;
  isJumping = true;
  let jumpInterval = setInterval(function() {
    if (position < 100) {
      position += 10;
      dino.style.bottom = position + 'px';
    } else {
      clearInterval(jumpInterval);
      let fallInterval = setInterval(function() {
        if (position > 0) {
          position -= 10;
          dino.style.bottom = position + 'px';
        } else {
          clearInterval(fallInterval);
          isJumping = false;
        }
      }, 20);
    }
  }, 20);
}

obstacleInterval = setInterval(function() {
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));

  if (obstacleLeft > 700 && obstacleLeft < 800 && dinoTop <= 50) {
    clearInterval(obstacleInterval);
    alert('Game Over!');
  } else {
    obstacle.style.right = obstacleLeft + 5 + 'px';
  }

  if (obstacleLeft > 800) {
    obstacle.style.right = '-50px';
  }
}, 20);
