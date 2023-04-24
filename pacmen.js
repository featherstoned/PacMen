var pos = 0;
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];
let direction = 0;
const pacMen = [];

//RETURNS OBJECT WITH RANDOM VALUES
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

//makePac function
function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  
  newimg.style.position = 'absolute';
  //THIS DOESN'T SEEM TO MAKE A DIFFERENCE
  //newimg.src = "./images/PacMan1.png"; 
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  
  game.appendChild(newimg);
  
  let pacIndex = 0;
  let pacDirection = 0;
  //SET newimg src TO FIRST IMAGE IN pacArray
  newimg.src = pacArray[pacDirection][pacIndex];
  //setInterval TO ITERATE THRU pacArray
  setInterval(function() {
    pacIndex = (pacIndex + 1) % 2;
    newimg.src = pacArray[pacDirection][pacIndex];
  }, 200);
  
  return {
    position,
    velocity,
    newimg,
  };
  }//end of makePac function
  
  //UPDATES TO VELOCITY AND POSITION
  function update() {
    pacMen.forEach((item) => {
      checkCollisions(item);
      item.position.x += item.velocity.x;
      item.position.y += item.velocity.y;
      //interprets as pixel values
      item.newimg.style.left = item.position.x + "px";
      item.newimg.style.top = item.position.y + "px";
    });
    setTimeout(update, 20);
  }
  
  //COLLISION WITH BROWSER WINDOW
  function checkCollisions(item) {
    if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
    if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
  }
  
  //ADDS NEW PACDUDE
  function makeOne() {
    pacMen.push(makePac()); 
  }
  


  
