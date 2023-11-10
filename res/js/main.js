/*
        parametrz
function tomas(item, item2){
console.log("nesu "+ item + "," + item2);    
}


//argument - args
tomas("mys", "pc");
tomas("notebook", "monitor");

const ttomas = (item, item2) => {
    console.log(`nesu ${item}, ${item2}`);   
}

tomas("mys", "pc");
tomas("notebook", "monitor");*/

/*
$ - shift + 4
{} - shift + prava klavesa od p
() shift + 9 
[] prava klavesa od p
*/
/*
      

function play(song, artist){
console.log(`Playing: ${song} by ${artist}`);
}

const playMusic = (song, artist) => {}

play('nevim', 'neynam')
*/
/*
function sum(a, b) {
  return a + b;
}
let resultA = sum(5, 4);
let resultB = sum(7, 4);
let result = sum(resultA, resultB);
console.log(result)

const ssum = (a, b) => a + b;
let rresultA = sum(5, 4);
let rresultB = sum(7, 4);
let rresult = sum(rresultA, rresultB);
console.log(rresult)*/

const point = document.getElementById("point");
const start = document.getElementById("start");
const showTime = document.getElementById("showTime");
let gameInterval;
let gameIntervalSpeed = 3000;
let gameStart;

start.onclick = () => {
  start.style.display = "none";
  moveElement(
    point,
    getRandomNuber(0, window.innerWidth - 85),
    getRandomNuber(0, window.innerHeight - 85)
  );
  setPointOnClick(point);
  setGameInterval(point);
  gameStart = performance.now();
};

const setPointOnClick = (elemnet) => {
  elemnet.onclick = () => {
    let gameEnd = performance.now();
    let time = gameEnd - gameStart;
    showTime.innerText = `Time: ${time}ms`;
    gameStart = gameEnd;
    elemnet.innerText++;
    if (gameIntervalSpeed > 300) {
      gameIntervalSpeed -= 200;
      setGameInterval(elemnet);
    }
    moveElement(
      elemnet,
      getRandomNuber(0, window.innerWidth - 85),
      getRandomNuber(0, window.innerHeight - 85)
    );
  };
};

const moveElement = (elemnet, x, y) => {
  elemnet.style.top = y + "px";
  elemnet.style.left = x + "px";
};

const setGameInterval = (elemnet) => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    moveElement(
      elemnet,
      getRandomNuber(0, window.innerWidth - 85),
      getRandomNuber(0, window.innerHeight - 85)
    );
  }, gameIntervalSpeed);
};

const getRandomNuber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
