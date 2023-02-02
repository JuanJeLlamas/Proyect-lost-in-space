class Shot{

constructor(x,y){
  laserSound.pause();
  laserSound.currentTime = 0;
  laserSound.loop = false;  
  this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 25;
    this.image = new Image() ;
    this.image.src = "./images/disparo.png"
    this.image.style.opacity = 0.3;

    laserSound.volume = 0.1;
    laserSound.play();
   
    
    
}



drawShot = () => {
  
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h )   
              
  }

  // Movimiento meteoro
  moveShot = () => {
    this.x +=  3
    
  }

  
}



