class Shot{

constructor(x,y){
    this.x = x;
    this.y = y;
    this.w = 70;
    this.h = 35;
    this.image = new Image() ;
    this.image.src = "./images/disparo.png"
 
  
    
}


drawShot = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h )
  }

  // Movimiento meteoro
  moveShot = () => {
    this.x +=  3
  }

}



