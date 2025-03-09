let page = 0; 
let imgTitle;
let imgRoom1BG, imgRoom2BG, imgRoom3BG, imgRoom4BG;
let imgr1Box, imgr1BoxGif, imgr1Jersey, imgr1Journal, imgr1JournalGif, imgr1Phone, imgr1PhoneGif, imgr1Poster, imgr1Trash, imgr1TrashGif; 
let imgr2Bag, imgr2BagGif, imgr2Helmet, imgr2HelmetGif, imgr2Coat, imgr2CoatGif, imgr2Cups, imgr2CupsGif, imgr2Laptop, imgr2LaptopGif, imgr2Poster, imgr2PosterGif, imgr2Trash, imgr2TrashGif;
let mouseWasPressed; 
let imgShrink = 2.3;
let handPointerYes = false;
let displayTextOn = false;
let displayText;
let font;
let soundRm1, soundRm2, soundRm3, soundRm4;

function preload() {
  imgTitle = loadImage('/dorm-room/assets/0-title.png');
  font = loadFont("/dorm-room/assets/VCR.ttf");

  soundRm1 = loadSound('/dorm-room/assets/sound/milk-fall.mp3');
  soundRm2 = loadSound('/dorm-room/assets/sound/milk-spring.mp3');
  soundRm3 = loadSound('/dorm-room/assets/sound/milk-summer.mp3');
  soundRm4 = loadSound('/dorm-room/assets/sound/milk-winter.mp3');
  soundRm1.setVolume(0.15);
  soundRm2.setVolume(0.15);
  soundRm3.setVolume(0.15);
  soundRm4.setVolume(0.15);

  preloadRm1();
  //preloadRm2();
  //preloadRm3();
  //preloadRm4();
}

function preloadRm1() {
  imgRoom1BG = loadImage('/dorm-room/assets/fall/room1-bg.png');
  imgr1Box = loadImage('/dorm-room/assets/fall/room1-box.png');
  imgr1BoxGif = loadImage('/dorm-room/assets/fall/room1-box.gif');
  imgr1Jersey = loadImage('/dorm-room/assets/fall/room1-jersey.png');
  imgr1Journal = loadImage('/dorm-room/assets/fall/room1-journal.png');
  imgr1JournalGif = loadImage('/dorm-room/assets/fall/room1-journal.gif');
  imgr1Phone = loadImage('/dorm-room/assets/fall/room1-phone.png');
  imgr1PhoneGif = loadImage('/dorm-room/assets/fall/room1-phone.gif');
  imgr1Poster = loadImage('/dorm-room/assets/fall/room1-poster.png');
  imgr1Trash = loadImage('/dorm-room/assets/fall/room1-trashcan.png');
  imgr1TrashGif = loadImage('/dorm-room/assets/fall/room1-trashcan.gif');
}

function preloadRm2() {
  imgRoom2BG = loadImage('/dorm-room/assets/winter/room2-bg.png');
  imgr2Bag = loadImage('/dorm-room/assets/winter/bag_ball_card.png');
  imgr2BagGif = loadImage('/dorm-room/assets/winter/bag_ball_card.gif');
  imgr2Helmet = loadImage('/dorm-room/assets/winter/box_helmet.png');
  imgr2HelmetGif = loadImage('/dorm-room/assets/winter/box_helmet.gif');
  imgr2Coat = loadImage('/dorm-room/assets/winter/coat.png');
  imgr2CoatGif = loadImage('/dorm-room/assets/winter/coat.gif');
  imgr2Cups = loadImage('/dorm-room/assets/winter/cups_bottle.png');
  imgr2CupsGif = loadImage('/dorm-room/assets/winter/cups_bottle.gif');
  imgr2Laptop = loadImage('/dorm-room/assets/winter/laptop.png');
  imgr2LaptopGif = loadImage('/dorm-room/assets/winter/laptop.gif');
  imgr2Poster = loadImage('/dorm-room/assets/winter/poster.png');
  imgr2PosterGif = loadImage('/dorm-room/assets/winter/poster.gif');
  imgr2Trash = loadImage('/dorm-room/assets/winter/trashcan.png');
  imgr2TrashGif = loadImage('/dorm-room/assets/winter/trashcan.gif');
  imgr1Journal = loadImage('/dorm-room/assets/fall/room1-journal.png');
  imgr1JournalGif = loadImage('/dorm-room/assets/fall/room1-journal.gif');
}

function preloadRm3() {
  imgRoom3BG = loadImage('/dorm-room/assets/spring/room3-bg.png');
  imgr3Avocado = loadImage('/dorm-room/assets/spring/room3-avocado.png');
  imgr3Bracelet = loadImage('/dorm-room/assets/spring/room3-bracelet.png');
  imgr3BraceletGif = loadImage('/dorm-room/assets/spring/room3-bracelet.gif');
  imgr3Cucumber = loadImage('/dorm-room/assets/spring/room3-cucumber.png');
  imgr3Phone = loadImage('/dorm-room/assets/spring/room3-phone.png');
  imgr3PhoneGif = loadImage('/dorm-room/assets/spring/room3-phone.gif');
  imgr3Trash = loadImage('/dorm-room/assets/spring/room3-trashcan.png');
  imgr3TrashGif = loadImage('/dorm-room/assets/spring/room3-trashcan.gif');
  imgr1Journal = loadImage('/dorm-room/assets/fall/room1-journal.png');
  imgr1JournalGif = loadImage('/dorm-room/assets/fall/room1-journal.gif');
}

function preloadRm4() {
  imgRoom4BG = loadImage('/dorm-room/assets/summer/room4-bg.png');
  imgr4BoxFlap = loadImage('/dorm-room/assets/summer/boxflap.png');
  imgr4BoxFlapGif = loadImage('/dorm-room/assets/summer/boxflap.gif');
  imgr4BoxSpin = loadImage('/dorm-room/assets/summer/boxspin.png');
  imgr4BoxTapeGif = loadImage('/dorm-room/assets/summer/boxtape.gif');
  imgr4Test = loadImage('/dorm-room/assets/summer/pset.png');
  imgr4TestGif = loadImage('/dorm-room/assets/summer/pset.gif');
  imgr4TapePen = loadImage('/dorm-room/assets/summer/tapepen.png');
  imgr4TapePenGif = loadImage('/dorm-room/assets/summer/tapepen.gif');
  imgr4Trash = loadImage('/dorm-room/assets/summer/trash.png');
  imgr1Journal = loadImage('/dorm-room/assets/fall/room1-journal.png');
  imgr1JournalGif = loadImage('/dorm-room/assets/fall/room1-journal.gif');
}

function setup() {
  createCanvas(1000, 650);
  page = 0; 
  mouseWasPressed = false;
  textFont(font);
  preload(); 

  let button = createButton('next page');
  button.position(0, 650);

  // Change season when the button is pressed.
  button.mousePressed(changePage);
}

function changePage() {
  if (page == 1) {
    preloadRm2();
    page = 2; 
    soundRm1.stop();
    soundRm2.loop();
  }
  else if (page == 2) {
    preloadRm3();
    page = 3;
    soundRm2.stop();
    soundRm3.loop();
  }
  else if (page == 3) {
    preloadRm4();
    page = 4;
    soundRm3.stop();
    soundRm4.loop();
  }
  else if (page == 4) {
    page = 0;
    soundRm4.stop();
  }
  else {
    preloadRm1();
    page = 1; 
    soundRm1.loop();
  }
}

function cursorCheck() {
  if (!handPointerYes)
    handPointerYes = true;
}

function drawJournal() {
  if (((mouseX > 70) && (mouseX < 196)) && 
      ((mouseY > 404) && (mouseY < 474))) {

        image(imgr1JournalGif, 70, 360, imgr1JournalGif.width/imgShrink, imgr1JournalGif.height/imgShrink);
        cursorCheck();
        if (page == 1) {
          if (newClick()) {
            console.log("journal entry appear");
            displayText = "9/20/14\n\nFirst month of college! Met the bros, already planning the first party, lacrosse tryouts next week. I met this really cute girl in physics class today. #FreshmanVibes";
          }
        }
        else if (page == 2) {
          if (newClick()) {
            console.log("journal entry appear");
            displayText = "12/21/14\n\nMet with an advisor today. They asked about my \‘passions.\’ Still no clue. Did get a bracelet for Justine though. Can\’t wait to show her. ";
          }
        }
        else if (page == 3) {
          if (newClick()) {
            console.log("journal entry appear");
            if (!displayTextOn) displayTextOn = true;
            displayText = "3/10/14\n\nJustine isn't picking up my calls. Also I can’t find my orange sweater. Did my brother take it back when he visited for alumni day??? Should've never let 'im into my room.";
          }
        }
        else {
          if (newClick()) {
            console.log("journal entry appear");
            displayText = "5/13/14\n\nTried to talk to another girl at the party and she totally brushed me off. Mum\'s picking me up tomorrow morning. Most of my boxes should be packed. I can\'t fucking wait to get out of here.";
          }
        }
    }
  else {
    image(imgr1Journal, 70, 360, imgr1Journal.width/imgShrink, imgr1Journal.height/imgShrink);
  }
}

function drawPhone() {
  if (((mouseX > 55) && (mouseX < 120)) && 
  ((mouseY > 360) && (mouseY < 390))) {
    cursorCheck();
    
    if (page == 1) {
      image(imgr1PhoneGif, 57, 300, imgr1PhoneGif.width/imgShrink, imgr1PhoneGif.height/imgShrink);

      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("phone text appear");
        displayText = "Lacrosse Team Try-outs happening at 5:00 PM. Been practicing every day. Feeling the grind, but still pumped. This is my shot to prove myself."
      }
    }
    else if (page == 3) {
      image(imgr3PhoneGif, 57, 300, imgr3PhoneGif.width/imgShrink, imgr3PhoneGif.height/imgShrink);

      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("phone text appear");
        displayText = "4 missed calls from Mum.Parents called, asking about grades. Told them everything\’s good. They don\’t need to know what they don\'t know."
      }
    }


  }
  else {
    if (page == 1) 
      image(imgr1Phone, 57, 300, imgr1Phone.width/imgShrink, imgr1Phone.height/imgShrink);
    else if (page == 3) 
      image(imgr3Phone, 57, 300, imgr3Phone.width/imgShrink, imgr3Phone.height/imgShrink);
  }
}


// checks if it's a new click
function newClick(){
  if (mouseIsPressed && (mouseWasPressed == false)) { 
    /*
    // flip switch on whether display text should be on
    displayTextOn = !displayTextOn;

    // if display text is not supposed to be on, empty out container
    if (!displayTextOn) {
      displayText = null;
    }
      */
    return true;
  }
  else {
    return false;
  }
}

function draw() {

  handPointerYes = false;

  if (page == 0) {
    background("white");
    textSize(100);
    //text("room", 200, 200);
    
    image(imgTitle, 0, 0, width*1.1, height*0.9);
  }
  //============================== PAGE 1 ==============================//
  else if (page == 1) {
    image(imgRoom1BG, 0, 0, width, height);
    
    image(imgr1Jersey, 720, 280, imgr1Jersey.width/imgShrink, imgr1Jersey.height/imgShrink); 
    image(imgr1Poster, 770, 95, imgr1Poster.width/imgShrink, imgr1Poster.height/imgShrink);
    // drawBox---------------------------------------------------------------------------------
    if (((mouseX > 508) && (mouseX < 705)) && 
    ((mouseY > 476) && (mouseY < 623))) {
      cursorCheck();
      image(imgr1BoxGif, 500, 450, imgr1BoxGif.width/imgShrink, imgr1BoxGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("box text appear");
        displayText = "I put my favorite books in here. Right now, I'm reading The Art of War by Sun Tzu. Tactics for life, lacrosse, and crushing it in class. ";
      }
    }
    else {
      image(imgr1Box, 500, 450, imgr1Box.width/imgShrink, imgr1Box.height/imgShrink); 
    }
    // drawTrash-----------------------------------------------------------------------------------
    if (((mouseX > 842) && (mouseX < 1000)) && 
    ((mouseY > 480) && (mouseY < 650))) {
      cursorCheck();
      image(imgr1TrashGif,842, 450, imgr1TrashGif.width/imgShrink, imgr1TrashGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("trash text appear");
        displayText = "Five red bull cans. Blazing through these even though it\'s still the first two weeks of school. I wonder how much sugar\'s in these? ";
      }
    }
    else {
      image(imgr1Trash, 842, 450, imgr1Trash.width/imgShrink, imgr1Trash.height/imgShrink); 
    }
    //-------------------------------------------------------------------------------------------
    drawPhone();
    drawJournal(); 
  }
  //============================== PAGE 2 ==============================//
  else if (page == 2) {
    image(imgRoom2BG, 0, 0, width, height); 

    // drawBag------------------------------------------------------------------------------------
    if (((mouseX > 288) && (mouseX < 358)) && 
    ((mouseY >  94) && (mouseY < 155))) {
      cursorCheck();
      image(imgr2BagGif, 286, 90, imgr2BagGif.width/imgShrink, imgr2BagGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("bag text appear");
        if (newClick()) {
          console.log("gift bag text appear");
          displayText = "I can use this gift bag for when I give that to Justine later. $7.99 though??? Seems like a lot for a couple pieces of paper glued together.";
        }
      }
    }
    else {
      image(imgr2Bag, 286, 90, imgr2Bag.width/imgShrink, imgr2Bag.height/imgShrink);
    }
    //---------------------------------------------------------------------------------------------
    // drawCoat------------------------------------------------------------------------------------
    if (((mouseX > 742) && (mouseX < 821)) && 
    ((mouseY >  280) && (mouseY < 610))) {
      cursorCheck();
      image(imgr2CoatGif, 710, 270, imgr2CoatGif.width/imgShrink, imgr2CoatGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("coat text appear");
        displayText = "First snow on campus! East coast weather is brutal. This Patagonia coat better get me through the winter.";
      }
    }
    else {
      image(imgr2Coat, 710, 270, imgr2Coat.width/imgShrink, imgr2Coat.height/imgShrink);
    }
    //-----------------------------------------------------------------------------------------------
    // drawHelmet------------------------------------------------------------------------------------
    if (((mouseX > 273) && (mouseX < 370)) && 
    ((mouseY >  370) && (mouseY < 460))) {
      cursorCheck();
      image(imgr2HelmetGif, 270, 310, imgr2HelmetGif.width/imgShrink, imgr2HelmetGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("helmet text appear");
        displayText = "My dad sent me this helmet for Christmas. Pretty thoughtful of him. Wouldn't have pictured him picking this out at a store.";
      }
    }
    else {
      image(imgr2Helmet, 270, 310, imgr2Helmet.width/imgShrink, imgr2Helmet.height/imgShrink); 
    }
    //-----------------------------------------------------------------------------------------------
    // drawPoster------------------------------------------------------------------------------------
    if (((mouseX > 783) && (mouseX < 880)) && 
    ((mouseY >  106) && (mouseY < 250))) {
      cursorCheck();
      image(imgr2PosterGif, 770, 95, imgr2PosterGif.width/imgShrink, imgr2PosterGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("poster text appear");
        displayText = "I got this poster at an old thrift store. Growing up, I watched The First Avenger like 100 times. Ever since I was a kid, Captain America was my hero. #Underdog";
      }
    }
    else {
      image(imgr2Poster, 770, 95, imgr2Poster.width/imgShrink, imgr2Poster.height/imgShrink);
    }
    //-----------------------------------------------------------------------------------------------
    // drawLaptop------------------------------------------------------------------------------------
    if (((mouseX > 562) && (mouseX < 664)) && 
    ((mouseY >  292) && (mouseY < 389))) {
      cursorCheck();
      image(imgr2LaptopGif, 562, 288, imgr2LaptopGif.width/imgShrink, imgr2LaptopGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("laptop text appear");
        displayText = "Gotta add my new team on facebook now. I think they\'re coming around this weekend for pickups. I\'m gonna get so bent that night."
      }
    }
    else {
      image(imgr2Laptop, 562, 288, imgr2Laptop.width/imgShrink, imgr2Laptop.height/imgShrink); 
    }
    //--------------------------------------------------------------------------------------------------
    // drawCups------------------------------------------------------------------------------------
    if (((mouseX > 528) && (mouseX < 652)) && 
    ((mouseY >  529) && (mouseY < 632))) {
      cursorCheck();
      image(imgr2CupsGif, 495, 501, imgr2CupsGif.width/imgShrink, imgr2CupsGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("cups text appear");
        displayText = "Last night was wild. Don\’t even remember half of it. Thank God for Snapchat stories. Recovery day today. Netflix and naps.";
      }
    }
    else {
      image(imgr2Cups, 495, 501, imgr2Cups.width/imgShrink, imgr2Cups.height/imgShrink); 
    }
    //--------------------------------------------------------------------------------------------------
    // drawTrash------------------------------------------------------------------------------------
    if (((mouseX > 825) && (mouseX < 946)) && 
    ((mouseY > 460) && (mouseY < 649))) {
      cursorCheck();
      image(imgr2TrashGif, 820, 410, imgr2TrashGif.width/imgShrink, imgr2TrashGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("trash text appear");
        displayText = "Something in here stinks. Maybe it\'s the peel from the banana I snuck out of the dining hall? I forgot to take out the trash again.";
      }
    }
    else {
      image(imgr2Trash, 820, 410, imgr2Trash.width/imgShrink, imgr2Trash.height/imgShrink); 
    }
    //--------------------------------------------------------------------------------------------------
    drawJournal(); 

  }
  //============================== PAGE 3 ==============================//
  else if (page == 3) {
    image(imgRoom3BG, 0, 0, width, height); 

    image(imgr3Avocado, 246, 118, imgr3Avocado.width/imgShrink, imgr3Avocado.height/imgShrink);
    image(imgr3Cucumber, 418, 501, imgr3Cucumber.width/imgShrink, imgr3Cucumber.height/imgShrink);
    // drawBracelet------------------------------------------------------------------------------------
    if (((mouseX > 345) && (mouseX < 374)) && 
    ((mouseY > 538) && (mouseY < 618))) {
      cursorCheck();
      image(imgr3BraceletGif, 345, 538, imgr3BraceletGif.width/imgShrink, imgr3BraceletGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("bracelet text appear");
        displayText = "...";
      }
    }
    else {
      image(imgr3Bracelet, 345, 538, imgr3Bracelet.width/imgShrink, imgr3Bracelet.height/imgShrink); 
    }
    //-----------------------
    // drawTrash------------------------------------------------------------------------------------
    if (((mouseX > 830) && (mouseX < 950)) && 
    ((mouseY > 467) && (mouseY < 640))) {
      cursorCheck();
      image(imgr3TrashGif, 822, 430, imgr3TrashGif.width/imgShrink, imgr3TrashGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("trash text appear");
        displayText = "How does trash pile up so fast? I swear I just took it out, and now it\’s overflowing again. Mom made it look so easy. Also I lost my shaver. Is it in here?";
      }
    }
    else {
      image(imgr3Trash, 822, 430, imgr3Trash.width/imgShrink, imgr3Trash.height/imgShrink); 
    }
    //--------------------------------------------------------------------------------------------
    drawPhone();
    drawJournal(); 
  }
  //============================== PAGE 4 ==============================//
  else if (page == 4) {
    image(imgRoom4BG, 0, 0, width, height); 

    image(imgr4BoxSpin, 270, 360, imgr4BoxSpin.width/imgShrink, imgr4BoxSpin.height/imgShrink);
    image(imgr4TapePen, 250, 130, imgr4TapePen.width/imgShrink, imgr4TapePen.height/imgShrink);
    image(imgr4Trash, 822, 480, imgr4Trash.width/imgShrink, imgr4Trash.height/imgShrink);
    // drawBoxFlap------------------------------------------------------------------------------------
    if (((mouseX > 495) && (mouseX < 665)) && 
    ((mouseY > 420) && (mouseY < 547))) {
      cursorCheck();
      image(imgr4BoxFlapGif, 450, 380, imgr4BoxFlapGif.width/imgShrink, imgr4BoxFlapGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("box flap text appear");
        displayText = "Finally done with folding up these towels. Got way more stuff than I remember bringing in. I hope I score the bigger dorm with my friends next year.";
      }
    }
    else {
      image(imgr4BoxFlap, 450, 380, imgr4BoxFlap.width/imgShrink, imgr4BoxFlap.height/imgShrink); 
    }
    //-----------------------
    // drawTest------------------------------------------------------------------------------------
    if (((mouseX > 527) && (mouseX < 605)) && 
    ((mouseY > 235) && (mouseY < 302))) {
      cursorCheck();
      image(imgr4TestGif, 523, 235, imgr4TestGif.width/imgShrink, imgr4TestGif.height/imgShrink);
  
      // if mouse is pressed, do the following action
      if (newClick()) {
        console.log("test text appear");
        displayText = "69 on my physics final. Everyone\’s talking about their grades, and I\’m just here like… how do they even study? Dad better not see this.";
      }
    }
    else {
      image(imgr4Test, 523, 235, imgr4Test.width/imgShrink, imgr4Test.height/imgShrink); 
    }
    //--------------------------------------------------------------------------------------------
    drawJournal(); 

  }

  // DRAW X,Y LOCATION OF MOUSE
  textSize(15);
  if (page == 2)
    fill(255);
  else 
    fill(0);
  text(mouseX + ", " + mouseY, 30, 30);

  // DRAW CURSOR
  if (handPointerYes)
    {
      cursor(HAND);
      if (newClick()) {
        // turn on the displayText
        displayTextOn = true;
      }
  }
  else {
    if (newClick()) {
      // turn off the displayText
      displayTextOn = false;
    }
    cursor(ARROW);
  }
    

  //store information on whether mouse was pressed
  if (mouseIsPressed) { mouseWasPressed = true; }
  else { mouseWasPressed = false;  }

  // DRAW DESCRIPTION TEXT
  if (displayTextOn) {
    if (displayText != null) {
      //console.log("display text on");
      fill(255);
      color("white");
      stroke("lavender"); 
      strokeWeight(5);
      rect(mouseX, mouseY, 300, 200);
      noStroke();
      fill(0);
      textWrap(WORD);
      textSize(15);
      text(displayText, mouseX+20, mouseY+30, 280);
    }
  }
}