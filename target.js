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
    const apple = [0,1,2,3,4];
    const yellowReminderFruits = [6,8,9,23];
    const orangeFruits = [15,16,27];
    const pearFruits = [20,21,22];
    const melon = [11,12,13,14];
    const milk = [37,38,39,40,41,42,44, 47,50, 51];
    const ghurt = [43, 48, 49, 52, 53, 54, 55, 56, 57];
    const cream = [45,46];
    const juice = [28,29,30,31,32,33,34,36];
    const purpleRedReminderFruits = [18,24,25,26];
    const pepper = [68,69,70,71];
    const potato = [64,72,73,74];
    const tomato = [76,77,78];

    // BUBIDAS -> Azul

    if(apple.includes(this.id)){
        return color(255,0,0);
    }
    else if(orangeFruits.includes(this.id)){
        return color(255,165,0);
    }
    else if(pearFruits.includes(this.id)){
        return color(0,150,0);
    }
    else if(this.id == 10){
        return color(255,205,72);
    }
    else if(this.id == 19){
        return color(255,194,164);
    }
    else if(this.id == 7){
        return color(142,229,63);
    }
    else if(this.id == 17){
        return color(255,194,129);
    }
    else if(this.id == 5){
        return color(86,130,3);
    }
    else if(cream.includes(this.id)){
        return color(200,150,180);
    }
    else if(melon.includes(this.id)){
         return color (0,100,0);
    }
    else if (juice.includes(this.id)) {
      return color(199,130,107);
    }
    else if(ghurt.includes(this.id)){
        return color(77, 37, 53);
    }
    else if(this.id == 35){
        return color(255,192,203);
    }
    else if(purpleRedReminderFruits.includes(this.id)){
        return color(149,53,83);
    }
    //Milk
    else if (milk.includes(this.id)){
      return color(220,180,180);
    }
    else if (yellowReminderFruits.includes(this.id)){
       return color(205,205,0);
    }
    else if(this.id == 58 || this.id == 60){
       return color(0,200,0);
    }
    else if(this.id == 59){
        return color(48,25,52);
    }
    else if(this.id == 62 || this.id == 79){
        return color(0,100,0);
    }
    else if(this.id == 61){
        return color(235,137,33);
    }
    else if(this.id == 63){
        return color(205,193,169);
    }
    else if(pepper.includes(this.id)){
        return color(187,17,42);
    }
    else if(potato.includes(this.id)){
        return color(183,146,104);
    }
    else if(tomato.includes(this.id)){
        return color(255,99,71);
    }
    else if(this.id == 75){
        return color(122,31,61);
    }
    else if(this.id == 66){
        return color(119,103,84);
    }
    else if(this.id == 67){
        return color(72,65,43);
    }
    else if(this.id == 65){
        return color(152,217,142);
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
