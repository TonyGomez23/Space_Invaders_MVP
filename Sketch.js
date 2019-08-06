let x1 = 390;
let x2 = 417;
let x3 = 444;

function setup(){
    createCanvas(800,800);
    
}

function draw(){
    
    if (keyIsDown(LEFT_ARROW)){
        x1 -= 10;
        x2 -= 10;
        x3 -= 10;
    } if (keyIsDown(RIGHT_ARROW)){
        x1 += 10;
        x2 += 10;
        x3 += 10;
    };
    clear();
    beginShape(TRIANGLE_FAN);
    fill('grey')
    rect(0, 0, 1000, 130);
    background("black");
    enemies();
    player();
   
}

function player(){
    triangle(x1, 775, x2, 720, x3, 775);
   
};



function enemies(){
   //1st E
   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(195, 285);
   vertex(225, 255);
   vertex(195, 225);
   vertex(165, 255);
   endShape();

   //2nd E
   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(195, 205);
   vertex(225, 175);
   vertex(195, 145);
   vertex(165, 175);
   endShape();

   //3rd E
   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(295, 205);
   vertex(325, 175);
   vertex(295, 145);
   vertex(265, 175);
   endShape();

   //4th E
   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(295, 285);
   vertex(325, 255);
   vertex(295, 225);
   vertex(265, 255);
   endShape();

   //5th E
   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(395, 205);
   vertex(425, 175);
   vertex(395, 145);
   vertex(365, 175);
   endShape();

   //6th E
   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(395, 285);
   vertex(425, 255);
   vertex(395, 225);
   vertex(365, 255);
   endShape();

   //7th E
   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(495, 205);
   vertex(525, 175);
   vertex(495, 145);
   vertex(465, 175);
   endShape();

    //8th
   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(495, 285);
   vertex(525, 255);
   vertex(495, 225);
   vertex(465, 255);
   endShape();

   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(195, 205);
   vertex(225, 175);
   vertex(195, 145);
   vertex(165, 175);
   endShape();

   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(195, 205);
   vertex(225, 175);
   vertex(195, 145);
   vertex(165, 175);
   endShape();

   fill(237, 34, 93);
   noStroke();
   beginShape();
   vertex(195, 205);
   vertex(225, 175);
   vertex(195, 145);
   vertex(165, 175);
   endShape();
}
