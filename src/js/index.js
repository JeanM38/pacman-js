import * as ct from './constants';
import { generateGhosts } from './functions'; 
import { PacMan } from './Classes/Pacman';

const root = document.getElementById('root');

// ==========================================
//            INIT MOUTH ANIMATION
// ==========================================
var s = document.createElement( 'style' );
s.innerHTML = ct.animMouth;
root.appendChild(s);

// create elements
const screen = document.createElement('div');
screen.setAttribute('id', 'screen');
screen.style.display = 'flex';
screen.style.justifyContent = 'center';
screen.style.alignItems = 'center';
screen.style.width = '100%';
screen.style.height = '95vh';

const gameFloor = document.createElement('div');
gameFloor.setAttribute('id', 'gameFloor');
gameFloor.style.width = `${ct.widthFloor}px`;
gameFloor.style.height = `${ct.heightFloor}px`;
gameFloor.style.border = 'blue 1px solid';
gameFloor.style.position = 'relative';
gameFloor.style.backgroundColor = "black";

// initializing game elements
const pacMan = new PacMan(350, 50, ct.wallsInfos, ct.foodsPosition);

// Create walls
const walls = ct.wallsInfos.map((wall, i) => {
  const w = document.createElement('div');
  w.setAttribute('id', `wall-${i}`);
  w.style.width = `${wall.width}px`;
  w.style.height = `${wall.height}px`;
  w.style.border = '#3F51B5 7px double';
  w.style.boxSizing = 'border-box';
  w.style.borderRadius = '2px';
  w.style.backgroundColor = 'black';
  w.style.position = 'absolute';
  w.style.top = `${wall.top}px`;
  w.style.left = `${wall.left}px`;
  return w;
});

// Create Food
const foods = ct.foodsPosition.map((p, i) => {
  const f = document.createElement('div');
  f.setAttribute('id', p.id);
  f.style.width = `${ct.foodWidth}px`;
  f.style.height = `${ct.foodHeight}px`;
  f.style.backgroundColor = ct.foodColor;
  f.style.position = "absolute";
  f.style.top = `${p.top}px`;
  f.style.left = `${p.left}px`;
  return f;
});

// we inject the element on root
walls.forEach(wall => gameFloor.appendChild(wall));
foods.forEach(food => gameFloor.appendChild(food));
gameFloor.appendChild(pacMan.getPacMan());
screen.appendChild(gameFloor);
root.appendChild(screen);

// We create the ghosts
generateGhosts(pacMan);
