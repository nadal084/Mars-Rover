var movingArtifact = {
  direction: "North",
  x:0,
  y:0,
  bitacoraLog: [ ]
}

function turnLeft(rover){
    
    switch(rover.direction){
      case "North":
        rover.direction = "West";
        break;
      case "West":
        rover.direction = "South";
        break;
      case "South":
        rover.direction = "East";
        break;

    }
      console.log(rover);
      return rover.direction;
  }
  

function turnRight(rover){
  
    switch(rover.direction){
      case "North":
        rover.direction = "East";
        break;
      case "East":
        rover.direction = "South";
        break;
      case "South":
        rover.direction = "West";
        break;

    }
      console.log(rover);
      return rover.direction;
  
}

function moveForward(rover){
    if(rover.x < 10 && rover.y < 10 && rover.x >= 0 && rover.y >= 0){
    switch(rover.direction){

      case "North":
      
       rover.y-= 1;
       rover.bitacoraLog.push( rover.x,",",rover.y)
       break;

      case "East":
       rover.x+= 1;
       rover.bitacoraLog.push( rover.x,",",rover.y)
       break;

      case "West":
       rover.x-= 1;
       rover.bitacoraLog.push( rover.x,",",rover.y)
       break;

      case "South":
       rover.y+= 1;
       rover.bitacoraLog.push( rover.x,",",rover.y) 
       break;
       }
    
    console.log(rover);
    
    return rover.position;
    }
}

function instructions(chunkString){
      for( n = 0; n < chunkString.length; n++){
          var firstletter = chunkString.CharAt(n);
      
         switch(firstletter){
           case "f":
             moveForward(rover);
             break;
          
           case "l":
             turnLeft(rover);
             break;

           case "r":
             turnRight(rover);
             break;
            
            default:
             console.log("this chunkString is not correct,Please try again!");
          }

      } 
          console.log(chunkstring);
        
        return chunkstring.firstletter;
}
      instructions('rffrfflfrff');