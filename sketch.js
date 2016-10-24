var fly1;
var fly2;

function preload() {
  imageMode(CENTER);
  grass = loadImage("grass.jpg")
  fly1 = loadImage("Dragonfly1.png");
  fly2 = loadImage("Dragonfly2.png");
}

function setup() {
  createCanvas(1150, 700);
  bug = new Race(500, 400, 12);
  dragonfly = new Race(20, 10, 5);
  dragonfly2 = new Race(300, 200, 8);
}

function draw() {

 image(grass,0,0,2500,2000)
 fill(255);
 textSize(50);
 text("Race to the Cursor!",20,600)
 bug.move();
 bug.display();
 bug.interact();
 dragonfly.move();
 dragonfly.display1();
 dragonfly.interact();
 dragonfly2.move();
 dragonfly2.display2();
 dragonfly2.interact();
}

function Race(tempX, tempY, tempspeed) {
  this.x = tempX;
  this.y = tempY;
  this.speed = tempspeed;

this.move = function() {

  this.x += random(-this.speed, this.speed);
  this.y += random(-this.speed, this.speed);

}
this.display = function() {
  image(fly1, this.x, this.y);

  if (this.y > 800 || this.y < 0) {
    fill(255);
    textSize(50);
    text("bzzzzz", 100, 350);
  }
}

this.display1 = function() {
  image(fly2, this.x, this.y);

  if (this.y > 800 || this.y < 0) {
    fill(255);
    textSize(50);
    text("bzzz", 200, 500);
  }
}

this.display2 = function() {
  image(fly2, this.x, this.y);

  if (this.y > 800 || this.y < 0) {
    fill(255);
    textSize(50);
    text("bzzzzzz", 500, 350);
  }
}

this.interact = function() {
    if (mouseX > 300) {
      this.x += 2
    } else {
      this.x -= 2
    }
  }
}
