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


chose_color() {
   // Define a color for each group
   const red = color(255, 0, 0);
   const yellow = color(255,255,0);
   const orange = color(255,127,0);
   const green = color(85, 178, 78);
   const darkGreen = color(0,90,0);
   const smoothie = color(255,136,171);
   const white = color(255,255,255);
   const colorJuices = color(115,157,250);
   const colorCream = color(231,141,130);
   const colorPotato = color(183, 146, 104);
   const colorPepper = color(187, 17, 42);
   const colorTomato = color(216, 50, 0);
   const berinjela = color(105,59,88);
   const kiwiColor = color(122,150,15);
   const mangoColor = color(255,205,72);
   const papayaColor = color(255,194,129);
   const purple = color(134,70,101);
   const peachColor = color(239,113,70);
   const pearColor = color(209,226,49);
   const yoghurtColor = color(225, 175, 183);
   const lightGreen = color(115,215,70);
   const garlicColor = color(242,244,210);
   const mushroomColor = color(216,204,192);
   const redBeetColor = color(122,31,61);

   const index = listas.findIndex(item => item[1] === this.id);

   if ((index >= 0 && index <= 4) || index == 22) return red;
   if (index ==  7 || index ==  11|| index ==  12 ||index == 19 || index == 78) return yellow;
   if (index == 10) return kiwiColor;
   if (index == 13) return mangoColor;
   if (index >= 24 && index <= 27 || index == 79 || index == 72) return darkGreen;
   if ((index >= 14 && index <= 15) || index == 23 || index == 71) return orange;
   if (index == 16) return papayaColor;
   if (index == 17 || (index >= 20 && index <= 21)) return purple;
   if (index == 18) return peachColor;
   if (index >= 8 && index <= 9 || index == 5) return pearColor;
   if (index >= 28 && index <= 35) return colorJuices;
   if (index == 36) return smoothie;
   if (index >= 37 && index <= 46) return white;
   if (index >= 47 && index <= 55) return yoghurtColor;
   if (index >= 56 && index <= 57) return colorCream;
   if (index == 70 || index == 68 || index == 6 || index == 75) return lightGreen;
   if (index == 69) return berinjela;
   if (index == 73) return garlicColor;
   if (index == 74 || (index >= 58 && index <= 60)) return colorPotato;
   if (index == 76) return mushroomColor;
   if (index >= 61 && index <= 64) return colorPepper;
   if (index == 77) return redBeetColor;
   if (index >= 65 && index <= 67) return colorTomato;
   if (index == 79) return darkGreen;

   // Default color if not found in any group
   return color(255, 255, 255);
 }

  label_color(){
      const index = listas.findIndex(item => item[1] === this.id);
      const pretos = [5,6,7,8,9,11,12,13,16,19,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,68,70,73,75,76,78];
      if(pretos.includes(index)){return color(0,0,0)}
      else return color(255,255,255);
  }


  draw() {
      // Draw target
      fill(color(this.chose_color()));
      circle(this.x, this.y, this.width);

      // Draw the big first letter
      textSize(35); // Increase the font size to a larger value
      fill(this.label_color());
      textAlign(CENTER, CENTER);
      strokeWeight(2); // Increase stroke weight to make the text look bolder
      text(this.label.charAt(0), this.x, this.y - 10); // Adjust the position to be closer to the center of the circle
      strokeWeight(1); // Reset the stroke weight to the default value

      // Draw the full label below the big first letter
      textSize(12.5); // Change the font size back to the original value
      textAlign(CENTER, CENTER);
      text(this.label, this.x, this.y + 20); // Adjust the position to draw the label closer to the big first letter
  }
}