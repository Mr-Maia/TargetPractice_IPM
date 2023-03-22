// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
  }

  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }

  // Draws the target (i.e., a circle)
  // and its label


  chose_color(){
    const milk = [44, 47,50, 51];
    //Frutas -> Verde
    if(this.id < 28){
      return color(0,200,0);
    }
    // BUBIDAS -> Azul
    else if (this.id > 27 && this.id < 35 || this.id == 36) {
      return color(0,0,255);
    }
    else if (this.id > 36 && this.id < 43 || include(milk, this.id)){
      return color(100,100,100);
    }

    return color(205,0,0);
  }


  draw()
  {
    // Draw target
    fill(color(this.chose_color()));
    circle(this.x, this.y, this.width);

    // Draw label
    textFont("Arial", 12);
    fill(color(255,255,255));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
  }


}
