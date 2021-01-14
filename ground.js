class ground {
    constructor(x, y, width, height,) {
      var options = {
          isStatic :true,
          friction : 7,
          density : 5
      }
     
      this.body = Bodies.rectangle(600,590,1800,10, options);
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.width = 1800;
      this.height = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x,pos.y, this.width, this.height);
    
      
    }
  }