class o2 {

    
    constructor() {
      
      this.x = 600;
      this.y =  Math.floor(Math.random() * 300) + 50;
      this.w = 50;
      this.h = 50;
      this.image = new Image() ;
       this.image.src = "./images/o2.png"
                           
      
    }
  
  
    // metodos
  
    
    drawo2 = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h )
    }
  
  
    moveo2 = () => {
      if (oxigeno < 60) {this.x -=  1.80}
      
    }
  
  }