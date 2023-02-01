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
  
    // Movimiento meteoro con vibrato
    moveMeteo = () => {
      this.x -=  1.25
      this.y -= Math.floor(Math.random() * (5 - (-5) + 1) + (-5))
    }
  
  }

  
