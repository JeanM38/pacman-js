import * as ct from '../constants';

export class Character {
  constructor(originalX, originalY, wallsInfo) {
    this.posX = originalX;
    this.posY = originalY;
    this.direction = 'ArrowRight';
    this.wallsInfo = wallsInfo;
    return this;
  }

  getDirection = () => this.direction;
  
  setDirection = direction => {
    this.direction = direction;
  }
  getPosX = () => this.posX;
  getPosY = () => {
    return this.posY;
  };
  setPosX = posX => {
    this.posX = posX;
  }
  setPosY = posY => {
    this.posY = posY;
  }
  detectLimitVerticalFloor = nextVerticalMove => {
    if(nextVerticalMove <= 0 || (nextVerticalMove + 50) >= ct.heightFloor )
      return false;
    return true;
  }
  detectLimitHorizontalFloor = nextHorizontalMove => {
    if((nextHorizontalMove - 25) <= 0 || (nextHorizontalMove + 25) >= 700 )
      return false;
    return true;
  }
  detectVerticalWalls = (nextVerticalMove, nextHorizontalMove) => {
    let ok = true;
    this.wallsInfo.forEach(wall => {
      if(
        (nextVerticalMove <= (ct.heightFloor - wall.top + ct.wallDistance) && nextVerticalMove >= (ct.heightFloor - wall.top)) ||
        ((nextVerticalMove + 50) >= (ct.heightFloor - wall.top - wall.height - ct.wallDistance ) && ((nextVerticalMove + 50) <= ((ct.heightFloor - wall.top - wall.height))))
      ) {
        if(
          ((nextHorizontalMove + 25) >= wall.left && (nextHorizontalMove - 25) <= (wall.left + wall.width))
        ) {
          ok = false;
        }
      }
    })
    return ok;
  }
  detectHorizontalWalls = (nextHorizontalMove, nextVerticalMove) => {
    let ok = true;
    this.wallsInfo.forEach(wall => {
      if(
        (((nextHorizontalMove + 25) >= (wall.left - ct.wallDistance)) && ((nextHorizontalMove + 25) <= wall.left )) ||
        (((nextHorizontalMove - 25) >= (wall.left + wall.width)) && ((nextHorizontalMove - 25) <= (wall.left + wall.width + ct.wallDistance))) 
      ) {
        if(
          ((nextVerticalMove + 25) <= (ct.heightFloor - wall.top)) && (nextVerticalMove >= (ct.heightFloor - wall.top - wall.height))
        ) {
          ok = false;
        }
      }
    })
    return ok;
  }

  handleMove = (move, step) => {
    switch (move) {
      case 'ArrowUp':
        if(this.detectLimitVerticalFloor(this.posY + step)  && this.detectVerticalWalls(this.posY + step, this.posX)) {
          this.posY = this.posY + step;
          this.direction = 'ArrowUp';
        }
        break;
      case 'ArrowDown':
        if(this.detectLimitVerticalFloor(this.posY - step)  && this.detectVerticalWalls(this.posY - step, this.posX)) {
          this.posY =  this.posY - step;
          this.direction = 'ArrowDown';
        }
        break;
      case 'ArrowRight':
        if(this.detectLimitHorizontalFloor(this.posX + step) && this.detectHorizontalWalls(this.posX + step, this.posY)) {
          this.posX = this.posX + step;
          this.direction = 'ArrowRight';
        }
        break;
      case 'ArrowLeft':
        if(this.detectLimitHorizontalFloor(this.posX - step) && this.detectHorizontalWalls(this.posX - step, this.posY)) {
          this.posX = this.posX - step;
          this.direction = 'ArrowLeft';
        }
        break;
      default:
        break;
    }
  }
}