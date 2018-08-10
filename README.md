# P4-fend-arcade-game

## About project
The 4th Udacity project called 'Classic Arcade Game Clone' where I was given visual assets and a game loop engine; using these tools I had to add a number of entities to the game to recreate the classic arcade game.

## What did I cover?
I covered all project [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) requirements.
- [x] Player can not move off screen
- [x] Vehicles cross the screen
- [x] Vehicle-player collisions happen logically (not too early or too late)
- [x] Vehicle-player collision resets the game
- [x] Something happens when player wins - modal window appears with option to restart a game
- [x] Game objects (player and vehicles) are implemented using JavaScript object-oriented programming features.
- [x] A `README` file is included detailing all steps required to successfully run the application.

## How to run a game?
You can click on `Clone or download` and run a game by opening index.html or you can play game [live](https://adr1ana.github.io/P4-fend-arcade-game/) !

## How to play a game?
- Use arrow keys (up,down,left,right) to move your player.
- Goal is to reach the water without touching bugs.
- When you reach water modal window will appear with option to `PLAY AGAIN`

## Game behavior
### Bugs (enemies)
Bugs are your enemies. They are moving with randomize speed. Once your player collides with an enemy, the game is reset and the player moves back to the start square.
### Player
As I mention before, you can move your player with **keyboard arrows only** `UP`,`DOWN`, `LEFT`, `RIGHT`. <br>
You cannot move your player off game board and to win you have to reach water.
