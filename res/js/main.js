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

start.onclick = () => {
  start.style.display = "none";
  moveElement(point, 300,200)

}

const moveElement = (elemnet, x, y) =>{
elemnet.style.top = y + "px";
elemnet.style.left = x + "px"
}

