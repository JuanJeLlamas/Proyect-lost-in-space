class Meteorito {

    
    constructor() {
      
      this.x = Math.floor(Math.random() * (700 - 600 + 1)) + 600
      this.y = Math.floor(Math.random() * (350 - 20 + 1)) + 20
      this.h = Math.floor(Math.random() * (180 - 20 + 1)) + 40;
      this.w = Math.floor(Math.random() * (150 - 40 + 1)) + 40;
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
