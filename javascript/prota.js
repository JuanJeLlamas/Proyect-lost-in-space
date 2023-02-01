class Prota {

  
  constructor(x, y) {
    this.x = x
    this.y = y
    this.x = 80; 
    this.y = 50; 
    this.h = 49; 
    this.w = 40; 
    this.speed = 0.0;
    this.image = new Image()
    this.image.src = "./images/prota.png"
  }


  // metodos
  drawProta = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    this.image.src = " ./images/prota.png"
  }

  //  gravedad espacial
  gravity = () => {
    this.y += this.speed
  }

  // volar
  jumpProta = () => {
    this.speed -= 0.22;

    this.image.src = "./images/prota2.png";
  
    this.speed -= 0.22;
  }

 

}


