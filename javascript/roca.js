class Meteorito {

    
    constructor(yMet) {
      
      this.x = 600;
      this.y = yMet;
      this.w = 90;
      this.h = 125;
      this.image = new Image() ;
       this.image.src = "./images/roca.png"
                           
      //console.log("meteorito creado")
    }
  
  
    // metodos
  
    // Pintado de meteoros
    drawMeteo = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h )
    }
  
    // Movimiento meteoro
    moveMeteo = () => {
      this.x -=  1.25
    }
  
  }

  
