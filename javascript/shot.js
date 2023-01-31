class Shot{

constructor(x,y){
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 25;
    this.image = new Image() ;
    this.image.src = "./images/disparo.png"
 
  
    
}


drawShot = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h )
    ctx.cl
  }

  // Movimiento meteoro
  moveShot = () => {
    this.x +=  3
  }

}



