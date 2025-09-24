$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
//createPlatform(xPos, yPos, Width, Height)
createPlatform(10, 600, 100, 5, "black" )
createPlatform(900, 600, 100, 5, "black")
createPlatform(800, 300, 100, 5, "black")
createPlatform(500, 200, 100, 5, "white")
createPlatform(700, 700, 100, 5, "blue")
createPlatform(900, 600, 100, 5, "black")
createPlatform(600, 400, 100, 5, "black")
createPlatform(500, 600, 100, 5, "white")
createPlatform(800, 300, 100, 5, "black")
createPlatform(1000, 500, 100, 5, "black")
createPlatform(900, 200, 100, 5, "blue")
createPlatform(1300, 300, 100, 5, "blue")
createPlatform(1200, 400, 100, 5, "black")
createPlatform(1000, 500, 100, 5, "white")
createPlatform(1200, 600, 100, 5, "blue", 1000, 1300, 4 )
createPlatform(700, 900, 100, 5, "black")
createPlatform(1200, 200, 100, 5, "black")
createPlatform(1100, 700, 100, 5, "black")
createPlatform(500, 600, 100, 5, "blue", 200, 400, 6 )
createPlatform(300, 450, 100, 5, "black")
    // TODO 3 - Create Collectables
//createCollectable("type", xPos, yPos, gravity?, bounce? Between 0-1, minX = null, maxX = null, speed = 1)
//"type" can be 6 things... database diamond grace kennedi max steve
createCollectable("database", 400, 400) //Sits Still
createCollectable("database", 800, 300) //Sits Still
createCollectable("diamond", 600, 100, 0.1)
createCollectable("database", 1300, 500) //Sits Still
createCollectable("database", 1000, 700) //Sits Still
    
    // TODO 4 - Create Cannons
//createCannon("wall", pos, secondsX1000, width, height)
createCannon("top", 700, 2015)
createCannon("top", 1100, 1000)
createCannon("right", 700, 2000)



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
