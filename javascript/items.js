class o2 {

    
    constructor() {
      
      this.x = 600;
      this.y =  Math.floor(Math.random() * 300) + 50;
      this.w = 62;
      this.h = 62;
      this.image = new Image() ;
      this.image.src = "./images/o2.png"
                           
      
    }
  
  
    // metodos
  
    
    drawo2 = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h )
    }
  
  
    moveo2 = () => { 
      if (
        oxigeno < 25){
          this.x -= 3
          if(this.x < 0){
            this.x = 700
            this.y =  Math.floor(Math.random() * 300) + 50;
          }
        } else if (
          oxigeno < 67){
      this.x -=  2}

    }
  
  }