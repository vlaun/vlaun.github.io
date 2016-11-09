var allCones = Math.floor(Math.random() * 50) + 50;

var cones = Math.floor(Math.random() * 5) + 1;

var conesLeft = allCones;

do {
    cones = Math.floor(Math.random() * 5) + 1;
    console.log(cones + " cones sold...");
    //if I have 2 available and a cusoter wants 4, I shouldn't sell
    if (cones <= conesLeft) { //If I have enough cones available
        conesLeft -= cones; //act of selling the cones
        /*try again */
    } else {
        console.log("Cannot sell" + cones + " cones I only have " + conesLeft + "...")
    }
} while (conesLeft > 0);
    console.log("Yay! I sold them all!");








