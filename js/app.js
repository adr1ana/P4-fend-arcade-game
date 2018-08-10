// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y + 55;
    this.stepX = 101;
    this.resetX = -this.stepX;
    // Speed of enemy will be a random number between 100 and 300
    this.speed = (Math.floor(Math.random() * 300) + 100);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/fly.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < this.stepX * 5) {
      this.x += this.speed * dt;
    }
    else {
      this.x = this.resetX;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
  constructor() {
    this.stepX = 101;
    this.stepY = 83;
    this.sprite = 'images/mr-frog.png';
    this.startX = this.stepX * 2;
    this.startY = (this.stepY * 4) + 55;
    this.x = this.startX;
    this.y = this.startY;
    this.youWon = false;
  }
  // Draw my hero on the screen
  // update()
  //render()
  // Player cannot move off screen -hanndleInput() method
  update () {

    // Checking did player collide with enemy
    for (let enemy of allEnemies) {
      if ((enemy.x + enemy.stepX/2 > this.x && enemy.x < this.x + this.stepX/2) && (this.y === enemy.y)) {
        this.reset();
      }
    }
    // if arrived to water
    if (this.y === 55) {
      this.youWon = true;
    }
  }
  reset () {
    this.x = this.startX;
    this.y = this.startY;
  }
  render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  // Making my player cannot move off screen
  handleInput(input) {
    switch(input) {
      case 'up':
        if (this.y > this.stepY) {
          this.y -= this.stepY;
        }
        break;
      case 'down':
        if (this.y < this.stepY * 4) {
          this.y += this.stepY;
        }
        break;
      case 'left':
        if (this.x > 0) {
          this.x -= this.stepX;
        }
        break;
      case 'right':
        if (this.x < this.stepX * 4) {
          this.x += this.stepX;
        }
        break;
    }
  }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemy1 = new Enemy(-101,0);
const enemy2 = new Enemy((-101*2),83);
const enemy3 = new Enemy((-101*4),(83*2));
const allEnemies = [];
allEnemies.push(enemy1,enemy2,enemy3);
console.log(allEnemies);
const player = new Hero();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
